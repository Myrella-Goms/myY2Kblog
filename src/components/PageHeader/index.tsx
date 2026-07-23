import { NavItems } from "../NavItems";

export function PageHeader() {
  return (
    <header className="sticky top-0 flex z-10 justify-around py-2 px-2 border-b items-center">
      <div className="flex items-center gap-2">
        <span className="flex size-8 justify-center bg-primary text-2xl text-primary-foreground">✦</span>
        <h3 className="text-glitch">my little--noise</h3>
      </div>
      <NavItems />
    </header>
  );
}
