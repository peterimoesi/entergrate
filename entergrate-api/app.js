const createError = require('http-errors');
const express = require('express');

const helmet = require('helmet');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');

require('./routes/passport')(passport);
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users')(passport);
const eventRouter = require('./routes/events');
const contactRouter = require('./routes/contact');

const app = express();

app.use(helmet());
app.use(passport.initialize());

// database configuration
const uri = 'mongodb://localhost/entergrate';
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect(uri);
mongoose.set('debug', true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(
        session({
            secret: 'test',
            resave: false,
            saveUninitialized: true,
            cookie: { expires: 6000000 }
        })
    );
    app.use(passport.session());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
    });
    app.use('/', indexRouter);
    app.use('/api/users', usersRouter);
    app.use('/api/event', eventRouter);
    app.use('/api/contact', contactRouter);

    // catch 404 and forward to error handler
    app.use((req, res, next) => {
        next(createError(404));
    });

    // error handler
    app.use((err, req, res, next) => {
        console.log(err);
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
    return null;
});

module.exports = app;
