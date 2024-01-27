import {Modal} from "./modal.js";

document
    .getElementById("modal-open")
    .addEventListener("click", _ => {
        openModal()
    });

document
    .getElementById("modal-close")
    .addEventListener("click", _ => {
        Modal.removeById();
    });

function openModal(id: number | null = null) {
    let template = `<div style="border: 1px solid black; height: 60px; width: 60px">Modal window</div>`;
    let modal = new Modal();
    modal.open(template);
}