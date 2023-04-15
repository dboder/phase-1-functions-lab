function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    let hqBlock = 42
    return Math.abs(someValue-hqBlock)
}


function distanceFromHqInFeet(someValue) {
    let blocks_away = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return blocks_away * 264;
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distTraveled = distanceTravelledInFeet(start, destination);
    let farePrice = 0;

    if (distTraveled > 400 && distTraveled <= 2000) {
        let remainingDist = distTraveled - 400;
        if (remainingDist > 0) {
            farePrice = remainingDist * 0.02;
        }
    }
    else if (distTraveled > 2500) {
        farePrice = "cannot travel that far";
    }
    else if (distTraveled > 2000 && distTraveled <= 2500) {
        farePrice = 25;
    }
    
    
    
    return farePrice;

}