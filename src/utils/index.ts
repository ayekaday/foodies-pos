
const fetchProduct =async () => {
  /* const response = fetch("https://fakestoreapi.com/products")
 response.then((data)=>{
    data.json().then((product)=>{console.log(product)})
 }).catch((err)=>{
console.log(err)
 })  */ 
 try {
   const response =await fetch('https://fakestoreapi.com/products')
const data = await response.json()
console.log(data)
} catch (error) {
   console.log(error)
}

}

export default fetchProduct
