export default class VOAttribute {

    attribute_name: string;
    attribute_value_id: number;
    attribute_value: string;


    constructor(attribute_name: string = "", attribute_value_id: number = -1, attribute_value: string = "") {
        this.attribute_name = attribute_name;
        this.attribute_value_id = attribute_value_id;
        this.attribute_value = attribute_value;
    }
}