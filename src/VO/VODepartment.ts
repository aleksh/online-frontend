export default class VODepartment {

    department_id: string;
    name: string;
    description: string;    


    constructor(department_id: string, name: string, description: string) {
        this.department_id = department_id;
        this.name = name;
        this.description = description;        
    }

}