import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = () => {

    const [Categories, setCategories] = useState(['One punch']);

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