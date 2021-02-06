import React from "react";

const MediaCard = (props) => {
  return (
    <div className="container">
      <main className="card">
        <header className="data">
          <img src={props.image} alt="imagen Grogu" className="data__img" />
          <div className="data__container">
            <h3 className="data__container--name">{props.userName}</h3>
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
        <p className="text">{props.text}</p>
        <footer className="footer">
          <p className="footer__text">Leer más...</p>
          <div>
            <span className="footer__number">{props.likes}</span>
            <i class="fa fa-heart" aria-hidden="true"></i>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MediaCard;
