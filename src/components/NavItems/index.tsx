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
    <div className="flex gap-4 items-center">
      {navItemsProps.map((value, index) => 
        <a key={index} href={value.href}>{value.label}</a>
      )}
    </div>
  );
}
