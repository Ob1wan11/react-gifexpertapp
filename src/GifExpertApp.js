
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

const [categories, setCategories] = useState(['One punch']);

/* const handleadd=()=>{

   //setCategories(['One Piece',...categories]);

   setCategories(cats=>[ ...cats, 'One Piece']);
   
}
 */
   return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={ setCategories }/>
        <hr/>



        <ol>
            {
              categories.map( (category,i) => (
              <GifGrid 
               key={category}
               category={category}/>
               ))
            }
        </ol>
        
        
        
     </>
   );

}

GifExpertApp.propTypes={
   
}

GifExpertApp.defaultProps={

}

export default GifExpertApp;