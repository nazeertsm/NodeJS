try{

    throw new ReferenceError();
    //console.log(a+b);
} catch(error){


    console.log(error);
    console.log("error was saved in the error.log");

}

console.log('This line now runs');
