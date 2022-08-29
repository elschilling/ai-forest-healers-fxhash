// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// this code writes the values to the DOM as an example
const container = document.createElement("div")
let healer
let smiling
healerAge = Math.ceil(fxrand()*100)
if (healerAge < 10) {
  healerAgeString = 'child'
  healer = Math.ceil(fxrand()*4)
}
else if (healerAge < 30 && healerAge >= 10) {
  healerAgeString = 'young'
  smiling = fxrand()
  if (smiling > 0.5) {
    healerAgeString += '-smiling'
    healer = Math.ceil(fxrand()*4)
  } else {
    healer = Math.ceil(fxrand()*8)
  }
}
else if (healerAge > 60) {
  healerAgeString = 'elder'
  smiling = fxrand()
  if (smiling > 0.5) {
    healerAgeString += '-smiling'
  }
  healer = Math.ceil(fxrand()*4)
}
else if (healerAge === 30) {
  healerAgeString = 'cypher'
  healer = Math.ceil(fxrand()*4)
} else {
  healerAgeString = 'adult'
  healer = Math.ceil(fxrand()*12)

}
let healerHue = Math.ceil(fxrand()*360)
container.innerText = healer + ' ' + healerHue + ' ' + healerAgeString + ' ' + healerAge
// document.body.prepend(container)
let img = document.getElementById('ayahealer')
console.log(img)
img.src = './healers/ayahealer-' + healerAgeString + '-0' + healer + '.jpg'
img.style.filter = "hue-rotate(45deg);"

var style = document.createElement('style');
style.innerHTML = `
#ayahealer {
filter: hue-rotate(${healerHue}deg);
}
`;
document.head.appendChild(style);

window.$fxhashFeatures = {
  "Healer Age": healerAge,
  "Healer Age Group": healerAgeString,
  "Healer Hue": healerHue
}