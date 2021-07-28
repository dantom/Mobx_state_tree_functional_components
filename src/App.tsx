import React from 'react';
import {RootTreeProvider, rootTree} from './store/store'
import EmployerComponent from './components/Employer';



interface Props {}
interface State {
  rootTree: any
}

function App<Props, State>(props:Props, state:State) {

  return (
    <RootTreeProvider  value={rootTree}>
      <EmployerComponent />
    </RootTreeProvider>
  );
}

export default App;
