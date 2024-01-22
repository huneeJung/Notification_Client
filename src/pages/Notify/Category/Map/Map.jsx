import {useState,useEffect} from 'react';
import Element from './Element/Element';

function Map(props) {
  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    setCategories(props.categories);
  },[props.categories]);

  const mapHandleCategoryChange = async (categoryCode) => {
    props.onCategoryChange(categoryCode);
  };
  return (
      <>
          {
            categories.map(category => (
              <Element 
                key = {category.code}
                category = {category}
                selectedCategoryCode = {props.selectedCategoryCode}
                mapHandleCategoryChange={mapHandleCategoryChange} 
              />
            ))
          }
      </>
  );
}

export default Map;