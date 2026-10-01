import type { ReactNode } from "react";
import { Header } from "./Header";
import { SkipLink } from "./SkipLink";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-fg">
      <SkipLink />
      <Header />
      <main
        id="main"
        tabIndex={-1}
        className="mx-auto w-full max-w-7xl flex-1 px-6"
      >
        {children}
      </main>
    </div>
  );
}
