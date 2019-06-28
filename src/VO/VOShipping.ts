export default class VOShipping {

    shipping_region_id: number;
    shipping_region: string;

    constructor(shipping_region_id: number, shipping_region: string) {
        this.shipping_region_id = shipping_region_id;
        this.shipping_region = shipping_region;
    }
}