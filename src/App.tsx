import { useState } from "react";
import { ProductPage } from "../src/components/productPage";
import { useOnlineStatus } from "./hooks/useOnlineStatus";

export default function App() {
  const isOnline = useOnlineStatus();
  return (
    <>
      <label>
        <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
      </label>
      <hr />
      <ProductPage
        referrer="wizard_of_oz"
        productId={123}
      />
    </>
  );
}
