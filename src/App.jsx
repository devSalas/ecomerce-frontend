import Home from "./page/Home";
import Nav from "./components/Nav";
import ProductDetails from "./page/ProductDetails";
import StripePay from "./services/StripePay";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className=" m-auto">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/paymenMethod" element={<StripePay />} />
        </Routes>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;
