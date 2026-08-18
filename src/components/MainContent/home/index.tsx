import { Carousel } from "../../Carousel";

export function Home() {
  return (
    <main className="mt-15 flex justify-center gap-22">
      <section className="flex flex-col flex-1 max-w-md">
        <p className="border border-primary text-accent px-2 py-2 self-start">
          ★ born in 2002 · updated whenever ★
        </p>
        <div className="font-title text-mobile-title md:text-8xl">
          noises{" "}
          <span className="text-primary">
            from <br />
            my fucking
          </span>{" "}
          <br />{" "}
          <span className="text-accent text-glitch">
            {">>"}head{">>"}
          </span>
        </div>
        <p className="max-w-md font-body text-muted-foreground">
          personal blog / anxiety diary / and my struggle to keep even a tiny
          bit of routine going. rn im thinking about my plug in baby from muse
        </p>
      </section>
      <section className="flex-1 max-w-md">
        <Carousel />
      </section>
    </main>
  );
}
