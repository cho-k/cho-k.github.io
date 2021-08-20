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
    let num = 0;
    for (let i = 0; i < mins.length; i++) {
      if (mins[i].selected) {
        minAry[num] = mins[i].value;
        num++;
        
        if (mins[i].value === '*') {
          break;
        }
      }
    }
    minStr = minAry.join(',');
    
    const pMin = document.getElementById('p-min');
    const pHour = document.getElementById('p-hour');
    const pDay = document.getElementById('p-day');
    const pMonth = document.getElementById('p-month');
    const pWeek = document.getElementById('p-week');
    
    pMin.textContent = minStr;
    if (everyMin.value !== '*') {
      pMin.textContent = '*/' + everyMin.value;
    }
  });
});
