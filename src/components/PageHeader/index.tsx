import { NavItems } from "../NavItems";

export function PageHeader() {
    return(
        <header className="sticky top-0 flex z-10 justify-around py-4 border-b border-border">
            <h2 className="font-normal">my little noise</h2>
            <NavItems/>
        </header>
    )
}