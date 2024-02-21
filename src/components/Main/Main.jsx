import './main.sass'
import Container from "../Container/Container.jsx";

function Main({children}) {
  return (
    <main className={'main'}>
      <Container>
        {children}
      </Container>
    </main>
  );
}

export default Main;