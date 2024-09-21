import React from 'react'
import styled from 'styled-components'



const TotalScore = ({score}) => {
   
  return (
    <Scoredcontainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </Scoredcontainer>
      
  );
};

  export default TotalScore;

  const Scoredcontainer = styled.div`
  max-width: 200px;
  text-align: center;
    h1{
        font-size: 100px;
        line-height: 100px;
        margin: 0;
        padding: 0;
    }
    p{
        font-size: 24px;
        font-weight: 500px;
    }
  `

