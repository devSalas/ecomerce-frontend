import Home from "./page/Home";
import Nav from "./components/Nav";
import ProductDetails from "./page/ProductDetails";
import StripePay from "./services/StripePay";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ModalMessageBuy from "./components/ModalMessageBuy";
import { HashRouter } from "react-router-dom";
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
      <div className="w-full">
        <HashRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/paymenMethod" element={<StripePay />} />
            <Route path="/buySuccefull" element={<ModalMessageBuy/>} />
          </Routes>
        </HashRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
