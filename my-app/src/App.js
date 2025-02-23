import Header from './components/Header';
import Pesquisa from './components/Pesquisa';
import styled from 'styled-components';

const AppContainer = styled.div`
  /*width: 100vw;*/
  height: 100vh;
  background-image: linear-gradient(90deg, #0b5202 35%, #28993b 165%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      
    </AppContainer>
  );
}

export default App;
