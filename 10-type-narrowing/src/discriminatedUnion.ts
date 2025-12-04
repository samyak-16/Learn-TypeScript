 interface Circle {
    kind : "circle" ; 
    radius : number
 }

 interface Square {
    kind : "square" ; 
    side : number;
 }
 interface Rectangle{
    kind:"rectangle"
    length : number ; 
    breadth : number ; 
 }

 type Shape = Circle | Square | Rectangle 

 function getArea(shape:Shape):number{
    if(shape.kind === "circle"){
      return Math.PI*(shape.radius^2)
    }
   else if(shape.kind==="square"){
    return (shape.side^2)
   }
   else{
    return shape.length * shape.breadth
   }
 }


 