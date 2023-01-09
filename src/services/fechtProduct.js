import axios from 'axios';

export function getProducts() {
  return axios.get("https://fakestoreapi.com/products")
    .then(res=>{
      return res.data
    })
}

export function getCategories() {
  return axios.get("https://fakestoreapi.com/products/categories")
    .then(res=>{

      return res.data
    })
}

export function getProductById(id) {
  return axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res=>{
      return res.data
    })
  }
  
  export function getProductsByCategory(category) {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>{
      return res.data
    })
}