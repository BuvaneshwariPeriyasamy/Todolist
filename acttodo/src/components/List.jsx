import {useState} from "react";
import ToDoItem from "./ToDoItem";
function List(props){

    const activityArr=props.activityArr;
    const setActivityArr=props.setActivityArr;
    return(
        <div className="bg-[#BDB4E4] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        {activityArr.length===0?<p>You haven't added anything yet </p>:""}
{
    activityArr.map(function(item,index){
        return <ToDoItem id={item.id} item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />
    })
}
    </div>
    )
}

export default List;