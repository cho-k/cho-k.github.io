const mins = document.getElementById('mins');
const everyMin = document.getElementById('every-min');

for (let i=1; i<=60; i++) {
  const option = document.createElement('option');
  option.text = i;
  option.value = i;
  mins.appendChild(option);
}

for (let i=1; i<=60; i++) {
  const option = document.createElement('option');
  option.text = i;
  option.value = i;
  everyMin.appendChild(option);
}
