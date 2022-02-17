import audi from'../assets/AudiA3.jpeg';
import tracker from'../assets/ChevroletTracker.jpeg';
import citroenc5 from'../assets/citroenc5.jpeg';
import focus from'../assets/ford-focus.jpeg';
import toyota from'../assets/corolla.jpeg';
import peugeot from'../assets/Peugeot208.jpeg';
import Civic from'../assets/HondaCivic.jpeg';
import HRV from'../assets/Honda-HRV.jpeg';
import Ram from'../assets/DodgeRam.jpeg';

const data = () => {
    return (  
        [
            {
            "id": 1,
            "name": "Audi",
            "modelos": "A3",
            "valor": "$10000",
            "img": audi,
            "idCategory": "Europeo"
            },
            {
            "id": 2,
            "name": "Chevrolet",
            "modelos": "Tracker",
            "valor": "$3000",
            "img": tracker,
            "idCategory": "Americano"
            },
            {
            "id": 3,
            "name": "Citroen",
            "modelos": "C5",
            "valor": "$4000",
            "img": citroenc5,
            "idCategory": "Europeo"
            },
            {
            "id": 4,
            "name": "Ford",
            "modelos": "Focus",
            "valor": "$5000",
            "img": focus,
            "idCategory": "Americano"
            },
            {
            "id": 5,
            "name": "Dodge",
            "modelos": "Ram",
            "valor": "$5000",
            "img": Ram,
            "idCategory": "Americano"
            },
            {
            "id": 6,
            "name": "Toyota",
            "modelos": "Corolla",
            "valor": "$9000",
            "img": toyota,
            "idCategory": "Asiatico"
            },
            {
            "id": 7,
            "name": "Peugeot",
            "modelos": "208",
            "valor": "$8000",
            "img": peugeot,
            "idCategory": "Europeo"
            },
            {
            "id": 8,
            "name": "Honda",
            "modelos": "Civic",
            "valor": "$9000",
            "img": Civic,
            "idCategory": "Asiatico"
            },
            {
            "id": 9,
            "name": "Honda",
            "modelos": "HRV",
            "valor": "$9000",
            "img": HRV,
            "idCategory": "Asiatico"
            }
        ]
    );
}

export default data;