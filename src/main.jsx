import React from 'react'
import { createRoot } from 'react-dom/client'
//import App from  "./app.jsx"
import App from "./App"  // o renombra archivo a App.jsx
import { BrowserRouter } from 'react-router-dom'; // importar router

const raiz = createRoot(document.getElementById('root'));

raiz.render(
<BrowserRouter> {/*Debemos de emvolver lo primero en esto para poder renderizar las rutas creo :/ */}
<App />
</BrowserRouter>

)
