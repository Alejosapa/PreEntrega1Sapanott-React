import NavBar from "./components/NavBar";
import "bulma/css/bulma.css";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";


function App(){

    return(
        <div>
            <NavBar/>
            <ItemListContainer/>
        </div>
    )
};

export default App;