export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-3xl py-16 text-center sm:py-20 lg:py-28"
    >
      <h2
        id="about-title"
        className="text-3xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
      >
        Turning ideas into{" "}
        <span className="text-accent sm:block">digital experiences.</span>
      </h2>

      <p className="mt-6 text-lg text-fg sm:mt-8 sm:text-xl lg:text-2xl">
        I’m a Full-Stack Web Developer with experience building modern web
        applications, scalable APIs and data-driven digital products.
      </p>
      <p className="mt-4 text-base text-muted sm:text-lg">
        I studied at the University of Hertfordshire and have built production
        software ranging from marketplace platforms to retail systems that run
        a working shop floor. I prefer small, well-understood components,
        explicit data contracts and interfaces that work for everyone.
      </p>

      <a
        href="#work"
        className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 font-medium text-accent-fg hover:opacity-90 sm:mt-10 sm:text-lg"
      >
        Explore My Work
        <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
