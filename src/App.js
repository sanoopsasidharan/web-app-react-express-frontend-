
import PageRoter from './RouterS'
import { AuthContextProviders } from './store/AuterContext';






function App() {

  return (
 
     <AuthContextProviders>
     <PageRoter />
     </AuthContextProviders>
   
  );
}

export default App;
