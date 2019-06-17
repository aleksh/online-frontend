export default class VOProduct {
	product_id: string;
	name: string;
	description: string;
	price: string;
	discounted_price: string;
    thumbnail: string;
    image: string;
    image2: string;  

	constructor(
		product_id: string,
		name: string,
		description: string,
		price: string,
		discounted_price: string,
        thumbnail: string,
        image:string ="",
        image2:string ="",
	) {
		this.product_id = product_id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.discounted_price = discounted_price;
        this.thumbnail = thumbnail;
        this.image = image;
        this.image2 = image2;
	}
}
