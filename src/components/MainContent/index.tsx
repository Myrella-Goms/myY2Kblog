type MainChildren = {
    children: React.ReactNode;
}

export function MainContent({children}: MainChildren){
    return(
        <main>
            {children}
        </main>
    )
}