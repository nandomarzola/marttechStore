import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
`;

export const AreaLayout = styled.div`
width: 1280px;
display: flex;
`;

export const Link = styled.div`
  display:flex;
  align-items: center;
  width: 100%;
  background-color: #000;
`;
/*
&:hover  {
      background-color: red;
  } 
*/ 

export const TextLink = styled.a`
  font-size:16px; 
  font-weight: bold;
  font-family:Arial, Helvetica, sans-serif;
  cursor:pointer;
  text-align:center;
  width: 100%;
  border-right: 1px dashed #403e3e;
  color:#FFF;
  height: 45px;
  line-height: 45px;
  &:hover  {
      background-color: rgb(19 117 195);
      opacity: 1;
      transition-duration: 0.4s;
      transition-delay: 0.1s;
  } 
`;