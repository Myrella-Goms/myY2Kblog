interface INavItems {
  label: string;
  href: string;
}

const navItemsProps: readonly INavItems[] = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "about-me",
    href: "about-me",
  },
];

export function NavItems() {
  return (
    <div className="flex gap-4 items-center text-muted-foreground">
      {navItemsProps.map((value, index) => 
        <a className="text-4xl py-2 px-2 border border-transparent hover:text-accent hover:border-accent" key={index} href={value.href}>[{value.label}]</a>
      )}
    </div>
  );
}
