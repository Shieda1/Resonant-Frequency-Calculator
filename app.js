// https://calculator.swiftutors.com/resonant-frequency-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const resonantFrequencyRadio = document.getElementById('resonantFrequencyRadio');
const inductanceRadio = document.getElementById('inductanceRadio');
const capacitanceRadio = document.getElementById('capacitanceRadio');

let resonantFrequency;
const PI = Math.PI;
let inductance = v1;
let capacitance = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

resonantFrequencyRadio.addEventListener('click', function() {
  variable1.textContent = '(L) Inductance (Henry)';
  variable2.textContent = '(C) Capacitance (Farad)';
  inductance = v1;
  capacitance = v2;
  result.textContent = '';
});

inductanceRadio.addEventListener('click', function() {
  variable1.textContent = '(f) Resonant Frequency (Hertz)';
  variable2.textContent = '(C) Capacitance (Farad)';
  resonantFrequency = v1;
  capacitance = v2;
  result.textContent = '';
});

capacitanceRadio.addEventListener('click', function() {
  variable1.textContent = '(f) Resonant Frequency (Hertz)';
  variable2.textContent = '(L) Inductance (Henry)';
  resonantFrequency = v1;
  inductance = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(resonantFrequencyRadio.checked)
    result.textContent = `Resonant Frequency = ${computeResonantFrequency()} Hertz`;

  else if(inductanceRadio.checked)
    result.textContent = `Inductance = ${computeInductance().toFixed(2)} Hertz`;

  else if(capacitanceRadio.checked)
    result.textContent = `Capacitance = ${computeCapacitance().toFixed(2)} Farad`;
})

// calculation

function computeResonantFrequency() {
  return 1 / (2 * PI * Math.sqrt(Number(inductance.value) * Number(capacitance.value)));
}

function computeInductance() {
  return 1 / (4 * Math.pow(PI * Number(resonantFrequency.value), 2) * Number(capacitance.value));
}

function computeCapacitance() {
  return 1 / (4 * Math.pow(PI * Number(resonantFrequency.value), 2) * Number(inductance.value));
}