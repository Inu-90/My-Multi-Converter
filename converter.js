// function temperature () {
// CELSIUS SELECTORS
let celsiusSelect = document.querySelector(".radio_celsius");
let celsiusInput = document.querySelector(".celsius_label");
let celsiusInput2 = document.getElementById("celsius_label2");

// FAHRENHEIT SELECTORS
let fahrenheitSelect = document.querySelector(".radio_fahrenheit");
let fahrenheitInput = document.querySelector(".fahrenheit_label");
let fahrenheitInput2 = document.getElementById("fahrenheit_label2");

// convert AND reset SELECTORS
let convert = document.querySelector(".convert1");
let reset = document.querySelector(".reset1");

// SWIPE SELECTORS
let flip1 = document.querySelector(".flip1");
let flip2 = document.querySelector(".flip2");

//CELSIUS CONTROLLER
celsiusSelect.addEventListener("click", () => {
  flip1.style.display = "grid";
  flip2.style.display = "none";
  celsiusInput.disabled = false;
});

// FAHRENHEIT CONTROLLER
fahrenheitSelect.addEventListener("click", () => {
  flip1.style.display = "none";
  flip2.style.display = "grid";
  celsiusInput2.disabled = false;
  fahrenheitInput2.disabled = true;
});

convert.addEventListener("click", () => {
  if (flip1.style.display === "grid" && flip2.style.display === "none") {
    const fahr = 1.8 * celsiusInput.value + 32;
    fahrenheitInput.value = fahr.toFixed(2);
  } else if (flip2.style.display === "grid" && flip1.style.display === "none") {
    const cels = (celsiusInput2.value - 32) / 1.8;
    fahrenheitInput2.value = cels.toFixed(2);
  }
});

document.addEventListener("keypress", (event) => {
  if (
    event.keyCode === 13 &&
    flip1.style.display === "grid" &&
    flip2.style.display === "none"
  ) {
    const fahr = 1.8 * celsiusInput.value + 32;
    fahrenheitInput.value = fahr.toFixed(2);
  } else if (
    event.keyCode === 13 &&
    flip2.style.display === "grid" &&
    flip1.style.display === "none"
  ) {
    const cels = (celsiusInput2.value - 32) / 1.8;
    fahrenheitInput2.value = cels.toFixed(2);
  }
});

reset.addEventListener("click", (event) => {
  celsiusInput.value = "0.0";
  fahrenheitInput.value = "0.0";
  celsiusInput2.value = "0.0";
  fahrenheitInput2.value = "0.0";
});

// Weight Selectors
let convertWeight = document.querySelector(".convert-btn");
let resetWeight = document.querySelector(".reset-btn");
let selectFrom = document.querySelector(".select-from");
let selectTo = document.querySelector(".select-to");
let fromInput = document.querySelector(".from-input");
let toDisplay = document.querySelector(".to-output");
let fromUnit = document.querySelector(".from-units");
let toUnit = document.querySelector(".to-units");
let alertDiplay = document.querySelector('.alert-display');
let alertBtn = document.querySelector('.alert-button');

let massParams = ['tonne', 'kilogram', 'gram', 'milligram', 'microgram', 'imperial-ton', 'us-ton', 'stone', 'pound', 'ounce'];
console.log(massParams[9]);
let massParamsUnits = ['t', 'kg', 'g', 'mg', 'μg', 't', 't', 'st', 'lb', 'oz'];
console.log(massParamsUnits[9]);

let fromValue, toValue;

// Weight Conversion
selectFrom.addEventListener("change", (e) => {
  fromValue = e.target.value;

  if (fromValue === massParams[0]) {
    fromUnit.innerHTML = massParamsUnits[0];
  }
   if (fromValue === massParams[1]) {
     fromUnit.innerHTML = massParamsUnits[1];
  }
   if (fromValue === massParams[2]) {
     fromUnit.innerHTML = massParamsUnits[2];
  }
   if (fromValue === massParams[3]) {
     fromUnit.innerHTML = massParamsUnits[3];

   } if (fromValue === massParams[4]) {
     fromUnit.innerHTML = massParamsUnits[4];

   } if (fromValue === massParams[5]) {
     fromUnit.innerHTML = massParamsUnits[5];

   } if (fromValue === massParams[6]) {
     fromUnit.innerHTML = massParamsUnits[6];

   } if (fromValue === massParams[7]) {
     fromUnit.innerHTML = massParamsUnits[7];
  }
  if (fromValue === massParams[8]) {
     fromUnit.innerHTML = massParamsUnits[8];
  }
   if (fromValue === massParams[9]) {
     fromUnit.innerHTML = massParamsUnits[9];
   }
});

selectTo.addEventListener("change", (e) => {
  toValue = e.target.value;

  if (toValue === massParams[0]) {
    toUnit.innerHTML = massParamsUnits[0];
  }
   if (toValue === massParams[1]) {
     toUnit.innerHTML = massParamsUnits[1];
  }
   if (toValue === massParams[2]) {
     toUnit.innerHTML = massParamsUnits[2];
  }
   if (toValue === massParams[3]) {
     toUnit.innerHTML = massParamsUnits[3];

   } if (toValue === massParams[4]) {
     toUnit.innerHTML = massParamsUnits[4];

   } if (toValue === massParams[5]) {
     toUnit.innerHTML = massParamsUnits[5];

   } if (toValue === massParams[6]) {
     toUnit.innerHTML = massParamsUnits[6];

   } if (toValue === massParams[7]) {
     toUnit.innerHTML = massParamsUnits[7];
  }
  if (toValue === massParams[8]) {
     toUnit.innerHTML = massParamsUnits[8];
  }
   if (toValue === massParams[9]) {
     toUnit.innerHTML = massParamsUnits[9];
   }
});

convertWeight.addEventListener("click", () => {
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
  if (fromValue === "tonne") {
    fromUnits = "t";
   }
   

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

  // Gram (g)
  if (fromValue === "gram" && toValue === "gram") {
    toDisplay.value = fromInput.value;
  }
  if (fromValue === "gram" && toValue === "tonne") {
    toDisplay.value = fromInput.value * 0.000001;
  }
  if (fromValue === "gram" && toValue === "kilogram") {
    toDisplay.value = fromInput.value * 0.001;
  }
  if (fromValue === "gram" && toValue === "milligram") {
    toDisplay.value = fromInput.value * 1000;
  }
  if (fromValue === "gram" && toValue === "microgram") {
    toDisplay.value = fromInput.value * 1000000;
  }
  if (fromValue === "gram" && toValue === "imperial-ton") {
    toDisplay.value = fromInput.value * 0.00000098421;
  }
  if (fromValue === "gram" && toValue === "us-ton") {
    toDisplay.value = fromInput.value * 0.0000011023;
  }
  if (fromValue === "gram" && toValue === "stone") {
    toDisplay.value = fromInput.value * 0.000157473;
  }
  if (fromValue === "gram" && toValue === "pound") {
    toDisplay.value = fromInput.value * 0.00220462;
  }
  if (fromValue === "gram" && toValue === "ounce") {
    toDisplay.value = fromInput.value * 0.035274;
  }

  // Milligram (mg)
  if (fromValue === "milligram" && toValue === "milligram") {
    toDisplay.value = fromInput.value;
  }
  if (fromValue === "milligram" && toValue === "tonne") {
    toDisplay.value = fromInput.value / 1000000000;
  }
  if (fromValue === "milligram" && toValue === "kilogram") {
    toDisplay.value = fromInput.value / 1000000;
  }
  if (fromValue === "milligram" && toValue === "gram") {
    toDisplay.value = fromInput.value / 1000;
  }
  if (fromValue === "milligram" && toValue === "microgram") {
    toDisplay.value = fromInput.value * 1000;
  }
  if (fromValue === "milligram" && toValue === "imperial-ton") {
    toDisplay.value = fromInput.value * 0.00000000098421;
  }
  if (fromValue === "milligram" && toValue === "us-ton") {
    toDisplay.value = fromInput.value * 0.0000000011023;
  }
  if (fromValue === "milligram" && toValue === "stone") {
    toDisplay.value = fromInput.value / 0.00000015747;
  }
  if (fromValue === "milligram" && toValue === "pound") {
    toDisplay.value = fromInput.value * 0.0000022046;
  }
  if (fromValue === "milligram" && toValue === "ounce") {
    toDisplay.value = fromInput.value * 0.000035274;
  }

  // Microgram (μg)
  if (fromValue === "microgram" && toValue === "microgram") {
    toDisplay.value = fromInput.value;
  }
  if (fromValue === "microgram" && toValue === "tonne") {
    toDisplay.value = fromInput.value * 0.000000000001;
  }
  if (fromValue === "microgram" && toValue === "kilogram") {
    toDisplay.value = fromInput.value * 0.000000001;
  }
  if (fromValue === "microgram" && toValue === "gram") {
    toDisplay.value = fromInput.value * 0.000001;
  }
  if (fromValue === "microgram" && toValue === "milligram") {
    toDisplay.value = fromInput.value * 0.001;
  }
  if (fromValue === "microgram" && toValue === "imperial-ton") {
    toDisplay.value = fromInput.value * 0.00000000000098421;
  }
  if (fromValue === "microgram" && toValue === "us-ton") {
    toDisplay.value = fromInput.value * 0.0000000000011023;
  }
  if (fromValue === "microgram" && toValue === "stone") {
    toDisplay.value = fromInput.value * 0.00000000015747;
  }
  if (fromValue === "microgram" && toValue === "pound") {
    toDisplay.value = fromInput.value * 0.0000000022046;
  }
  if (fromValue === "microgram" && toValue === "ounce") {
    toDisplay.value = fromInput.value * 0.000000035274;
  }

  // Imperial (ton)
  if (fromValue === "imperial-ton" && toValue === "imperial-ton") {
    toDisplay.value = fromInput.value;
  }
  if (fromValue === "imperial-ton" && toValue === "tonne") {
    toDisplay.value = fromInput.value * 1.01605;
  }
  if (fromValue === "imperial-ton" && toValue === "kilogram") {
    toDisplay.value = fromInput.value * 1016.05;
  }
  if (fromValue === "imperial-ton" && toValue === "gram") {
    toDisplay.value = fromInput.value * 1016000;
  }
  if (fromValue === "imperial-ton" && toValue === "milligram") {
    toDisplay.value = fromInput.value * 1016000000;
  }
  if (fromValue === "imperial-ton" && toValue === "microgram") {
    toDisplay.value = fromInput.value * 1016000000000;
  }
  if (fromValue === "imperial-ton" && toValue === "us-ton") {
    toDisplay.value = fromInput.value * 1.12;
  }
  if (fromValue === "imperial-ton" && toValue === "stone") {
    toDisplay.value = fromInput.value * 160;
  }
  if (fromValue === "imperial-ton" && toValue === "pound") {
    toDisplay.value = fromInput.value * 2240;
  }
  if (fromValue === "imperial-ton" && toValue === "ounce") {
    toDisplay.value = fromInput.value * 35840;
  }

  // US (ton)
if (fromValue === "us-ton" && toValue === "us-ton") {
  toDisplay.value = fromInput.value;
}
if (fromValue === "us-ton" && toValue === "tonne") {
  toDisplay.value = fromInput.value * 0.907185;
}
if (fromValue === "us-ton" && toValue === "kilogram") {
  toDisplay.value = fromInput.value * 907.185;
}
if (fromValue === "us-ton" && toValue === "gram") {
  toDisplay.value = fromInput.value * 907185;
}
if (fromValue === "us-ton" && toValue === "milligram") {
  toDisplay.value = fromInput.value * 9.07200000;
}
if (fromValue === "us-ton" && toValue === "microgram") {
  toDisplay.value = fromInput.value * 9.07200000000;
}
if (fromValue === "us-ton" && toValue === "imperial-ton") {
  toDisplay.value = fromInput.value * 0.892857;
}
if (fromValue === "us-ton" && toValue === "stone") {
  toDisplay.value = fromInput.value * 142.857;
}
if (fromValue === "us-ton" && toValue === "pound") {
  toDisplay.value = fromInput.value * 2000;
}
if (fromValue === "us-ton" && toValue === "ounce") {
  toDisplay.value = fromInput.value * 32000;
}

// Stone (st)
if (fromValue === "stone" && toValue === "stone") {
  toDisplay.value = fromInput.value;
}
if (fromValue === "stone" && toValue === "tonne") {
  toDisplay.value = fromInput.value * 0.00635029;
}
if (fromValue === "stone" && toValue === "kilogram") {
  toDisplay.value = fromInput.value * 6.35029;
}
if (fromValue === "stone" && toValue === "gram") {
  toDisplay.value = fromInput.value * 6350.29;
}
if (fromValue === "stone" && toValue === "milligram") {
  toDisplay.value = fromInput.value * 6.350000;
}
if (fromValue === "stone" && toValue === "microgram") {
  toDisplay.value = fromInput.value * 6.350000000;
}
if (fromValue === "stone" && toValue === "imperial-ton") {
  toDisplay.value = fromInput.value * 0.00625;
}
if (fromValue === "stone" && toValue === "us-ton") {
  toDisplay.value = fromInput.value * 0.007;
}
if (fromValue === "stone" && toValue === "pound") {
  toDisplay.value = fromInput.value * 14;
}
if (fromValue === "stone" && toValue === "ounce") {
  toDisplay.value = fromInput.value * 224;
}

  // Pound (lb)
 if (fromValue === "pound" && toValue === "pound") {
   toDisplay.value = fromInput.value;
 }
 if (fromValue === "pound" && toValue === "tonne") {
   toDisplay.value = fromInput.value * 0.000453592;
 }
 if (fromValue === "pound" && toValue === "kilogram") {
   toDisplay.value = fromInput.value * 0.453592;
 }
 if (fromValue === "pound" && toValue === "gram") {
   toDisplay.value = fromInput.value * 453.592;
 }
 if (fromValue === "pound" && toValue === "milligram") {
   toDisplay.value = fromInput.value * 453592;
 }
 if (fromValue === "pound" && toValue === "microgram") {
   toDisplay.value = fromInput.value * 4.53600000;
 }
 if (fromValue === "pound" && toValue === "imperial-ton") {
   toDisplay.value = fromInput.value * 0.000446429;
 }
 if (fromValue === "pound" && toValue === "us-ton") {
   toDisplay.value = fromInput.value * 0.0005;
 }
 if (fromValue === "pound" && toValue === "stone") {
   toDisplay.value = fromInput.value * 0.0714286;
 }
 if (fromValue === "pound" && toValue === "ounce") {
   toDisplay.value = fromInput.value * 16;
 }


  // Ounce (oz)
 if (fromValue === "ounce" && toValue === "ounce") {
   toDisplay.value = fromInput.value;
 }
 if (fromValue === "ounce" && toValue === "tonne") {
   toDisplay.value = fromInput.value * 0.00002835;
 }
 if (fromValue === "ounce" && toValue === "kilogram") {
   toDisplay.value = fromInput.value * 0.0283495;
 }
 if (fromValue === "ounce" && toValue === "gram") {
   toDisplay.value = fromInput.value * 28.3495;
 }
 if (fromValue === "ounce" && toValue === "milligram") {
   toDisplay.value = fromInput.value * 28349.5;
 }
 if (fromValue === "ounce" && toValue === "microgram") {
   toDisplay.value = fromInput.value * 2.8350000;
 }
 if (fromValue === "ounce" && toValue === "imperial-ton") {
   toDisplay.value = fromInput.value * 0.000027902;
 }
 if (fromValue === "ounce" && toValue === "us-ton") {
   toDisplay.value = fromInput.value * 0.00003125;
 }
 if (fromValue === "ounce" && toValue === "stone") {
   toDisplay.value = fromInput.value * 0.00446429;
 }
 if (fromValue === "ounce" && toValue === "pound") {
   toDisplay.value = fromInput.value * 0.0625;
  }
  
  if (fromValue === undefined || toValue === undefined) {
    alertDiplay.style.display = 'block';
  }
  alertBtn.addEventListener('click', () => {
    alertDiplay.style.display = 'none';
  })
});

resetWeight.addEventListener("click", () => {
  fromInput.value = "0";
  toDisplay.value = "0";
});
