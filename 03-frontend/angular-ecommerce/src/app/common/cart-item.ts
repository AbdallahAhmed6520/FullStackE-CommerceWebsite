export class CartItem {

    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;

    quantity: number;

    constructor() {
        this.id = "";
        this.name = "";
        this.imageUrl = "";
        this.unitPrice = 0;
        this.quantity = 1;
    }
}
