
import Barchart from "./components/Barchart/index.jsx";
import Radarchart from "./components/Radarchart/index.jsx";
import Columnchart2 from "./components/Columnchart2/index.jsx";
import Columnchart from "./components/Columnchart/index.jsx";
import Piechart from "./components/Piechart/index.jsx";

import img1 from "./img/gotlogoprateada.png"
import img2 from "./img/got-footer.svg"
import img3 from "./img/basededados.png"

function App() {
  return (
    <>

    <div className="main_container">  
      <div className="gotlogo"> 
        <img src={img1} alt="Logo" />
      </div>
      <h1>BASE DE DADOS</h1>
      <div className="container_perguntas">
      </div>
    </div>

      <div className="graficos">
        <Columnchart />
        <Barchart />
        <Columnchart2 />
        <Piechart />
        <Radarchart />      
      </div>

    <footer>
      <img src={img2} alt="Logo" />
    </footer>

    </>
  );
}

export default App;
