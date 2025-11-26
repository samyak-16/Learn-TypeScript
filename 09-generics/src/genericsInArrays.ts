function getSearchProducts<T>(products:T[]):T|undefined{
return products[0] 
}

const getMoreSearchProducts =<T,>(products:T[]):T|undefined => {
return  products[5]
}


// <T> 
// <T,> 
// Both are correct , we can find many of them in code base using <T,>
