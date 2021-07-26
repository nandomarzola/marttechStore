import styled  from 'styled-components';

export const Container = styled.div`
  width:100%;
  margin-top:20px;
`;

export const AreaLayout = styled.div`
  width:100%;
  border-bottom: 1px dashed #e0dcdc;
  padding-bottom: 20px;
`;

export const AreaButton = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  color:#FFF;
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  border:0;
  background-color: rgb(13, 135, 54);
  margin-top:10px;
  padding:10px;
  height: 35px;
  &:hover  {
      background-color: rgb(43 47 51);
      transition-duration: 0.4s;
      transition-delay: 0.1s;
      opacity: 1;
  } 
`;

