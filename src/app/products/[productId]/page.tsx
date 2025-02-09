"use client";
import { notFound, useParams } from "next/navigation";
export default function ProductDetail() {
  const params = useParams<{ productId: string }>();
  if (parseInt(params.productId) > 1000) {
    notFound();
  }
  return (
    <>
      <div>Detail product {params.productId}</div>
    </>
  );
}
