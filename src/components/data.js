import audi from'../assets/Audi_A3_8Y_IMG_3465.jpeg';
import tracker from'../assets/tracker.jpeg';
import citroenc5 from'../assets/citroenc5.jpeg';
import focus from'../assets/ford-focus.jpeg';
import toyota from'../assets/corolla.jpeg';
import peugeot from'../assets/peugeot208.jpeg';

const data = () => {
    return (  
        [
            {
            "id": 1,
            "name": "Audi",
            "modelos": "A3",
            "valor": "$10000",
            "img": audi
            },
            {
            "id": 2,
            "name": "Chevrolet",
            "modelos": "Tracker",
            "valor": "$3000",
            "img": tracker
            },
            {
            "id": 3,
            "name": "Citroen",
            "modelos": "C5",
            "valor": "$4000",
            "img": citroenc5
            },
            {
            "id": 4,
            "name": "Ford",
            "modelos": "Focus",
            "valor": "$5000",
            "img": focus
            },
            {
            "id": 5,
            "name": "Toyota",
            "modelos": "Corolla",
            "valor": "$9000",
            "img": toyota
            },
            {
            "id": 6,
            "name": "Peugeot",
            "modelos": "208",
            "valor": "$8000",
            "img": peugeot
            }
        ]
    );
}

export default data;