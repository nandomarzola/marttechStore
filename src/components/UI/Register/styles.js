import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
`;

export const AreaLayout = styled.div`
  width: 100%;
  height: 350px;
  padding:0 20px;
`;
export const AreaRegister = styled.div`
  width: 100%;
  height: 300px;
  border-bottom: 1px dashed rgb(95, 104, 116);
`;

export const TitleTop = styled.div`
  margin-top: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: rgb(95, 104, 116);
`;

export const TitleTextTop = styled.h1`
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-left: 10px;
`;

export const TitleText = styled.h1`
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(58 63 70);
  margin: 20px 0;
`;

export const TextDescription = styled.h1`
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(95, 104, 116);
  text-align: justify;
`;

export const Button = styled.button`
  color:#FFF;
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  width: 80px;
  border:0;
  background-color: rgb(13, 135, 54);
  margin-top:10px;
  height: 35px;
  &:hover  {
      background-color: rgb(43 47 51);
      transition-duration: 0.4s;
      transition-delay: 0.1s;
      opacity: 1;
  } 
`;

