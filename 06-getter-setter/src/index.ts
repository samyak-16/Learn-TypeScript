

class User1 {
    constructor(public name:string, public email:string, private  _password:string) { 
    }
    private deletePassword(){
console.log("password deleted");

    } ;
    get getPassword():string{
        return `111${this._password}`
    }
    set setPassword(password:string){ // cant set any return type cause ts doesn;t wat to set a return type to set methods , even void is not allowed :(
    this._password = password 
    }
}

const samyak = new User1("Samyak Raj Subedi","samyak123@gmail.com","XYZDSJBDJASB DSUSbJASUGOW*U")

console.log(samyak.getPassword);
samyak.setPassword = "abcd@1234"
console.log(samyak.getPassword);
// samyak.deletePassword // can't access this method caus eits private methon only accessable within the class :)




