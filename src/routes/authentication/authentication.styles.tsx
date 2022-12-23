import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    width: 350px;
  }
`;