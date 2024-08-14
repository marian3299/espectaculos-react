import { useState } from "react";
import espectaculos from "../espectaculos";
import Espectaculo from "./Espectaculo";
import Form from "./Form";

const Shows = () => {
  const [show, setSelected] = useState(null);
  console.log(show);
  return (
    <div>
      {show ? <Form show={show}  />: null}
      {espectaculos.map((espectaculo) => (
        <Espectaculo espectaculo={espectaculo} key={espectaculo.id} setSelected={setSelected} />
      ))}
    </div>
  );
};

export default Shows;
