import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`


function ProductImages({images}) {
  const [main,setMain] = useState(images && images[0]);  
  const selectImage = (Id) => {
    setMain(...images?.filter((item) => item.id === Id))
  }

  useEffect(() =>{
    console.log(main);
  },[main]);
  
  return (
    <Wrapper>
      <img src={main?.url} alt="main_image" className='main' />
      <div className="gallery">
        {
          images?.map((item,index) => {
            return(
              <img src={item?.url} alt={item.filename} key={index} onClick={() => selectImage(item.id)} className={`${item.url === main.url ? "active" : null}`}/>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

export default ProductImages
