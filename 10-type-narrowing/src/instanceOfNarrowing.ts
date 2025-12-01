function logValue(value: Date|String):void{

    if(value instanceof Date){
        console.log(value.toUTCString());
    }
else{
    console.log(value.toUpperCase());
}
}

logValue("Samyak")