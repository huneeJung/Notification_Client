import React from 'react';
import './Element.css'

function Element(props){
    const elementHandleCategoryChange = async (categoryCode) => {
        props.mapHandleCategoryChange(categoryCode);
    };
    const category = props.category;
    const selectdCategoryCode = props.selectedCategoryCode !== undefined ? props.selectedCategoryCode : 'AL01';
    return(
        <>
            <button className={`category-button ${selectdCategoryCode==category.code ? 'selected' : ''}`} onClick={() => elementHandleCategoryChange(`${category.code}`)}>
                {category.name} 공지
            </button>
        </>
    );
}

export default Element;