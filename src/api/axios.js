// Importation de la bibliothèque Axios pour effectuer des requêtes HTTP  
import axios from "axios";  

// Création et exportation d'une instance d'Axios avec des configurations spécifiques  
export default axios.create({  
    // Définition de l'URL de base pour toutes les requêtes effectuées avec cette instance  
    baseURL: "http://localhost:8000",  
    
    // Indication à Axios d'envoyer des cookies et des informations d'authentification avec les requêtes  
    withCredentials: true  
});