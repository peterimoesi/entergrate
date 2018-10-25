export function getDocumentScrollTop() {
    const { body, documentElement } = document;
    return body.scrollTop || documentElement.scrollTop;
}
export function setDocumentScrollTop(pixels, elem) {
    if (elem) {
        elem.scrollTop = pixels;
        return;
    }
    document.body.scrollTop = pixels;
    document.documentElement.scrollTop = pixels;
}

export function animateToElem(elem, time) {
    const to = elem.offsetTop;
    animateScrollTop(to - 100, time);
}

export function animateScrollTop(to, time) {
    const from = getDocumentScrollTop();
    const delta = to - from;
    let startTime;
    window.requestAnimationFrame(function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progressTime = timestamp - startTime; // 0 approaching time
        const progressPercent = Math.min(progressTime / time, 1);
        const scrollTop = from + progressPercent * delta;
        setDocumentScrollTop(scrollTop);
        if (progressTime < time) {
            window.requestAnimationFrame(step);
        }
    });
}
