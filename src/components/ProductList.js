import React from 'react'
import {useFilterContext} from "../context/filter_context";
import GridView from './GridView';
import ListView from './ListView';

function ProductList() {
  const {filtered_products : products,grid_view} = useFilterContext();

  if (products.length < 1) {
    return <h5 style={{textTransfom : "none"}}>
      sorry , no products matched your search...
    </h5>
    
  }
  return (
    <div>
      {
        grid_view ? (
          <GridView products={products}>
          ProductList
        </GridView>
        ) : (
          <ListView products={products}/>
        )
      }
    </div>

  )
}

export default ProductList
