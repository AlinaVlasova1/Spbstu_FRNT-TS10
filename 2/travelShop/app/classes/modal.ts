
export class Modal{

    private static readonly modalIdPrefix: string = "modal-";
    private static modals: Modal[] = [];
    readonly id: string;

    constructor(id: string | null = null) {
        if (id) {
            if (Modal.modals.some(modal => modal.id === id)) {
                throw new Error(`Модальное окно с id ${id} уже существует`);
            }
        }

        this.id = id;
        Modal.modals.push(this);
    }

    public open(template:string): void{
        const closeIcon = document.createElement("i");
        closeIcon.classList.add("fa-solid");
        closeIcon.classList.add("fa-xmark");
        closeIcon.addEventListener(
            "click",
            event => {
                Modal.removeById(this.id);
                event.stopPropagation();
            }
        )

        const templateDiv = document.createElement("div");
        templateDiv.innerHTML += template;

        const divWrap = document.createElement("div");
        divWrap.id = Modal.modalIdPrefix + this.id;
        divWrap.setAttribute("modal-id", this.id);
        divWrap.classList.add("modal-element");
        divWrap.appendChild(closeIcon);
        divWrap.appendChild(templateDiv);

        let modalSection = document.getElementById(this.id);
        modalSection.insertBefore(divWrap, modalSection.firstChild);
    };

    public static findEl(id: string): Modal | undefined {
        return Modal.modals.find(modal => modal.id === id);
    }

    public remove(){
        const modalEl = document.getElementById(Modal.modalIdPrefix + this.id);
        if(modalEl){
            if(modalEl.parentNode){
                modalEl.parentNode.removeChild(modalEl);
            }
        }
    };

    public static removeById(modalId: string | null = null){
        const modal = Modal.findEl(modalId);
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