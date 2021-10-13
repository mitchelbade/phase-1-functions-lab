// Code your solution in this file!

const hq = 42;
const feet = 264;

function distanceFromHqInBlocks(num) {
    if (num > hq) {
        return num - hq
    }
    else if (num < hq) {
        return hq - num
    }
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(num) {
   return distanceFromHqInBlocks(num) * feet;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(pickup, destination) {
    if (pickup > destination) {
        return (pickup - destination) * feet
    }
    else if (pickup < destination) {
        return (destination - pickup) * feet
    }
}
distanceTravelledInFeet();

function calculatesFarePrice(pickup, destination) {

    const distanceInFeet = distanceTravelledInFeet(pickup,destination);

    if (distanceInFeet <= 400) {
        return 0;
    }
    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return 0.02 * (distanceInFeet - 400);
    }
    else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    }
    else if (distanceInFeet >= 2500) {
        return "cannot travel that far";
    }
}