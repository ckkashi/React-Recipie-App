import React from 'react';
import RecipieList from './RecipieList';
import RecipieResult from './RecipieResult';

const MainSection = (props) => {
    const {recipiesResults,handleSelectedRecipie,selectedRecipie,recipieResultRef} = props;
    return (
        <main className='main-section'>
            <RecipieList recipiesResults={recipiesResults} handleSelectedRecipie={handleSelectedRecipie}/>
            <RecipieResult selectedRecipie={selectedRecipie} recipieResultRef={recipieResultRef}/>
        </main>
    );
}

export default MainSection;
