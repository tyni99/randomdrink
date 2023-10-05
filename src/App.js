import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
function App() {
  const [drink,setDrink] = useState('')
  const [glass,setGlass] = useState('')
  const [thumb,setThumb] = useState('')
  const [inst,setInst] = useState('')
  const [ing1,setIng1] = useState('')
  const [ing2,setIng2] = useState('')
  const [ing3,setIng3] = useState('')
  const [ing4,setIng4] = useState('')
  const [ing5,setIng5] = useState('')
  const [ing6,setIng6] = useState('')
  const [ing7,setIng7] = useState('')
  const [mea1,setMea1] = useState('')
  const [mea2,setMea2] = useState('')
  const [mea3,setMea3] = useState('')
  const [mea4,setMea4] = useState('')
  const [mea5,setMea5] = useState('')
  const [mea6,setMea6] = useState('')
  const [mea7,setMea7] = useState('')


  useEffect (() => {
    axios.get(URL)
    .then((response)=>{
      const data=response.data.drinks[0]
      setDrink(data.strDrink)
      setGlass(data.strGlass)
      setThumb(data.strDrinkThumb)
      setInst(data.strInstructions)
      setIng1(data.strIngredient1)
      setIng2(data.strIngredient2)
      setIng3(data.strIngredient3)
      setIng4(data.strIngredient4)
      setIng5(data.strIngredient5)
      setIng6(data.strIngredient6)
      setIng7(data.strIngredient7)
      setMea1(data.strMeasure1)
      setMea2(data.strMeasure2)
      setMea3(data.strMeasure3)
      setMea4(data.strMeasure4)
      setMea5(data.strMeasure5)
      setMea6(data.strMeasure6)
      setMea7(data.strMeasure7)
    }).catch(error =>{
      alert(error)
    })
  },[])
  
  return (
    <div id="container">
     <h3 id="title">Random drink</h3>
     <form>
        <h3>Drink</h3>
        <p>{drink}</p>
        <h3>Glass</h3>
        <p>{glass}</p>
        <h3>Instructions</h3>
        <p>{inst}</p>
        <ul>
          <li>{ing1} {mea1}</li>
          <li>{ing2} {mea2}</li>
          <li>{ing3} {mea3}</li>
          <li>{ing4} {mea4}</li>
          <li>{ing5} {mea5}</li>
          <li>{ing6} {mea6}</li>
          <li>{ing7} {mea7}</li>
        </ul>
        <img src={thumb} alt=""/>
     </form>
    </div>

  );
}

export default App;
