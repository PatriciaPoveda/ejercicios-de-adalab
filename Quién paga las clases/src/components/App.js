import React from "react";
import Abuela from "./Abuela";
import "./App.scss";
// import Madre from "./Madre";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Abuela
          story1='PRIMER ACTO: Una neurobióloga (que por casualidad también era madre) estaba trabajando en su laboratorio, cuando de repente recordó que esa tarde iba a ir la profesora particular de su hija y tenía que pagarla" '
          story2='Así que llamó a su hija y le dijo: "Te aviso de que esta tarde viene tu
          profesora y tengo que pagar la clase" '
          story3='Y la hija le contestó: "Gracias por decírmelo, mama". '
          story4=' "Te avisaré cuando haya dado la clase para que pagues a la profesora". '
          story5="Entonces, una vez que dió la clase la hija,"
          story6="llamó a su madre y le recordó que tenía que pagar la clase."
          story7='SEGUNDO ACTO: La madre empezó a tener problemas de dinero pero las clases eran muy importantes así que llamo a la abuela y esta le dijo: "No te preocupes, yo me encargo de pagar las clases de mi nieta" '
        ></Abuela>
      </div>
    );
  }
}

export default App;
