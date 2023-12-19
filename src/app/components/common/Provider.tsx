"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

export default function Provider({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
