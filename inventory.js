function Shoes(name, productCode, quantity, valuePerItem) {
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

let shoes = [];

shoes.push(new Shoes("Nike Air Max", "NK001", 12, 1899.99));
shoes.push(new Shoes("Adidas Superstar", "AD002", 8, 1499.0));
shoes.push(new Shoes("Puma Suede", "PM003", 20, 999.5));
shoes.push(new Shoes("Converse All Star", "CV004", 15, 849.0));
shoes.push(new Shoes("Vans Old Skool", "VN005", 10, 1199.99));

// searches by name or product code, doesnt matter if its caps or not
function searchShoe(array, searchTerm) {
  let term = searchTerm.toLowerCase();

  for (let i = 0; i < array.length; i++) {
    if (array[i].name.toLowerCase().includes(term) || array[i].productCode.toLowerCase() === term) {
      console.log(`\nFound a shoe matching "${searchTerm}":`);
      console.table([array[i]]);
      return array[i];
    }
  }

  console.log(`\nNo shoe found matching "${searchTerm}".`);
  return null;
}

function findLowestValue(array) {
  let lowest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i].valuePerItem < lowest.valuePerItem) {
      lowest = array[i];
    }
  }

  console.log(`\nLowest value per item: ${lowest.name} (${lowest.productCode}) at R${lowest.valuePerItem}`);
  return lowest;
}

function findHighestValue(array) {
  let highest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i].valuePerItem > highest.valuePerItem) {
      highest = array[i];
    }
  }

  console.log(`\nHighest value per item: ${highest.name} (${highest.productCode}) at R${highest.valuePerItem}`);
  return highest;
}

// finds the shoe by its product code and changes all 4 properties
function editShoe(array, productCode, newName, newCode, newQuantity, newValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].productCode === productCode) {
      array[i].name = newName;
      array[i].productCode = newCode;
      array[i].quantity = newQuantity;
      array[i].valuePerItem = newValue;
      return array[i];
    }
  }

  console.log(`\nCould not edit, no shoe with code ${productCode}.`);
  return null;
}

// makes a copy first so the original array order stays the same
function sortByValue(array) {
  let sorted = [...array];
  sorted.sort((a, b) => a.valuePerItem - b.valuePerItem);

  console.log("\nShoes ordered by value per item (lowest to highest):");
  console.table(sorted);
  return sorted;
}

// ---------- testing ----------

console.log("Starting inventory:");
console.table(shoes);

searchShoe(shoes, "puma");
searchShoe(shoes, "VN005");
searchShoe(shoes, "Reebok");

findLowestValue(shoes);
findHighestValue(shoes);

sortByValue(shoes);

editShoe(shoes, "NK001", "Nike Air Force 1", "NK101", 18, 1699.0);
editShoe(shoes, "AD002", "Adidas Stan Smith", "AD102", 14, 1399.99);
editShoe(shoes, "PM003", "Puma RS-X", "PM103", 9, 1799.0);
editShoe(shoes, "CV004", "Converse Chuck 70", "CV104", 11, 1099.0);
editShoe(shoes, "VN005", "Vans Sk8-Hi", "VN105", 7, 1299.5);

console.log("\nInventory after editing all five shoes:");
console.table(shoes);

findLowestValue(shoes);
findHighestValue(shoes);
sortByValue(shoes);
