import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import { getProducts } from "../services/fechtProduct";
  
import { useStoreSearchProduct } from "../zustand/store";

const SearchProducts = () => {

  const {keyword} = useStoreSearchProduct()

  if(keyword=="") return;

  let { data,isLoading } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  
  if(isLoading) return ( <div>cargando...</div> )

  let filterData= data.filter(product=>{
    if(product.title.trim().toLowerCase().includes(keyword)){
      return product
    }
  })



console.log(keyword,data,filterData)

  return(
    
    <div className="p-4">
    <div className="flex justify-between py-2">
      <h2 className="text-lg font-medium">Products</h2>
      <button className="text-sky-500">See all</button>
    </div>
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {filterData?.map(({ id, title, description, price, image }) => (
              <Card
        key={id}
        id={id}
        title={title}
        description={description}
        price={price}
        image={image}
      />

      ))}
    </div>
{/* 
    <div>
      {data?.map(({ id, title, description, price, image })=>{
        if()
      
      
      })}
    </div> */}
  </div>
  )
}

export default SearchProducts