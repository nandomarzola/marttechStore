import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const AreaLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShowCase = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  width: 15%;
  margin-top: 20px;
  box-shadow: 0 0 0.1em #000;
   border-radius: 5px;
  cursor:pointer;
  &:hover{
    box-shadow: 0 0 0.3em red;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
`;
export const Title = styled.a`
  font-size: 14px;
  text-align:center;
  color: #000;
  margin-top: 10px;
  font-family:Arial, Helvetica, sans-serif;
  height:45px
`;

export const Value = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-align:center;
  padding:5px 0;
  border-top:1px solid #e8e3e3;
  border-bottom:1px solid #e8e3e3;
  margin:10px 0; 
`;
