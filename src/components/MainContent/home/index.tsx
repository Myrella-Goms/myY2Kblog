export function Home() {
  return (
    <main className="flex justify-around mt-10">
      <div className="flex flex-col max-w-md">
        <p className="border border-primary text-primary px-2 py-2">★ born in 2002 · updated whenever ★</p>
        <div className="font-title text-8xl">
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
          personal blog / anxiety diary / and my struggle to keep even a tiny bit of routine going. rn im thinking about my plug in baby from muse
        </p>
      </div>
      <div></div>
    </main>
  );
}
