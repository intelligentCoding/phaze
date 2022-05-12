export function getPreviousDate() {
    var today = new Date();
    var previousDate = new Date(today.getTime());
    previousDate.setDate(today.getDate() -1);
    var yyyy = previousDate.getFullYear().toString();
    var mm = (previousDate.getMonth()+1).toString();
    var dd  = previousDate.getDate().toString();
  
    var mmChars = mm.split('');
    var ddChars = dd.split('');
  
    return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
  }