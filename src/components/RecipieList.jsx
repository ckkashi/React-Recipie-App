import React from 'react';

const RecipieList = (props) => {
  const {recipiesResults,handleSelectedRecipie} = props;
  return (
    <section>
        <ul className='recipies-list'>
        {
          recipiesResults.length===0? <h2>Loading...</h2> :recipiesResults.map((recipie)=>{
              return <li className='recipies-listitem' onClick={()=>{
                handleSelectedRecipie(recipie);
              }} key={recipie.url}>
                <h2>{recipie.title}</h2>
                <p>{recipie.description ? recipie.description:'click to see details'}</p>
              </li>;
          })
        }
        </ul>
    </section>
  );
}

export default RecipieList;
