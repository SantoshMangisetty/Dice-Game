import React, { useState } from 'react'
import styled from 'styled-components'


const Dice = ({dice,roll}) => {
  return (
    <Container >
    <div className='Dice' onClick={roll}>
        <img src={`./Images/dice-${dice}.png`} alt="Simple Dice" />
        </div>
    <p>Click on Dice to Roll</p>
    
    </Container>
  )
}

export default Dice

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
cursor: pointer;
.Dice img{
    border-radius:25px;
    &:hover{
        filter: drop-shadow(0px 0px 10px);
    }
}
p{
font-size: 24px;
}
    
`