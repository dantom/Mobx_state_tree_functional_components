import React from "react"
import { setupRootStore } from '../mst/setup';
//import {Root} from '../mst/index';
//creem un context prin care o sa facem disponibil RootModel la toate componentele
// const [rootTree, setRootTree] = useState<Root>(null)

export const {rootTree} =  setupRootStore();
// in articol era
//export const stores = Object.freeze({
    //counterStore: new CounterStore()
//  });
// de vazut de ce era nevoie de freeze

export const RootTreeContext = React.createContext(rootTree);
export const RootTreeProvider = RootTreeContext.Provider;
