import create from 'zustand'

export const  useStore = create((set) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
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


