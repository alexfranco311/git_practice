//DO WORK AND SLEEP RIGHT!!!
const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
      } else if (day === 'tuesday') {
        return 7;
      } else if (day === 'wednesday') {
        return 6; 
      } else if (day === 'thursday') {
        return 5; 
      } else if (day === 'friday') {
        return 4; 
      } else if (day === 'saturday') {
        return 3; 
      } else if (day === 'sunday') {
        return 2;
      } else return 'ID 10-T'
  };
  //console.log(getSleepHours('potato'))
  
  const getActualSleepHours= () => (
    getSleepHours('monday')
    + getSleepHours('tuesday')
    + getSleepHours('wednesday')
    + getSleepHours('thursday')
    + getSleepHours('friday')
    + getSleepHours('saturday')
    + getSleepHours('sunday')
  );
  
  //console.log(getActualSleepHours())
  
  const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7
}

//console.log(getIdealSleepHours())

const calculateSleepDebt = () => { 
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
      if (actualSleepHours === idealSleepHours) {
        console.log('Perfect ammount of Sleep');
      } else if (actualSleepHours > idealSleepHours) {
          console.log('More than enough sleep');
      } else if (actualSleepHours < idealSleepHours)
          console.log('You need sleep fam');
  }; 
  
  calculateSleepDebt()