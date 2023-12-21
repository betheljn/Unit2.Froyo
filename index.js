const userInputString = prompt(
    "Choose your favorite froyo flavor",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringArray = userInputString.split ("");

const flavorCounts = {};

console.log(stringArray);

for(let i = 0; i < stringArray.lenth; i++){
    console.log(`Flavor ${i + 1}: ${stringArray[i]}`);

    if (flavorCounts[flavor]) {
        flavorCounts[flavor] += 1;
    } else {
        flavorCounts[flavor] = 1;
    }
}

for (const flavor in flavorCounts) {
    console.log(`Flavor: ${flavor}, Orders ${flavorCounts[flavor]}`);
}

const person = {
    name: "Sally",
    sayHi: () => {
      console.log(this.name);
    },
  };
  
  person.sayHi();

