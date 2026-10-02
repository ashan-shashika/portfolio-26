import { useEffect, useState } from "react";

type Status = "idle" | "copied" | "failed";

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2500);
    return () => clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-md px-3 text-sm font-medium text-accent hover:underline hover:underline-offset-4"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-4"
        >
          {status === "copied" ? (
            <path d="M20 6 9 17l-5-5" />
          ) : (
            <>
              <rect x="9" y="9" width="12" height="12" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </>
          )}
        </svg>
        {status === "copied" ? "Copied" : "Copy address"}
      </button>
      <span role="status" className="sr-only">
        {status === "copied" && "Email address copied to clipboard"}
        {status === "failed" && "Copy failed. Please select the address manually."}
      </span>
    </>
  );
}
