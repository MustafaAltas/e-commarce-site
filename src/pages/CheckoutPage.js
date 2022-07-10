import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'


const Wrapper  = styled.div`


`
function CheckoutPage() {
  return (
    <main>
      <PageHero title= {"Checkout"}/>
      <Wrapper className='page'>
        <h1>Checkout here</h1>
      </Wrapper>
    </main>
  )
}

export default CheckoutPage
