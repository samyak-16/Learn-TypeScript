console.log("test");

interface TakePhoto{
    cameraMode:string ;  
    filter :  string  ; 
    burst : number    ; 
}

interface Story{
    createStory():void
}


class Instagram implements  TakePhoto , Story {
constructor(public cameraMode : string ,
     public filter : string ,
     public burst : number ){
    }

    createStory(): void {
        console.log("Story was Created");
    }
}
class Youtube implements  TakePhoto {
constructor(public cameraMode : string ,
     public filter : string ,
     public burst : number,
     public short : string )

     {
}
}


const x=  new Instagram("pro","beautify",5
    
)


x.createStory()
