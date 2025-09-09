import React from "react"
import { Routes , Route  , Link } from "react-router-dom";
import Inicio from "./assets/pagina/inicio";
import Mas from "./assets/pagina/mas";
import "./index.css"
//import {Link , BrowserRouter} from `react-router-dom`
// Aca Princicpla codigo 
// //Pascalcase esa vaina para el compnente 


/* Link y to dben de coincidir  
<Link to="/">Inicio  </Link>
   <Link to="/Mas">Inicio  </Link>
   <Routes>
      <Route path="/"  element={<Inicio/>} />    
      <Route path="/Mas"  element={<Mas/>} />    
    </Routes>
   </>*/ 

function App(){
//Esta viana lo renderiza  l uqe queramos 
   return( // <Route path="rutaquequremosir" element={}/>
   // Definir rutas
   <>
   <nav>
       {/* Aqui es para indicar el link */}
   <Link className="url" to="/">Inicio  </Link>
   <Link className="url" to="/Mas">Mas  </Link>
    <Link><img src="#" /></Link>
  </nav>
   <Routes> {/* Definire aqui las rutas */}
      <Route path="/"  element={<Inicio/>} />    
      <Route path="/Mas"  element={<Mas/>} />    
    </Routes>
    <footer> Foter</footer>
   </>
   );
   
}

export default App; //