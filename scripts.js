
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']
names.forEach((name)=>{console.log(name)})
    
    


  
provinces.forEach((province , index)=>{
    const sinlgeName =names[index]
    console.log(`${sinlgeName}(${province})`)
    
})

const upCase = provinces.map(item=>item.toUpperCase())// makes provinces names uppercase
console.log(upCase)

const characterInNames = names.map((item)=> item.length) // checks length of names
console.log(characterInNames)

const provincesInAlpahbeticOrder = provinces.toSorted() // sorts 
console.log(provincesInAlpahbeticOrder)


const filterProvinces = provinces.filter((item) => {// filters 
 return!(item.trim().toLowerCase().includes('cape'))
})
console.log(filterProvinces.length)    
     
    
const checkingIfItemContainsS = names.map((item)=>{// checks if item cotions s and creates a boolean array using some
    const check = item.split('').some((element)=> element.toLowerCase().includes('s'))
    return check
    
    
   } )
 console.log(checkingIfItemContainsS)

const combinedObj = names.reduce((acc, c, index) => {
    acc[c] = provinces[index];
    return acc;
  }, {});        
  console.log(combinedObj)





////////////////////////////////challenge 2
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]


  console.log(
    // consoles the products
    products.forEach((item)=>console.log(item.product)),
    
    products.filter((item)=> item.product.length <= 5),//filters any with a length more than five
   
    products// filters through prices then turns them into numbers and then adds  them together
    .filter((filter) => filter.price !== '' && filter.price !== ' ')
    .map((parsedItem) => {
      parsedItem.price = parseInt(parsedItem.price);
      return parsedItem;
    }).reduce((acc, currentValue) => acc + currentValue.price,0),  
    //concates string out of the products
    products.reduce((acc, currentValue) => {
        if (acc === "") {
          return currentValue.product;
        } else {
          return `${acc}, ${currentValue.product}`;
        }
      }, ""),
    // makes produces the highest product and lowest costing product
    products.reduce((result, item) => {
        if ((!result.highest || item.price > result.highest.price) && item.price !== "") {
            result.highest = item;
          }
          if ((!result.lowest || item.price < result.lowest.price) && item.price !== "" && item.price !== " ") {
            result.lowest = item;
          }
      return {
        highest: result.highest,
        lowest: result.lowest,
        output: `Highest: ${result.highest.product}. Lowest: ${result.lowest.product}.`,
      };
    }, { highest: null, lowest: null }).output,
    // makes an object of the array
    Object.entries(products).reduce((acc, [index, current]) => {
        acc[index] = { name: current.product, cost: current.price };
        return acc;
      }, {})
  )
   




