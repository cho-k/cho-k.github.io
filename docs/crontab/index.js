const mins = document.getElementById('mins');

for (let i=0; i<60; i++) {
  const option = document.createElement('option');
  option.text = i;
  option.value = i;
  mins.appendChild(option);
}
