import create from 'zustand'

const useStore = create((set) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  /* removeAllBears: () => set({ products: 0 }), */
}))


export default useStore