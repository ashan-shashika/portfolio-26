import type { ReactNode } from "react";

const Keyword = ({ children }: { children: ReactNode }) => (
  <span className="text-code-keyword">{children}</span>
);
const Str = ({ children }: { children: ReactNode }) => (
  <span className="text-code-string">{children}</span>
);
const Fn = ({ children }: { children: ReactNode }) => (
  <span className="text-code-function">{children}</span>
);
const Prop = ({ children }: { children: ReactNode }) => (
  <span className="text-code-property">{children}</span>
);
const Comment = ({ children }: { children: ReactNode }) => (
  <span className="text-code-comment">{children}</span>
);

const Line = ({ children }: { children?: ReactNode }) => (
  <div className="flex [counter-increment:line]">
    <span className="w-10 shrink-0 pr-4 text-right text-muted select-none before:content-[counter(line)] sm:w-12" />
    <span className="pr-4 whitespace-pre">{children}</span>
  </div>
);

export function CodeWindow() {
  return (
    <div
      role="img"
      aria-label="Code editor showing a TypeScript file that describes Ashan Shashika, a full-stack developer working with React, TypeScript, GraphQL and AWS"
      className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-border bg-bg shadow-xl md:max-w-none"
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 rounded-t-md border-b-2 border-accent px-2 text-xs font-medium text-fg sm:text-sm">
          ashan.ts
        </span>
      </div>

      <pre className="overflow-x-auto py-4 font-mono text-xs leading-6 text-fg sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
        <code className="block [counter-reset:line]">
          <Line>
            <Comment>// ashan.ts</Comment>
          </Line>
          <Line>
            <Keyword>const</Keyword> developer = {"{"}
          </Line>
          <Line>
            {"  "}
            <Prop>name</Prop>: <Str>"Ashan Shashika"</Str>,
          </Line>
          <Line>
            {"  "}
            <Prop>role</Prop>: <Str>"Full-Stack Developer"</Str>,
          </Line>
          <Line>
            {"  "}
            <Prop>location</Prop>: <Str>"Slough, UK"</Str>,
          </Line>
          <Line>
            {"  "}
            <Prop>stack</Prop>: [
          </Line>
          <Line>
            {"    "}
            <Str>"React"</Str>, <Str>"TypeScript"</Str>,
          </Line>
          <Line>
            {"    "}
            <Str>"GraphQL"</Str>, <Str>"AWS"</Str>,
          </Line>
          <Line>{"  ],"}</Line>
          <Line>{"};"}</Line>
          <Line />
          <Line>
            <Keyword>export function</Keyword> <Fn>build</Fn>() {"{"}
          </Line>
          <Line>
            {"  "}
            <Keyword>return</Keyword> <Str>"fast, accessible"</Str>;
          </Line>
          <Line>{"}"}</Line>
        </code>
      </pre>
    </div>
  );
}
