export class Modal {
    private static modals: Modal[] = [];
    private readonly id: number;

    constructor(id: number | null = null) {
        if (id) {
            if(Modal.modals.some(modal => modal.id === id)){
                throw new Error(`Модальное окно с id ${id} уже существует`);
            }

            this.id = id;
        }
        else {
            const length = Modal.modals.length;
            this.id = length === 0 ? 1 : (Modal.modals[length - 1].id + 1);
        }

        Modal.modals.push(this);
    }

    public open(template:string): void{
        const divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = (this.id).toString();
        divWrap.setAttribute("modal-id", (this.id).toString());
        divWrap.classList.add("modal-element");
        document.body.appendChild(divWrap);
    };

    public static find(id: number): Modal | undefined {
        return Modal.modals.find(modal => modal.id === id);
    }

    public remove(){
        const modalEl = document.getElementById((this.id).toString());
        if(modalEl){
            if(modalEl.parentNode){
                modalEl.parentNode.removeChild(modalEl);
            }
        }
    };

    public static removeById(id: number | null = null){
        let modalId = id;
        const modal = Modal.modals.find(x => x.id === modalId);
        if(modal){
            modal.remove();
            Modal.modals = Modal.modals.filter((el) => el.id != modalId)
        } else {
            const lastEl = Modal.modals.pop();
            if(lastEl){
                lastEl.remove();
            }
        }
    };
}
