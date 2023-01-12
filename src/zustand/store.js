import create from 'zustand'

export const  useStore = create((set) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id) => set((state) => ({ products: state.products.filter(el=>el.id !== id)})),
}))

export const useStoreSearchProduct = create((set)=>({
  keyword:"",
  setKeyword:($keyaword) => (set(state=>({keyword:$keyaword}))),
}))

export const useStoreLike =create((set)=>({
  likeProduct:[],
  setLikeProduct:($like) => (set(state=>({likeProduct:$like})))
}))


