const ITEMS = [
  'WELCOME 2 MY CORNER OF THE NET',
  'NOW PLAYING: static.mp3',
  'BEST VIEWED @ 1024x768',
  'SIGN THE GUESTBOOK',
  'U R VISITOR NO. 000342',
  'no thoughts only vibes',
]

export function AnimationBar(){
    const itemsLine = ITEMS.join(' /// ')
    return (
        <div className="bg-accent h-9 text-background px-2 py-1">
            <div className="myAnimation-bar">
                <span className="text-lg">{itemsLine}</span>
            </div>
        </div>
    )
}