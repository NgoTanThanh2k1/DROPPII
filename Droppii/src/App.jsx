import { useState } from "react";

import ProductCard from "./Component/ProductCard";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
        <ProductCard />
      </div>
    </>
  );
}

export default App;
