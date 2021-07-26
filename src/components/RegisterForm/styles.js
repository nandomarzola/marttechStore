import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const AreaLayout = styled.div`
  width: 100%;
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

export const AreaRegister = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:20px 0;
`;

export const TextMsg = styled.p`
  color:#000;
  font-size:12px;
  font-family: Arial, Helvetica, sans-serif;
  margin:10px 0;
`;

export const Label = styled.p`
  color:#000;
  font-size:12px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  width: 20%;
`;

export const ComponentButton = styled.div`
  width: 100;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

export const Button = styled.button`
  color:#FFF;
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  width: 200px;
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

