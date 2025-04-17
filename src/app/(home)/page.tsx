import { HydrateClient, trpc } from "@/trpc/server";
import PageClient from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary"

export default async function Home() {
  void trpc.hello.prefetch({
    text: "prefetch"
  })
  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading videos that dont exist...</p>}>
      <ErrorBoundary fallback={"An error has occurred..."}>
        <PageClient/>
      </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
