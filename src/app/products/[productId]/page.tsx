import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const genereateMetadata = async ({ params }: Props): Promise<Metadata> => {

  const title = await new Promise ((resolve) => {
    setTimeout(() => resolve(`Iphone ${params.productId}`), 200)
  })
  return {
    title: `Product ${title}`,
  };
};

function ProductDetails({ params }: Props) {
  return <h1>Details about product {params.productId}</h1>;
}

export default ProductDetails;
