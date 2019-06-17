export default class VODepartment {

    attributes: string;
    image: string;
    item_id: number;
    name: string;
    price: string;
    product_id: number;
    quantity: number;
    subtotal: string;


    constructor(attributes: string, image: string, item_id: number, name: string,
        price: string, product_id: number, quantity: number, subtotal: string) {
        this.attributes = attributes;
        this.image = image;
        this.item_id = item_id;
        this.name = name;
        this.price = price;
        this.product_id = product_id;
        this.quantity = quantity;
        this.subtotal = subtotal;
    }

}