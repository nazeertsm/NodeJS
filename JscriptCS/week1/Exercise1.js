var age=70;
if(age>=65){

    console.log("You get your income from your pension");
}

else if(age<65 && age>18 ){

    console.log("Each month you get a salary");
}


else if(age<18 ){

    console.log("You get an allowance");
}

else{
    console.log("The value of the age variable is not numerical");
}

//not working
switch (age) {
    case (age>=65):
        console.log("You get your income from your pension");
        break;

        case (age<65 && age>18):
        console.log("Each month you get a salary");
        break;

        case (age<18):
            console.log("You get an allowance");
            break;
    
    default:
        console.log("The value of the age variable is not numerical");
        break;
}