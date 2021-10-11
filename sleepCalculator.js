

 const getSleepHours = day => {

if (day === 'monday') {
  return 8; 
} else if (day === 'tuesdsay') {
  return 7; 
} else if (day === 'wednesday') {
  return 7; 
}else if (day === 'thursday') {
return 7; 
}else if (day === 'friday' ) {
  return 8; 
}else if (day === 'saturday') {
  return 8 
} else if (day === 'sunday') {
  return  7; 

} else {
  return 'cannot get sleep hours';
 }

// console.log(getsleepHours('tuesday')); 
// console.log(getsleepHours('wednesday')); 
// console.log(getsleepHours('friday')); 