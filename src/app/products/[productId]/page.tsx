import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const productId = resolvedParams.productId;

  if (!productId) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: `Product ${productId}`,
    description: `This is the product page for ${productId}.`,
  };
}

export default async function ProductDetail({ params }: Props) {
  const productId = (await params).productId;

  if (!productId || parseInt(productId) > 1000) {
    notFound();
  }

  return <div>Detail product {productId}</div>;
}
