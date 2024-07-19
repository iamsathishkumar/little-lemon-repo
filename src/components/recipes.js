import Greek from "../assets/images/greek salad.jpg"
import Bruch from "../assets/images/bruchetta.svg"
import Lemon from "../assets/images/lemon dessert.jpg"


const recipes = [
    { 
      id: 1,
      title: "Greek salad",
      price: 12.99,
      image: Greek,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {
      id: 2,
      title: "Bruchetta",
      price: 5.99,
      // image: "https://i.ibb.co/317GqZv/Bruchetta.png",
      image: Bruch,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: 4.78,
      image: Lemon,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  
  ];
  
  export default recipes;
  
  