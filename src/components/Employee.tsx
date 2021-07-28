import { observer } from "mobx-react-lite"
import React, {useState} from "react"
import { Employee, Root } from "../mst"
import { RootTreeContext } from "../store/store"


interface EmployeeComponentProps {
    employee: Employee
}

const EmployeeComponent:React.FC<EmployeeComponentProps> = ({employee}) => {
    const {hours_worked, name} = employee
    //pentru video >= 9
    //regasim valoarea partajata de context. Valoarea este chiar rootTree
    const rootTree:Root = React.useContext(RootTreeContext);
    const [employeeName, setEmployeeName] = useState<string>(name)
    const [new_hours_worked, setNew_Hours_Worked] = useState<number>(hours_worked)
    const [edit, setEdit] = useState<boolean>(false)

    const toggleEdit = () => {
        setEdit(prev => !prev)
    }

    const onSubmit = (e:any) => {
        e.preventDefault();
        console.log('save',employeeName)
        console.log('save',new_hours_worked)
        employee.editEmployee(employeeName, new_hours_worked)
        toggleEdit()
      }

    return (
        <div>
            {edit ? (
                <form onSubmit={onSubmit}>
                    <input value={employeeName} onChange={e => setEmployeeName(e.target.value)} />
                    <br/>
                    <input value={new_hours_worked} onChange={e => setNew_Hours_Worked(parseInt(e.target.value))} />
                    <br/>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={toggleEdit}>Cancel</button>
                </form>
            ) : (
                <>
                    <p>{`Name: ${name}`}</p>
                    <p>{`Hours worked: ${hours_worked}`}</p>
                    <button onClick={toggleEdit}>Edit</button>
                </>
            )}
        </div>
    )
} 
export default observer(EmployeeComponent)