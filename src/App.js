
import { Link,Route, Routes } from 'react-router-dom'; // Importation du composant Link de react-router-dom pour gérer la navigation interne

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'


function App() {
    
  

    // La fonction App retourne le contenu JSX qui représente l'interface utilisateur
    return (
        <div className="bg-slate-100 min-h-screen"> {/* Conteneur principal centré et avec une largeur maximale */}
            <nav className="rounded bg-indigo-900 text-white px-2.5 sm:px-4"> {/* Barre de navigation stylisée avec Tailwind CSS */}
                <div className="container mx-auto flex flex-wrap items-center justify-between"> {/* Conteneur flex pour aligner les éléments */}
                    
                    {/* Lien vers la page d'accueil de Laraveller */}
                    <a href="https://laraveller.com/" className="flex items-center">
                        Laraveller {/* Texte du lien */}
                    </a>

                    {/* Section contenant les liens de navigation qui sont cachés sur les petits écrans et affichés sur les écrans moyens et grands */}
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                            {/* Lien vers la page d'accueil */}
                            <li>
                                <Link
                                    to="/home" className="block rounded py-2 pr-4 pl-3 text-white" aria-current="page"
                                >Home</Link>
                            </li>

                            {/* Lien vers la page de connexion */}
                            <li>
                                <Link
                                    to="/login" className="block rounded py-2 pr-4 pl-3 text-white" aria-current="page"
                                >Login</Link>
                            </li>

                            {/* Lien vers la page d'inscription */}
                            <li>
                                <Link
                                    to="/register" className="block rounded py-2 pr-4 pl-3 text-white" aria-current="page"
                                >Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='max-w-7xl mx-auto mt-6'>
                <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/login" element={<Login/>}/>
                   <Route  path="/register" element={<Register/>}/>



                </Routes>
            </div>
        </div>
    );
};

export default App; // Exportation du composant App pour qu'il puisse être utilisé dans d'autres parties de l'application
