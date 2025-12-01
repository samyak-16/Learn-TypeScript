 interface User {

    name : string ; 
    email : string ; 

 }

 interface Admin extends User {
    isAdmin : boolean ; 
 }


 function isAdminAccount(account : User | Admin):boolean{
  if ("isAdmin" in  account){
    return account.isAdmin
  }
  return false ; 
 }