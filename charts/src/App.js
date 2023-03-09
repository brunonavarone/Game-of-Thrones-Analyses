
import Barchart from "./components/Barchart/index.jsx";
import Radarchart from "./components/Radarchart/index.jsx";
import Columnchart2 from "./components/Columnchart2/index.jsx";
import Columnchart from "./components/Columnchart/index.jsx";
import Piechart from "./components/Piechart/index.jsx";
import Columnchart3 from "./components/Columnchart3/index.jsx";

import img1 from "./img/gotlogoprateada.png"
import img2 from "./img/got-footer.svg"

import baratheon_logo from "./img/logos_background/House_Baratheon.svg_.png"
import greyjoy_logo from "./img/logos_background/House_Greyjoy.svg_.png"
import martell_logo from "./img/logos_background/House_Martell.svg_-470x470.png"
import tyrell_logo from "./img/logos_background/House_Tyrell.svg_.png"
import lannister_logo from "./img/logos_background/lannister.png"
import targ_logo from "./img/logos_background/Targaryan.png"
import arryn_logo from "./img/logos_background/aryn.png"

function App() {
  return (
    <>
    <div className="main_container">  
      <img src={img1} alt="Logo" /> 
      <h1>BASE DE DADOS</h1>
      <div className="container_perguntas" id="perguntas">
        <ul>
          <a className="circle" href="#grafico1"><li>Pergunta 1</li></a>
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
        <section className="modelo_grafico" id="grafico1">
          <p>Quantidade de casas por cada região:</p>
          <Columnchart  class='general_Rules'/>
          <img src={baratheon_logo} alt="logo baratheon" id="logo_baratheon"></img>
        </section>
        <section className="modelo_grafico" id="grafico2">
          <p>Quais os 10 personagens que mais apareceram durante toda a série:</p>
          <Barchart class='general_Rules'/>
          <img src={greyjoy_logo} alt="logo baratheon" id="logo_greyjoy"></img>
        </section>
        <section className="modelo_grafico" id="grafico3">
          <p>Quais os 13 melhores episódios de todas as temporadas:</p>
          <Columnchart2 class='general_Rules'/>
          <img src={martell_logo} alt="logo baratheon" id="logo_martell"></img>
        </section>
        <section className="modelo_grafico" id="grafico4">
          <p>Episódios com mais de 60min, episódios entre 55 e 60min e episódios com menos de 55min:</p>
          <Piechart class='general_Rules'/>
          <img src={tyrell_logo} alt="logo baratheon" id="logo_tyrell"></img>
        </section>
        <section className="modelo_grafico" id="grafico5">
          <p>Quantidade de episódios por temporada:</p>
          <Radarchart class='general_Rules'/>
          <img src={lannister_logo} alt="logo baratheon" id="logo_lannister"></img>
        </section>  
        <section className="modelo_grafico" id="grafico6">
          <p>Ordem de temporadas da mais bem avaliada para a pior:</p>
          <Columnchart3 class='general_Rules'/>
          <img src={targ_logo} alt="logo baratheon" id="logo_targ"></img>
        </section>      
      </div>

      <footer>
        <img src={img2} alt="Logo"/>
      </footer>
    </>
  );
}

export default App;