import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 45px;
  background-color: #000;
  display: flex;
  justify-content: center;
`;

export const AreaLayout = styled.div`
  width: 1280px;
  display: flex;
  align-items: center;
`;

export const AreaMenu = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
`;

export const AreaAccess = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const Link = styled.a`
  margin:0 10px 0 0;
  font-size:12px;
  color:#FFF; 
  font-family:Arial, Helvetica, sans-serif;
  cursor:pointer;
`;