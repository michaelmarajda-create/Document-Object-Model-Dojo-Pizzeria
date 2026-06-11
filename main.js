// 1. Define the pizzaOven function
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

// 2. Create the first specific pizza
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("--- Pizza 1 ---");
console.log(pizza1);

// 3. Create the second specific pizza
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("--- Pizza 2 ---");
console.log(pizza2);

// 4. Create 2 more pizzas with any toppings you like!
var pizza3 = pizzaOven("thin crust", "white garlic", ["mozzarella", "parmesan"], ["chicken", "spinach"]);
var pizza4 = pizzaOven("stuffed crust", "bbq", ["cheddar", "mozzarella"], ["pulled pork", "red onions", "jalapenos"]);

console.log("--- Pizza 3 (MyIngredients) ---");
console.log(pizza3);
console.log("--- Pizza 4 (MyIngredients) ---");
console.log(pizza4);

///////////////////////////////////////////////////////////////////////

// Arrays of available ingredients
var crustOptions = ["deep dish", "hand tossed", "thin crust", "stuffed crust", "gluten free"];
var sauceOptions = ["traditional", "marinara", "white garlic", "bbq", "pesto"];
var cheeseOptions = ["mozzarella", "feta", "cheddar", "parmesan", "gorgonzola", "vegan cheese"];
var toppingOptions = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "chicken", "spinach", "jalapenos", "pineapple", "bacon"];

// Helper function to pick a random item from an array
function getRandomItem(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Helper function to pick a random list of items (for cheeses and toppings)
function getRandomList(array, maxItems) {
    var count = Math.floor(Math.random() * maxItems) + 1; // Pick between 1 and maxItems
    var selectedItems = [];
    
    while(selectedItems.length < count) {
        var item = getRandomItem(array);
        // Ensure we don't pick duplicates for the same pizza
        if(!selectedItems.includes(item)) {
            selectedItems.push(item);
        }
    }
    return selectedItems;
}

// The randomPizza function utilizing our pizzaOven
function randomPizza() {
    var randomCrust = getRandomItem(crustOptions);
    var randomSauce = getRandomItem(sauceOptions);
    var randomCheeses = getRandomList(cheeseOptions, 2); // Up to 2 cheeses
    var randomToppings = getRandomList(toppingOptions, 3); // Up to 3 toppings
    
    return pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
}

// Test out the random pizza generator!
console.log("--- Random Pizza Delivery ---");
console.log(randomPizza());
console.log(randomPizza());