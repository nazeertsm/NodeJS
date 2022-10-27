var bird = {

    hashWings: true,
    canFly: true,
    hasFeathers:true

    }

    var eagle1 = Object.create(bird);
        console.log("eagle1", eagle1);
        console.log("eagle has wingls", eagle1.hashWings);
        console.log("eagle can fly", eagle1.canFly);
        console.log("eagle hasFeathers", eagle1.hasFeathers);

    var penguin1 = Object.create(bird)
        penguin1.canFly = false;
        console.log("penguin1 has wingls", penguin1.hashWings);
        console.log("penguin1 can fly", penguin1.canFly);
        console.log("penguin1 hasFeathers", penguin1.hasFeathers);
        
