import {useState} from 'react'
import {YOUR_APP_ID, YOUR_APP_KEY}  from "./key"
import './App.css'
import Form from './Form';
import axios from 'axios'
import RecipeTile from './RecipeTile';

function App() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

const getRecipes = async () => {
  let results = await axios.get(url);
  setRecipes(results.data.hits)
}
 const submitHandler = (e) => {
   e.preventDefault()
   getRecipes();
 }
  return (
    <div className="app">
      <h1>React Recipe App</h1>
      <Form  query={query} setQuery={setQuery} submitHandler={submitHandler}/>
      <div className="app__recipes">
      {
        recipes.map(recipe =>(
          <RecipeTile key={recipe["recipe"]["url"]} recipe={recipe}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;
