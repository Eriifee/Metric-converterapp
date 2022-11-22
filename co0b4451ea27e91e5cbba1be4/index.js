/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")

 

convertBtn.addEventListener("click", function(){
    
    renderUnits()
})

function renderUnits(){
     inputEl.textContent = inputEl.value
     let feet = inputEl.textContent * 3.281
     let meters = inputEl.textContent / 3.281
     
     lengthEl.textContent = `
                            ${inputEl.textContent} meters = ${feet.toFixed(3)} feet 
                            | ${inputEl.textContent} feet = ${meters.toFixed(3)} meters`
    
    let gallons = inputEl.textContent * 0.264
    let liters =  inputEl.textContent / 0.264
    
    volumeEl.textContent = `${inputEl.textContent} liters = ${gallons.toFixed(3)} gallons
                            | ${inputEl.textContent} gallons = ${liters.toFixed(3)} liters` 
                            
     let pounds = inputEl.textContent  *  2.204  
     let kilogram = inputEl.textContent / 2.204
     
     massEl.textContent = `${inputEl.textContent} kilos = ${pounds.toFixed(3)} pounds
                            | ${inputEl.textContent} pounds = ${kilogram.toFixed(3)} kilos` 
                                    
                                
}
 
