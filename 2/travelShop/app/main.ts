import {ITour, Tour} from "./models/tour.js";
import {ModalService} from "./services/modal/modalService.js";

const tours =  await getAllTours();
const modalService = new ModalService(tours);

renderTours(tours);


async function getAllTours() : Promise<Tour[]> {
    const response = await fetch(`https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/`);
    const results = await response.json();
    const tours = results.map(tour => new Tour(
        tour.id,
        tour.description,
        tour.name,
        tour.price,
        tour.tourOperator,
        tour.img));

    return tours;
}

function renderTours(tours: ITour[]){
    const cardsEl = document.querySelector('.tours');

    tours.map(
        tour => {
            const divWrap = document.createElement("div");
            divWrap.id = tour.id;
            divWrap.classList.add("card");
            divWrap.classList.add("open-modal");

            divWrap.innerHTML = `
<div class="card-body">
    <h2 class="card-title">${tour.name}</h2>
    <img src="img/${tour.img}" alt="img">
    <p class="card-text description">${tour.description}</p>
    <p class="card-text price">${tour.price}</p>
</div>`

            divWrap.addEventListener(
                "click",
                event => {
                    let target = event.currentTarget as Element;
                    let id = target.getAttribute("id");
                    modalService.openModal(id);
                }
            )

            cardsEl.appendChild(divWrap);
        });
}

