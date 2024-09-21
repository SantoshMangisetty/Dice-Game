import styled from "styled-components";


export const Button = styled.button`
padding: 10px 10px;
min-width: 220px;
background-color: black;
color: white;
border-radius: 5px;
border: none;
cursor: pointer;
transition: 0.4s background ease-in;
&:hover {
  color: black;
  background-color: white;
  box-shadow: 0px 0px 10px black;
  opacity: 0.7;
  transition: 0.4s background ease-in;
}
`;
