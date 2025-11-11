const superHeros: string[] = []
// const heroPowers: number[] = []

const heroPowers: Array<number> = [] // This process is not reccommended but it works same as previous 

// superHeros.push(55)// Error
superHeros.push("55")
// heroPowers.push("22"); // Error 
heroPowers.push(22) ; 

type User = {
    name : string ;
    isActive : boolean;
}

const allUsers : User[] = []

allUsers.push({
    name: "Samyak Raj Subedi" ,
    isActive : false
})

const MLModels  : number[][] = [[5,6,7],[5,6,7]] ; 

// readsOnly array

const roles: readonly string[] = ['admin', 'moderator', 'user'];

// roles.push("none") // Error 
