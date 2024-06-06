"use client";

import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order completed");
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Push to Order</button>
    </>
  );
}

export default OrderProduct;