let rideDistance;
function scuberGreetingForFeet(rideDistance){
  if(rideDistance <= 400){
   return 'This one is on me!';
  } else if (rideDistance> 400  && rideDistance <= 2000){
    return 'That will be twenty bucks.'
  } else if (rideDistance > 2000 && rideDistance<= 2500){
    return 'I will gladly take your thirty bucks.'
  }else{
    return 'No can do.'
  }
}
let city;
function ternaryCheckCity(city){
  if(city === 'NYC'){
    return 'Ok, sounds good.'
  } else{
    return 'No go.'
  }
}
let tipGenerosity;
function switchOnCharmFromTip(){
if(tipGenerosity === 'Generous'){
  return 'Thank you very much.'
} else if (tipGenerosity === 'Not as generous'){
  return 'Thank you.'
} else {
  return 'Bye'
}
}
  
