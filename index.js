/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl =document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const length =document.getElementById("length-conv");
const vol =document.getElementById("vol-conv");
const mass =document.getElementById("mass-conv");

convertBtn.addEventListener("click",()=>{
   
   let val =inputEl.value;
   let mToF = (val*3.281).toFixed(3);
   let fToM = (val/3.281).toFixed(3);
   length.innerHTML =`${val} meters = ${mToF} feet | ${val} feet = ${fToM} meters`;
   
   let lToG = (val*0.264).toFixed(3);
   let gToL = (val/0.264).toFixed(3);
   vol.innerHTML =`${val} liters = ${lToG} gallons | ${val} gallons = ${gToL} liters`;
   
   let kToP = (val*2.204).toFixed(3);
   let pToK = (val/2.204).toFixed(3);
   mass.innerHTML =`${val} kilos = ${kToP} pounds | ${val} pounds = ${pToK} kilos`;
    
});