import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Signup(props) {
     
    const Navigate = useNavigate()
    const users = props.users
    const setusers=props.setusers

    const [eusername,setEusername]= useState()
    const[epassword,setEpassword]=useState()

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }
    function handlePInput(evt){
        setEpassword(evt.target.value)
    }
    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        Navigate("/")
    }
    return (

        <div className="bg-black p-10">
            <div className="bg-[#efefef] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign Up here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="username" onChange={handleUInput} />

                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Enter your password" onChange={handlePInput} />

                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Confirm password" />

                    <button className="bg-[#fca201] w-24 p-1 rounded-md" onClick={addUser}>
                        Sign Up
                    </button>
                    
                    <p>Already have an account <Link to={"/"} className="underline text-cyan-800"> Login</Link></p>

                </div> 
            </div>
        </div>
    )
}

export default Signup;