import styled from "styled-components";
import fundo from "../../assets/marco-topo.png";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const BodyHeader = styled.div`
  height: 120px;
  background-image: url(${fundo});
  border: 1px solid #827878;
  border-right: 0;
  border-left: 0;
  display: flex;
  justify-content: center;
`;
export const AreaLayout = styled.div`
  width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FotterHeader = styled.div`
  height: 40px;
  background-color: #000;
`;

export const Image = styled.img``;

export const ToolTip = styled.div`
  position: absolute;
  visibility: hidden;
  font-size: 13px;
  width: 200px;
  background: #fff;
  color: #000;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  bottom: 100%;
  left: 50%;
  margin-bottom: 5px;
  &::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #FFF transparent transparent transparent;
  }
`;

export const AreaCart = styled.div`
  width: 20%;
  display: flex;
  cursor: pointer;
  position:relative;
  &:hover ${ToolTip}{
    visibility: visible;
  }
`;

export const AreaIcon = styled.div`
  background-color: #000;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  width: 50px;
  &:hover {
    color: blue;
  }
`;
