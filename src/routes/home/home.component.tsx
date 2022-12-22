import { Outlet } from "react-router-dom";

import { Container, Description } from "./home.styles";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <Container>
      <Description>
        This is an example project created with React.JS, Redux, Typescript and Firebase.
      </Description>
      <Directory />
      <Outlet />
    </Container>
  );
};

export default Home;
