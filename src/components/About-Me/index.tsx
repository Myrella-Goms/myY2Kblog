import { Form } from "../ui/Form";

export function AboutMe(){
    return (
        <section id="about-me" className="mt-2 relative border flex flex-col items-center bg-card gap-5">
            <h2 className="mt-10 text-muted-foreground">{`> `}who_is_this</h2>
            <p className="max-w-4xl">you can call me My or Ella, I'm dev fullstack, song lover. this is my personal project and a strange diary. no analytics dashboards, no growth strategy, no nuts, no buts, no coconus. just plain text, broken gifs, and whatever song is looping in my head. if you found this place, you're one of maybe twelve people. welcome. pull up a chair.</p>
            <h3>whats in your head?</h3>
            <Form/>
        </section>
    )
}