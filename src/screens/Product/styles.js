import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

export const AreaLayout = styled.div`
  width: 1280px;
  display: flex;
`;

export const AreaImage = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 60%;
  height: 500px;
`;

export const AreaPurchase = styled.div`
  width: 40%;
  background-color: #fbfbfb;
  height: 250px;
`;

export const TitleProduct = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #000;
  color: #fff;
  height: 45px;
  margin-bottom: 25px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Value = styled.p`
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const AreaBuy = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  color: #fff;
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  width: 100%;
  border: 0;
  background-color: rgb(13, 135, 54);
  height: 40px;
  &:hover {
    background-color: rgb(43 47 51);
    transition-duration: 0.4s;
    transition-delay: 0.1s;
    opacity: 1;
  }
`;
