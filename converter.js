// CELSIUS SELECTORS
let celsiusSelect = document.querySelector('.radio_celsius');
let celsiusInput = document.querySelector('.celsius_label');
let celsiusInput2 = document.getElementById('celsius_label2')

// FAHRENHEIT SELECTORS
let fahrenheitSelect = document.querySelector('.radio_fahrenheit');
let fahrenheitInput = document.querySelector('.fahrenheit_label');
let fahrenheitInput2 = document.getElementById('fahrenheit_label2');

// convert AND reset SELECTORS
let convert = document.querySelector('.convert');
let reset = document.querySelector('.reset');

// SWIPE SELECTORS
let flip1 = document.querySelector('.flip1');
let flip2 = document.querySelector('.flip2');

//CELSIUS CONTROLLER
  celsiusSelect.addEventListener('click', () => {
  flip1.style.display = 'grid';
  flip2.style.display = 'none';
  celsiusInput.disabled = false;
  });

// FAHRENHEIT CONTROLLER
fahrenheitSelect.addEventListener('click', () => {
  flip1.style.display = 'none';
  flip2.style.display = 'grid';
  celsiusInput2.disabled = false;
  fahrenheitInput2.disabled = true;
})

convert.addEventListener('click', () => { 
  if(flip1.style.display === 'grid' && flip2.style.display === 'none') {
    const fahr = ((1.8 * (celsiusInput.value)) + 32);
  fahrenheitInput.value = (fahr.toFixed(2));
  } else if(flip2.style.display === 'grid' && flip1.style.display === 'none') {
    const cels = ((celsiusInput2.value - 32) / 1.8);
    fahrenheitInput2.value = (cels.toFixed(2));
  }
  });

  document.addEventListener('keypress', event => {
    if (event.keyCode === 13 && flip1.style.display === 'grid' && flip2.style.display === 'none') {
      const fahr = ((1.8 * (celsiusInput.value)) + 32);
       fahrenheitInput.value = (fahr.toFixed(2));
    } else if (event.keyCode === 13 && flip2.style.display === 'grid' && flip1.style.display === 'none') {
      const cels = ((celsiusInput2.value - 32) / 1.8);
    fahrenheitInput2.value = (cels.toFixed(2));
    }
});

reset.addEventListener('click', event => {
    celsiusInput.value = '0.0';
     fahrenheitInput.value = '0.0';
     celsiusInput2.value = '0.0';
     fahrenheitInput2.value = '0.0';
})