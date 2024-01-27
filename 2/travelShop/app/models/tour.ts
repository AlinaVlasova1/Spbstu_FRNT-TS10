import {ITemplateGenerator} from "./template";

export interface ITour {
    description: string,
    id: string,
    img: string,
    name: string,
    price: string,
    tourOperator: string
}

export class Tour implements ITour, ITemplateGenerator {
    readonly description: string;
    readonly id: string;
    readonly img: string;
    readonly name: string;
    readonly price: string;
    readonly tourOperator: string;

    constructor(id: string,description: string, name: string,price: string, tourOperator: string, img: string) {
        this.id = id;
        this.description = description;
        this.name = name;
        this.price = price;
        this.tourOperator = tourOperator;
        this.img = img;
    }

    public generateTemplate(): string {

        return `
<div id="${this.id}">
    <div class="card-body">
        <h4 class="card-title">${this.name}</h4>
        <p class="card-text description">${this.description}</p>
        <p class="card-text tourOperator">${this.tourOperator}</p>
        <p class="card-text">${this.price}</p>
        <button>Купить билет</button>
    </div>
</div>`;
    }
}