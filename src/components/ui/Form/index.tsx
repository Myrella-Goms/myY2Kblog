import { useState } from "react";

export function Form() {
  const [thoughts, setThoughts] = useState(" ");
  const [thoughtsList, setThoughtsList] = useState<string[]>([]);

  //capturando o evento de submit para não enviar o forms, para inserir novos elementos no array, eu copio o array original
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setThoughtsList((prevState) => [...prevState, thoughts]);
    setThoughts("");
  };

  //filter só retorna os indices cujo a condição inposta é true
  const handleClick = (i: number) => {
    setThoughtsList(thoughtsList.filter((_, index) => index !== i));
  };

  const date = new Date();
  const formatedDate = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getFullYear())}`;

  return (
    <div className="bg-background">
      <form onSubmit={handleSubmit} className="text-3xl">
        <input
          type="text"
          value={thoughts}
          onChange={(event) => setThoughts(event.target.value)}
          className="border"
        />
        <button className="bg-accent text-background" type="submit">
          go deep
        </button>
      </form>
      <ul className="mt-5">
        {thoughtsList.map((value, index) => (
          <li key={index}>
            {value} {formatedDate} -{" "}
            <button
              className="bg-accent-foreground text-background"
              type="button"
              onClick={() => handleClick(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
