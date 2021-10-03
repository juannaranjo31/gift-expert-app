import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = ( {defaultCategories = [] } ) => {

    const [Categories, setCategories] = useState(defaultCategories);

    return <>
        <h2>GiftExpertApp</h2>
        <hr />

        <AddCategory setCategories={setCategories} />

        <ol>
            {
                Categories.map( category => {
                    return <GiftGrid key={category} category= {category}/>
                })
            }
        </ol>
    </>
}

export default GiftExpertApp;