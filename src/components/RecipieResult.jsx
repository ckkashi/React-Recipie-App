import {React} from 'react';

const RecipieResult = (props) => {
  const {selectedRecipie,recipieResultRef} = props;

  return Object.keys(selectedRecipie).length === 0?
  <section ref={recipieResultRef}><h2>Select recipies from the list.</h2></section>:(
    <section ref={recipieResultRef} className='recipie-result-section'>
        <h1>{selectedRecipie.title}</h1>
        <br/>
        <p><b>Description: </b> {selectedRecipie.description}</p>
        <br/>
        <p><b>Ingredients: </b>{selectedRecipie.ingredients?selectedRecipie.ingredients.join(', '):'Ingredients not found..'}</p>
        <br/>
        <p><b>Ingredients: </b>{selectedRecipie.instructions}</p>
        <br/>
        <p><b>URL: </b> {selectedRecipie.url}</p>
        <br/>
        <p><b>Author: </b> {selectedRecipie.author}</p>
        
    </section>
  );
}

export default RecipieResult;
