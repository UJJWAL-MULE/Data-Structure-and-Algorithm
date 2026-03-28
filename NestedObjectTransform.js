const obj ={
  electronics: [{ id: 1, name: 'Laptops' }, { id: 2, name: 'Mobiles' }],
  Clothing: [{ id: 3, name: 'Shirt' }, { id: 4, name: 'Jeans' }]
}

let result= []
for (const key in obj) {
  console.log(key)
  obj[key].forEach(item => {
    result.push({ ...item, category: key })
  })

}
console.log(result)