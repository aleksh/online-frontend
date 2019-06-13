export default class VOCategory {

    category_id: number;
    name: string;
    description: string;
    department_id: number;


    constructor(category_id: number, name: string, description: string, department_id: number) {
        this.category_id = category_id;
        this.name = name;
        this.description = description;
        this.department_id = department_id;
    }

}