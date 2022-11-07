import styled from 'styled-components';

import Header from './components/Header';
import Pesquisa from './components/Pesquisa';
import UltimosLancamentos from './components/Ultimos Lancamentos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
