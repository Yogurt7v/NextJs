import Link from "next/link";

function ProductsList() {
  return (
    <>
      <h1 className="text-3xl font-bold underline ">Product List</h1>
      <h2 className="text-3xl font-bold underline "><Link href="/products/1">Product1</Link></h2>
      <h2 className="text-3xl font-bold underline "><Link href="/products/2">Product2</Link></h2>
      <h2 className="text-3xl font-bold underline "><Link href="/products/3">Product3</Link></h2>
    </>
  );
}

export default ProductsList;