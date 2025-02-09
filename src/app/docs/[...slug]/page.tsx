"use client";
import { useParams } from "next/navigation";

export default function Docs() {
  const params = useParams<{ slug: string[] }>();
  console.log(params);

  if (params.slug.length === 2) {
    return (
      <div>
        {" "}
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </div>
    );
  } else {
    return <div>Viewing docs for feature {params.slug[0]}</div>;
  }
  return <h1>Docs home page</h1>;
}
