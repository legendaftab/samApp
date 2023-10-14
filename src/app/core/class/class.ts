export class data{
    emailId:string;
    password:string;

    constructor(){
        this.emailId='';
        this.password='';
    }

}

export class returnClass {
    message: string;
    result: string;
    data: boolean;
    constructor() {
      this.message = '';
      this.result = '';
      this.data = false;
    }
}