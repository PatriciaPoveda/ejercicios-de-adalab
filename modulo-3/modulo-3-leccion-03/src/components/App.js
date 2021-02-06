import React from "react";
import "./App.scss";
import image from "../images/Baby-Yoda.jpeg";

import MediaCard from "./MediaCard";

class App extends React.Component {
  render() {
    return (
      <MediaCard
        userName="Grogu"
        image={image}
        text="Grogu, conocido simplemente como el Niño, fue un expósito mandaloriano
    sensible a la Fuerza que pertenecía a la misma especie del Gran
    Maestro Jedi Yoda y la Maestra Jedi Yaddle. Grogu nació alrededor de
    41 ABY, y fue criado en el Templo Jedi en Coruscant. Grogu fue
    mantenido en un escondite operado por mercenarios nikto en Arvala-7
    durante la Era de la Nueva República. Mientras era todavía un infante
    a la edad de cincuenta años, él fue buscado por un Imperial que
    contrató a un cazarrecompensas mandaloriano llamado Din Djarin para
    recuperarlo. Sin embargo, Djarin escogió no dejar a Grogu con los
    Imperiales y lo salvó de la instalación del remanente Imperial.
    Después de intentar esconderse con Grogu junto a los fines de la
    galaxia, Djarin regresó para tratar con los Imperiales que buscaban a
    Grogu, esperando mantenerlo a salvo. En el proceso, Grogu se convirtió
    en un expósito mandaloriano y el único otro miembro del recién creado
    clan de Djarin. Después de ser recapturado por el remanente Imperial
    liderado por el moff Gideon, Grogu fue rescatado por y llevado con
    Luke Skywalker para ser entrenado en el uso de la Fuerza."
        likes="37"
      ></MediaCard>
    );
  }
}

export default App;
