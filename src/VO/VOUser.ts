export default class VOUser {

    customer_id: number = -1;
    name: string = "";
    email: string = "";
    address_1: string = "";
    address_2: string = "";
    city: string = "";
    region: string = "";
    postal_code: string = "";
    country: string = "";
    shipping_region_id: number = 1;
    day_phone: string = "";
    eve_phone: string = "";
    mob_phone: string = "";
    credit_card: string = "";



    constructor(customer_id: number, name: string, email: string, address_1: string, address_2: string, city: string, region: string,
        postal_code: string, country: string, shipping_region_id: number, day_phone: string, eve_phone: string, mob_phone: string, credit_card: string) {
        this.customer_id = customer_id;
        this.name = name;
        this.email = email;
        this.address_1 = address_1;
        this.address_2 = address_2;
        this.city = city;
        this.region = region;
        this.postal_code = postal_code;
        this.country = country;
        this.shipping_region_id = shipping_region_id;
        this.day_phone = day_phone;
        this.eve_phone = eve_phone;
        this.mob_phone = mob_phone;
        this.credit_card = credit_card;
    }

}