import styled from 'styled-components'



export const Comment = styled.li`
  width: 90%;
  display: flex;
  align-items: center;
  gap: calc(15px);

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`

export const ContainerTextComment = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: calc(5px);
`
export const TextComment = styled.p`
  color: #acacac;
  font-size: 0.8em;
`

export const InfoComment = styled.div`
  display: flex;
  font-size: 0.8em;
  gap: calc(10px);
`

export const UsernameComment = styled.div`
  font-weight: 700;
`

export const InfoUser = styled.div`
  color: #565656;
`
