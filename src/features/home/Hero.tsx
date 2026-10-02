import { CodeWindow } from "./CodeWindow";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="grid items-center gap-12 py-12 sm:py-16 md:grid-cols-2 lg:gap-16 lg:py-24"
    >
      <div>
        <p className="text-lg font-semibold text-fg">
          Ashan Shashika
        </p>
        <p className="text-muted">Slough, United Kingdom</p>
        {/* <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-fg">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-accent"
          />
          Open to senior roles
        </p> */}

        <h1
          id="hero-title"
          className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Full-Stack <span className="block">Developer</span>
        </h1>

        <p className="mt-6 max-w-prose text-xl text-fg">
          I build scalable, accessible and high-performance web
          applications.
        </p>
        <p className="mt-4 max-w-prose text-muted">
          I work across the whole product: typed React interfaces,
          GraphQL and REST APIs, relational and search data stores,
          and the AWS infrastructure they run on. I care about
          software that is fast for the people using it and easy to
          change for the people maintaining it.
        </p>
      </div>

      <CodeWindow />
    </section>
  );
}
