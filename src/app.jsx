import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./assets/pagina/inicio";
import Mas from "./assets/pagina/mas";
import Productos from "./assets/pagina/productos";
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

function App() {
   //Esta viana lo renderiza  l uqe queramos 
   return ( // <Route path="rutaquequremosir" element={}/>
      // Definir rutas
      <>
         <nav>
            {/* Aqui es para indicar el link  = <a> <a> ` */}
            <Link className="url" to="/">Inicio  </Link>
            <Link className="url" to="/Productos">Productos</Link>
            <Link className="url" to="/Mas">Mas</Link>
           
         </nav>
         <main>
            <Routes> {/* Definire aqui las rutas */}
               <Route path="/" element={<Inicio />} />
               <Route path="/Mas" element={<Mas />} />
               <Route path="/Productos" element={<Productos />} />
            </Routes>
         </main>
         <footer> 
            <div>
            <ul><li>correo:pepe@company.com</li>
               <li>telefono:{"(+34)"} 5869586</li>
            </ul></div>
         </footer>
      </>
   );

}

export default App; //