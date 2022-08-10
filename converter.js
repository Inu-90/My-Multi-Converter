// function temperature () {
  // CELSIUS SELECTORS
let celsiusSelect = document.querySelector('.radio_celsius');
let celsiusInput = document.querySelector('.celsius_label');
let celsiusInput2 = document.getElementById('celsius_label2')

// FAHRENHEIT SELECTORS
let fahrenheitSelect = document.querySelector('.radio_fahrenheit');
let fahrenheitInput = document.querySelector('.fahrenheit_label');
let fahrenheitInput2 = document.getElementById('fahrenheit_label2');

// convert AND reset SELECTORS
let convert = document.querySelector('.convert1');
let reset = document.querySelector('.reset1');

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




// Weight Selectors
let convertWeight = document.querySelector('.convert-btn');
let resetWeight = document.querySelector('.reset-btn');
let selectFrom = document.querySelector('.select-from');
let selectTo = document.querySelector('.select-to');
let fromInput = document.querySelector('.from_label');
let toDisplay = document.querySelector('.to_label');
let fromValue, toValue;


// Weight Conversion
selectTo.addEventListener('change', (e) => {
  toValue = e.target.value;
});

selectFrom.addEventListener('change', (e) => {
  fromValue = e.target.value;
});

  convertWeight.addEventListener('click', () => {
    // Kilogram
    if (fromValue === "kilogram" && toValue === "kilogram") {
      toDisplay.value = fromInput.value;
    }
    if (fromValue === "kilogram" && toValue === "tonne") {
      toDisplay.value = fromInput.value / 1000;
    }
    if (fromValue === "kilogram" && toValue === "gram") {
      toDisplay.value = fromInput.value * 1000;
    }
    if (fromValue === "kilogram" && toValue === "milligram") {
      toDisplay.value = fromInput.value * 1000000;
    }
    if (fromValue === "kilogram" && toValue === "microgram") {
      toDisplay.value = fromInput.value * 1000000000;
    }
    if (fromValue === "kilogram" && toValue === "imperial-ton") {
      toDisplay.value = fromInput.value / 0.000984207;
    }
    if (fromValue === "kilogram" && toValue === "us-ton") {
      toDisplay.value = fromInput.value / 0.00110231;
    }
    if (fromValue === "kilogram" && toValue === "stone") {
      toDisplay.value = fromInput.value / 0.157473;
    }
    if (fromValue === "kilogram" && toValue === "pound") {
      toDisplay.value = fromInput.value * 2.20462;
    }
    if (fromValue === "kilogram" && toValue === "ounce") {
      toDisplay.value = fromInput.value * 35.274;
    }

    // Tonne
   if (fromValue === "tonne" && toValue === "tonne") {
     toDisplay.value = fromInput.value;
    }
    if (fromValue === "tonne" && toValue === "kilogram") {
      toDisplay.value = fromInput.value / 1000;
    }
   if (fromValue === "tonne" && toValue === "gram") {
     toDisplay.value = fromInput.value * 1000000;
   }
   if (fromValue === "tonne" && toValue === "milligram") {
     toDisplay.value = fromInput.value * 1000000000;
   }
   if (fromValue === "tonne" && toValue === "microgram") {
     toDisplay.value = fromInput.value * 1000000000000;
   }
   if (fromValue === "tonne" && toValue === "imperial-ton") {
     toDisplay.value = fromInput.value / 0.984207;
   }
   if (fromValue === "tonne" && toValue === "us-ton") {
     toDisplay.value = fromInput.value * 1.10231;
   }
   if (fromValue === "tonne" && toValue === "stone") {
     toDisplay.value = fromInput.value / 157.473;
   }
   if (fromValue === "tonne" && toValue === "pound") {
     toDisplay.value = fromInput.value * 2204.62;
   }
   if (fromValue === "tonne" && toValue === "ounce") {
     toDisplay.value = fromInput.value * 35274;
   }



    // Milligram mg
    // Microgram ug
    // Imperial ton ton
    // US ton ton
    // Stone st
    // Pound lb
    // Ounce 0z

    // Gram

    if (fromValue === "gram" && toValue === "gram") {
      toDisplay.value = fromInput.value;
    } else if (fromValue === "gram" && toValue === "kilogram") {
      toDisplay.value = fromInput.value / 1000;
    } else if (fromValue === "gram" && toValue === "tonne") {
      toDisplay.value = fromInput.value / 1000000;
    } else if (fromValue === undefined || toValue === undefined) {
      alert("Please Select a unit to convert");
    }
  });

resetWeight.addEventListener('click', () => {
  fromInput.value = '0';
  toDisplay.value = '0';
})



// e.preventDefault;
//From Controller

// let x = select1.options[1];
 
//  x.addEventListener('click', () => {
//   console.log('gtt');
//  });

// select2.options[1].onchange = true ? console.log('nice job') : console.log('oops!');
// console.log(x);


// var y = document.getElementById("mySelect").options.namedItem("orange").text;
// convert2.addEventListener("click", () => {
//   var selIndex = select2.selectedIndex
//   console.log(select2.getElementsByTagName('option')[selIndex])
// })


// if (convert2.clicked == true) {

//   alert('Here we go');
// }

// let west = select2.options[2].value = 'click' && select1.options[1].value = 'click';

// select2.options.value.on = 'tonne' ? console.log("here we go") : console.log("here we come");

// select2.addEventListener('change', (event) => {
//   if (event = west) { console.log('here we go') } else { alert('here we come') }; 
// })



//To Controller















