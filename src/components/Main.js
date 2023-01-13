import { Container } from "../assets/style/Style";
import Business from "./Business";
import Footer from "./Footer";
import Header from "./Header";
import Inside from "./Inside";
import Product from "./Product";
import Service from "./Service";

function Main() {
  const path = process.env.PUBLIC_URL;

  return (
    <Container>
      <Header path={path} className="header" />
      <Service path={path} />
      <Product path={path} />
      <Business path={path} />
      <Inside />
      <Footer path={path} />
    </Container>
  );
}

export default Main;
