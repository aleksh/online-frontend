export default class VOReview {

    name: string;
    review: string;
    rating: number;
    created_on: string;


    constructor(name: string, review: string, rating: number, created_on: string) {
        this.name = name;
        this.review = review;
        this.rating = rating;
        this.created_on = created_on;
    }

}