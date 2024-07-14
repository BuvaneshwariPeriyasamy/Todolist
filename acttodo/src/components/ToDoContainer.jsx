import List from "./List";
import AddToDoForm from "./AddTodoForm";
import {useState} from "react";

function ToDoContainer() {

    const [activityArr,setActivityArr]=useState([

        {
            id:1,
            activity:"Go for a Walk"
        }
    ])
    return(
<div>
    <div className="flex gap-5 flex-wrap">
    <AddToDoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
    <List activityArr={activityArr} setActivityArr={setActivityArr}/>
</div>
</div>
    )
}

export default ToDoContainer;