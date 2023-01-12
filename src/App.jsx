import Home from "./page/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./page/ProductDetails";
import Nav from "./components/Nav";
import StripePay from "./services/StripePay";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      staleTime:Infinity
    }
    }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/paymenMethod" element={<StripePay/>} />
        </Routes>
        <ReactQueryDevtools/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
