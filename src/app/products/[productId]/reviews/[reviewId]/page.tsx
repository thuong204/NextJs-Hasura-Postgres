"use client";

import { notFound } from "next/navigation";

import { useParams } from "next/navigation";

export default function ReviewDetail() {
  const params = useParams<{ productId: string; reviewId: string }>();

  if (!params?.productId || !params?.reviewId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Review {params.reviewId} for Product {params.productId}
    </div>
  );
}
