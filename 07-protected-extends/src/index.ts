class User {

    constructor (public name : string , public email : string , protected password : string){

    }
}


class subUser extends User {

    getName(){
        console.log(this.name);
        
    }



    getPasswordFromParentClass(){
        console.log(this.password);
        
    }
}


const samyak = new subUser("samyak","samyak@123.in","dkdd77LSWBDOIHSAD")

samyak.getPasswordFromParentClass()