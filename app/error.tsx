"use client";

import { useEffect } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white py-16">
      <Container>
        <div className="mx-auto max-w-2xl border-5 border-black bg-oatly-cream p-12 text-center">
          <h1 className="mb-6 text-5xl font-bold uppercase">Oops!</h1>
          <p className="mb-8 font-mono text-lg">
            Something went wrong. Our oats are a bit confused.
          </p>
          <div className="mb-8 border-3 border-black bg-white p-4 font-mono text-sm">
            {error.message || "An unexpected error occurred"}
          </div>
          <Button onClick={reset} variant="inverse">
            Try Again
          </Button>
        </div>
      </Container>
    </div>
  );
}
