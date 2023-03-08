
import Barchart from "./components/Barchart/index.jsx";
import Radarchart from "./components/Radarchart/index.jsx";
import Columnchart2 from "./components/Columnchart2/index.jsx";
import Columnchart from "./components/Columnchart/index.jsx";
import Piechart from "./components/Piechart/index.jsx";
import Radarchart_2 from "./components/Radarchart_2/index.jsx";

import img1 from "./img/gotlogoprateada.png"
import img2 from "./img/got-footer.svg"

function App() {
  return (
    <>
    <div className="main_container">  
      <img src={img1} alt="Logo" /> 
      <h1>BASE DE DADOS</h1>
      <div className="container_perguntas">
        <ul>
          <a href="#grafico1"><li>Pergunta 1</li></a>
          <a href="#grafico2"><li>Pergunta 2</li></a>
          <a href="#grafico3"><li>Pergunta 3</li></a>
          <a href="#grafico4"><li>Pergunta 4</li></a>
          <a href="#grafico5"><li>Pergunta 5</li></a>
          <a href="#grafico6"><li>Pergunta 6</li></a>
          <a href="#grafico7"><li>Pergunta 7</li></a>
          <a href="#grafico8"><li>Pergunta 8</li></a>
        </ul>
      </div>
    </div>

      <div className="graficos">
        <section id="grafico1">
          <p>Quais são os melhores episódios segundo a nota da crítica?</p>
            <Columnchart  class='general_Rules'/>
          <p>Resposta:</p>
        </section>
        <section id="grafico2">
          <p>Insira a pergunta 1 aqui</p>
            <Barchart class='general_Rules'/>
          <p>Resposta da pergunta</p>
        </section>
        <section id="grafico3">
        <Columnchart2 class='general_Rules'/>
        </section>
        <section id="grafico4">
        <Piechart class='general_Rules'/>
        </section>
        <section id="grafico5">
          <Radarchart class='general_Rules'/>
        </section> 
        <section id="grafico6">
          <Radarchart class='general_Rules'/>
        </section> 
        <section id="grafico7">
          <Radarchart class='general_Rules'/>
        </section>  
        <section id="grafico8">
<<<<<<< HEAD
          <Radarchart class='general_Rules'/>
=======
          <Radarchart_2/>
>>>>>>> fb81d6761826ee7fb34e5e54bf9476887b881b33
        </section>      
      </div>

      <footer>
        <img src={img2} alt="Logo" />
      </footer>


    </>
  );
}

export default App;