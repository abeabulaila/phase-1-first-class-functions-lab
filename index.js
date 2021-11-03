

const returnFirstTwoDrivers = function () {
    let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
    return drivers.slice(0, 2);
} 

function returnLastTwoDrivers(){
    let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
    return drivers.slice(-2);
    }

 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

const createFareMultiplier = function (fareMultiplier) {
        return function(value) {
            return fareMultiplier * value;
        }
}
 
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func){
    return func(drivers)
}