import { getSnapshot, onSnapshot, applySnapshot } from "mobx-state-tree";
import { RootModel } from "."

export const setupRootStore = () => {
    const rootTree = RootModel.create({
        employer: {
            id: "1",
            name: "My Company",
            location: "Bucuresti",
            employees: []
        }
    });
    onSnapshot(rootTree, (snapshot) => console.log('snapshot',snapshot))

    //urmatoarele 2 linii comentate sunt folosite la episodul 4 ca sa verifice ca rootStore/modelul, cum vrei sa-i spui, 
    //a fost creat corect si functioneaza
    
    // const currentRootTree = getSnapshot(rootTree)
    // applySnapshot(rootTree,{...currentRootTree, employer:{...currentRootTree.employer, location:"London"}})

    return {rootTree}
}