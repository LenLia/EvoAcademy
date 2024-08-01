export class Authoriz {
    id: string;
    role: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;

    constructor(id: string,role: string,firstName: string,lastName: string,username: string, password: string) {
        this.id=id;
        this.role=role;
        this.firstName=firstName;
        this.lastName=lastName;
        this.username=username;
        this.password=password;
    }

}