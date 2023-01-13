import styled from 'styled-components'

export const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const ContOptionPost = styled.ul`
  z-index: 2;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #34333c;
  position: absolute;
  top: 1.5rem;
  right: 2.5rem;
  //animation: open-linear-overlay 0.5s forwards both;
`

export const Option = styled.li`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  gap: calc(10px);
  border-radius: 6px;
  padding: 0 10px;

  span {
    font-weight: 700;
  }

  :hover {
    background-color: #295264;
    cursor: pointer;
  }
`
