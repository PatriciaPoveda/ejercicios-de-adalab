import React from "react";
import "./App.scss";
import image from "../images/Baby-Yoda.jpeg";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <main className="card">
          <header className="data">
            <img src={image} alt="" className="data__img" />
            <div className="data__container">
              <h3 className="data__container--name">Grogu</h3>
              <q className="data__container--cita">
                «Cuida mucho del pequeño.»
                <br />
                «O tal vez, él cuide de ti.»
              </q>
              <br />
              <cite className="data__container--cita">
                ―Cara Dune y Greef Karga, a Din Djarin
              </cite>
            </div>
          </header>
          <p className="text">
            Grogu, conocido simplemente como el Niño, fue un expósito
            mandaloriano sensible a la Fuerza que pertenecía a la misma especie
            del Gran Maestro Jedi Yoda y la Maestra Jedi Yaddle. Grogu nació
            alrededor de 41 ABY, y fue criado en el Templo Jedi en Coruscant.
            Grogu fue mantenido en un escondite operado por mercenarios nikto en
            Arvala-7 durante la Era de la Nueva República. Mientras era todavía
            un infante a la edad de cincuenta años, él fue buscado por un
            Imperial que contrató a un cazarrecompensas mandaloriano llamado Din
            Djarin para recuperarlo. Sin embargo, Djarin escogió no dejar a
            Grogu con los Imperiales y lo salvó de la instalación del remanente
            Imperial. Después de intentar esconderse con Grogu junto a los fines
            de la galaxia, Djarin regresó para tratar con los Imperiales que
            buscaban a Grogu, esperando mantenerlo a salvo. En el proceso, Grogu
            se convirtió en un expósito mandaloriano y el único otro miembro del
            recién creado clan de Djarin. Después de ser recapturado por el
            remanente Imperial liderado por el moff Gideon, Grogu fue rescatado
            por y llevado con Luke Skywalker para ser entrenado en el uso de la
            Fuerza.
          </p>
          <footer className="footer">
            <p className="footer__text">Leer más...</p>
            <div>
              <span className="footer__number">37</span>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
