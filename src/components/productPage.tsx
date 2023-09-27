import { useCallback } from "react";
import ShippingForm from "../components/shippingForm";

export const ProductPage = ({ productId, referrer }: any) => {
  const handleSubmit = useCallback(
    (orderDetails: any) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  return (
    <div>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
};

const post = (url: string, data: { referrer: any; orderDetails: any }) => {
  // Imagine this sends a request...
  console.log("POST /" + url);
  console.log(data);
};
