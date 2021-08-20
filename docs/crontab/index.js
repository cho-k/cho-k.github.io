window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  
  button.addEventListener('click', () => {
    const mins = document.getElementById('mins');
    const everyMin = document.getElementById('every-min');
    const hours = document.getElementById('hours');
    const everyHour = document.getElementById('every-hour');
    const days = document.getElementById('days');
    const everyDay = document.getElementById('every-day');
    const months = document.getElementById('months');
    const everyMonth = document.getElementById('every-month');
    const weeks = document.getElementById('weeks');
    
    let minAry = new Array();
    let minNum = 0;
    for (let i = 0; i < mins.length; i++) {
      if (mins[i].selected) {
        minAry[minNum] = mins[i].value;
        minNum++;
        
        if (mins[i].value === '*') {
          break;
        }
      }
    }
    minStr = minAry.join(',');
    
    let hourAry = new Array();
    let hourNum = 0;
    for (let i = 0; i < hours.length; i++) {
      if (hours[i].selected) {
        hourAry[hourNum] = hours[i].value;
        hourNum++;
        
        if (hours[i].value === '*') {
          break;
        }
      }
    }
    hourStr = hourAry.join(',');
    
    let dayAry = new Array();
    let dayNum = 0;
    for (let i = 0; i < days.length; i++) {
      if (days[i].selected) {
        dayAry[dayNum] = days[i].value;
        dayNum++;
        
        if (days[i].value === '*') {
          break;
        }
      }
    }
    dayStr = dayAry.join(',');
    
    let monthAry = new Array();
    let monthNum = 0;
    for (let i = 0; i < months.length; i++) {
      if (months[i].selected) {
        monthAry[monthNum] = months[i].value;
        monthNum++;
        
        if (months[i].value === '*') {
          break;
        }
      }
    }
    monthStr = monthAry.join(',');
    
    let weekAry = new Array();
    let weekNum = 0;
    for (let i = 0; i < weeks.length; i++) {
      if (weeks[i].selected) {
        weekAry[weekNum] = weeks[i].value;
        weekNum++;
        
        if (weeks[i].value === '*') {
          break;
        }
      }
    }
    weekStr = weekAry.join(',');
    
    const pMin = document.getElementById('p-min');
    const pHour = document.getElementById('p-hour');
    const pDay = document.getElementById('p-day');
    const pMonth = document.getElementById('p-month');
    const pWeek = document.getElementById('p-week');
    
    pMonth.textContent = monthStr;
    if (everyMonth.value !== '*') {
      pMonth.textContent = '*/' + everyMonth.value;
    }

    pDay.textContent = dayStr;
    if (everyDay.value !== '*') {
      pDay.textContent = '*/' + everyDay.value;
    }

    pHour.textContent = hourStr;
    if (everyHour.value !== '*') {
      pHour.textContent = '*/' + everyHour.value;
    }
    
    pMin.textContent = minStr;
    if (everyHour.value !== '*') {
      pMin.textContent = 0;
    }
    if (everyMin.value !== '*') {
      pMin.textContent = '*/' + everyMin.value;
    }
    
    pWeek.textContent = weekStr;
  });
});
