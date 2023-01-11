import Home from "./page/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./page/ProductDetails";
import Nav from "./components/Nav";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
