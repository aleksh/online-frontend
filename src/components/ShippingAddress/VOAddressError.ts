export default class VOAddressError {

    address_1: string;
    city: string;
    region: string;
    postal_code: string;
    country: string;
    shipping_region_id: string;


    constructor(address_1: string = "", city: string = "", region: string = "", postal_code: string = "", country: string = "", shipping_region_id: string = "") {
        this.address_1 = address_1;
        this.city = city;
        this.region = region;
        this.postal_code = postal_code;
        this.country = country;
        this.shipping_region_id = shipping_region_id;
    }
}