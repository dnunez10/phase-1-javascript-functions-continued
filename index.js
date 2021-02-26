//Your code here
function saturdayFun(fun='roller-skate') {
   return (`This Saturday, I want to ${fun}!`);
}
saturdayFun();
saturdayFun('bathe my dog');

function mondayWork(office='go to the office') {
   return (`This Monday, I will ${office}.`)
}
mondayWork();
mondayWork('work from home');

function wrapAdjective(star="*") {
   return function(inner="special") {
     return `You are ${star}${inner}${star}!`
   }
 }
 