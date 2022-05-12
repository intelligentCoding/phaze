export function getToAndFromDate(numofDays: number, today = new Date()) {
    var priorDate = new Date(new Date().setDate(today.getDate() - numofDays));
    return {
        from: convertDate(priorDate),
        to: convertDate(today)
    }
}
function convertDate(date: any) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();
  
    var mmChars = mm.split('');
    var ddChars = dd.split('');
  
    return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
  }