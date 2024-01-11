// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    const firstTwo = drivers.slice(0, 2)
    return firstTwo    
}

const returnLastTwoDrivers = function(drivers) {
    const lastTwo = drivers.slice(-2)
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function fareMultiplier(multiplier) {
        return fare * multiplier
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(fare)(2)
}

const fareTripler = function(fare) {
    return createFareMultiplier(fare)(3)
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}