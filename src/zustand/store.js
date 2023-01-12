import create from 'zustand'

export const  useStore = create((set) => ({
  products: [],
  priceTotal: 0,
  setPriceTotal:($price) =>set(state => ({...state,priceTotal:$price}) ),

  addProduct: (product) => set(state => ({ products: [...state.products, product] })),
  removeProduct: () => set(state => ({...state,products:[] })),
  /* removeAllBears: () => set({ products: 0 }), */
}))

export const useStoreSearchProduct = create((set)=>({
  keyword:"",
  setKeyword:($keyaword) => (set(state=>({keyword:$keyaword}))),
}))

export const useStoreLike =create((set)=>({
  likeProduct:[],
  setLikeProduct:($like) => (set(state=>({likeProduct:$like})))
}))

export const useStoreModal =create((set)=>({
  isActiveModal:true,
  setActiveModal:($active) => (set(state=>({isActiveModal:$active})))
}))

 

