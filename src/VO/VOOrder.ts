export default class VOOrder {

    order_id: number;
    total_amount: string;
    created_on: string;
    shipped_on: boolean;
    status: number;
    name: string;

    constructor(order_id: number, total_amount: string, created_on: string, shipped_on: boolean, status: number, name: string) {
        this.order_id = order_id;
        this.total_amount = total_amount;
        this.created_on = created_on;
        this.shipped_on = shipped_on;
        this.status = status;
        this.name = name;
    }
}