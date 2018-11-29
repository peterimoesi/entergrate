export default function toggleModal(state, modalChild) {
    return {
        openModal: !state.openModal,
        modalChild: modalChild
    };
}
