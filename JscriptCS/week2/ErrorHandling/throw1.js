try{

throw new Error();

} catch(error){
console.log(error);

}

console.log('This line now runs');