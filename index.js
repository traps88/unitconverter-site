const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")
const lenghtString = document.getElementById("lenght-el")
const volumeString = document.getElementById("volume-el")
const massString = document.getElementById("mass-el")


convertBtn.addEventListener("click",function(){
    let userValue = userInput.value;
    convertLength(userValue)
    convertVolume(userValue)
    convertMass(userValue)
})

function convertLength(userValue){ 
     lenghtString.textContent = `${userValue} meters = ${(userValue * meterToFeet).toFixed(3)} feet | ${userValue} feet = ${(userValue / meterToFeet).toFixed(3)} meters`
}

function convertVolume(userValue){
    volumeString.textContent = `${userValue} liters = ${(userValue * literToGallon).toFixed(3)} gallons | ${userValue} gallons = ${(userValue / literToGallon).toFixed(3)} liters`
}

function convertMass(userValue){    
     massString.textContent = `${userValue} kilos = ${(userValue * kiloToPound).toFixed(3)} pounds | ${userValue} pounds = ${(userValue/kiloToPound).toFixed(3)} kilos`
}