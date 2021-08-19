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
    
    for (let i = 0; i < mins.length; i++) {
      console.log(mins[i].selected.value);
    }
  });
});
