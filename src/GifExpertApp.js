import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//FC
//Snippet (atajo rafc)
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Yorkshire Terrier']);

    return  <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        /> ))
                }
            </ol>

            </>;
};


export default GifExpertApp;