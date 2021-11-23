import { Card } from "../../layout/card/styled";
import { Container } from "../home/styled";
import TitleHome from "../../layout/home/TitleHome";
// import FormAuth from "../../layout/form/FormAuth";
// import FormResgiter from "../../layout/form/FormRegister";
import FormReset from "../../layout/form/FormReset";

const Home = () => {
  return (
    <Container>
      <TitleHome />
      <div>
        <h3>Authentication</h3>
        <Card>
          {/* <FormAuth /> */}
          {/* <FormResgiter /> */}
          <FormReset />
        </Card>
        <button>Sign Up</button>
      </div>
    </Container>
  );
};

export default Home;
