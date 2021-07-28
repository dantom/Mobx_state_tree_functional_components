import {useState} from 'react'
import {observer } from "mobx-react-lite"
import * as React from "react"
import { Root } from "../mst";
import {RootTreeContext} from "../store/store"
//import uuid from "uuid"
import EmployeeComponent from "./Employee"

const EmployerComponent = () => {
    //regasim valoarea partajata de context. Valoarea este chiar rootTree
    const rootTree:Root = React.useContext(RootTreeContext);
    const [employeeName, setEmployeeName] = useState<string>("")
    const [hours_worked, setHours_Worked] = useState<number>(0)
    const num_employees = rootTree.employer.num_employees;
    const [searchString, setSearchString] = useState<string>("")

    const filtered_employees = rootTree.employer.filtered_employees(searchString)

    const onSubmit = (e:any) => {
      e.preventDefault();
      if (!rootTree) return null;
      rootTree.employer.newEmployee(employeeName, hours_worked)
      setEmployeeName("")
      setHours_Worked(0)
    }

    if (!rootTree) return null;
    return (
        <div>
        <h1>{rootTree.employer.name}</h1>
        <h3>{rootTree.employer.location}</h3>
        <p>{`Total number of employees: ${num_employees}`}</p>
        <hr></hr>
        <p>New Employee</p>
        <form onSubmit={onSubmit}>
          <p>Name:</p>
          <input value={employeeName} onChange={e => {setEmployeeName(e.target.value)}} />
          <p>Hours:</p>
          <input value={hours_worked} onChange={e => {setHours_Worked(parseInt(e.target.value))}} />
          <br></br>
          <button>Submit</button>
          </form>

          <hr />
          <input placeholder="Search Employee Name" value={searchString} onChange={e => {setSearchString(e.target.value)}} />
          
          {filtered_employees.map(employee =>
          <EmployeeComponent employee={employee} key={employee.id}/>
          )}
      </div>
    )
}

export default observer(EmployerComponent)