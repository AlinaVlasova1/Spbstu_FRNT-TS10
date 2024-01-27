import {Modal} from "../../classes/modal.js";
import {Tour} from "../../models/tour.js";

export class ModalService {
    private readonly tours: Tour[];

    constructor(tours: Tour[]) {
        this.tours = tours;
    }

    public openModal(id: string) {
        if (Modal.findEl(id) != undefined) {
            return;
        }

        let tour = this.tours.find(modal => modal.id === id);
        let template = tour.generateTemplate();
        let modal = new Modal(tour.id);
        modal.open(template);
    }
}


