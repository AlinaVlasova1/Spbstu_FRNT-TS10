import {Modal} from "../../classes/modal.js";
import {ITemplateGenerator} from "../../models/template";

export class ModalService {
    private readonly templateGenerators: ITemplateGenerator[];

    constructor(templateGenerators: ITemplateGenerator[]) {
        this.templateGenerators = templateGenerators;
    }

    public openModal(id: string) {
        if (Modal.findEl(id) != undefined) {
            return;
        }

        let templateGenerator = this.templateGenerators.find(generator => generator.id === id);
        let template = templateGenerator.generateTemplate();
        let modal = new Modal(templateGenerator.id);
        modal.open(template);
    }
}


