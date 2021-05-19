const Form = ({query, setQuery, submitHandler, setHealthLabel}) => {


    return (
        <form className="app__form" onSubmit={submitHandler}>
            <input className="app__input" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
            type="text"  
            placeholder="enter recipe "/>
            <input className="app__search" type="submit" value="search" />
            <select className="app__healthLabels">
                <option onClick={() => setHealthLabel("vegan")}>Vegan</option>
                <option onClick={() => setHealthLabel("vegetarian")}>vegetarian</option>
                <option onClick={() => setHealthLabel("paleo")}>paleo</option>
                <option onClick={() => setHealthLabel("dairy-free")}>dairy-free</option>
             <option onClick={() => setHealthLabel("gluten-free")}>gluten-free</option>
                 <option onClick={() => setHealthLabel("wheat-free")}>wheat-free</option>
                <option onClick={() => setHealthLabel("egg-free")}>egg-free</option>
                <option onClick={() => setHealthLabel("low-sugar")}>low-sugar</option>
                 <option onClick={() => setHealthLabel("peanut-free")}>peanut-free</option>
                 <option onClick={() => setHealthLabel("tree-nut-free")}>tree-nut-free</option>
                 <option onClick={() => setHealthLabel("soy-free")}>soy-free</option>
                <option onClick={() => setHealthLabel("fish-free")}>tree-nut-free</option>

            </select>
         </form>
        
    )
}

export default Form

