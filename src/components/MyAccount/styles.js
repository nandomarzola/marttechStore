import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
`;

export const AreaList = styled.div`
  width:100%;
`;

export const Ul = styled.ul`
  width:100%;
`;

export const Li = styled.li`
  color:rgb(80, 80, 80);
  font-family:Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  border-bottom:1px solid rgb(183 183 183);
  padding:10px;
  cursor:pointer;
  background-color: rgb(245 245 245);
  &:hover{
    background-color: #FFF;
  }
`;

export const TextLi = styled.li`
  font-size:12px;
  color:rgb(80, 80, 80);
  font-family:Arial, Helvetica, sans-serif;
  margin-left:10px;
`