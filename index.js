///  Instructions
// - Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriated data structures we've studied so far
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// - Output a list displaying each item and its price
// - Output the total at the end



console.log(

    `%cShopping List `,
   'font-size:2rem; font-weight: bold;'

    
)

let shoppingList = [
   
      { name: 'Milk', price: 1.20 } ,
    
      { name: 'Cocoa', price: 2.00},
    
      { name: 'Salad', price: 2.00 },
    
      { name: 'Carrots', price: 2.00 },
    
      { name: 'Tomatoes', price: 2.50 },
    
      { name: 'Ready meals', price: 5.00 },
    
    
]
// console.log(shoppingList)

 let userNameItem= prompt("What is the name of the item?");
let userItemPrice = Number(prompt("What is the price?"))
 

let newItem = { name:`${userNameItem}`, price:userItemPrice}
shoppingList.push(newItem)

let total = 0
for(let item of shoppingList) {

    total += item.price
    console.log(`${item.name} costs £${item.price}`)

    
}

console.log(`The total will be:£${total.toFixed(2)}`)




