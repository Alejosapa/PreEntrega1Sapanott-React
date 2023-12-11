import NavBar from "./components/NavBar/NavBar";
import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(){

    return(
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="" element={<div/>}/>
                    <Route path="" element={<div/>}/>
                </Routes>
            </BrowserRouter>
            
        </div>
    )
};

export default App;