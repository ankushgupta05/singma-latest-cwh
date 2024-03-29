// source link of bg tailwind css  https://bg.ibelick.com/

import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';


const Manager = () => {

  const ref = useRef();
  const passwordRef = useRef();

  const [form, setForm] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

const getPassword =async () =>{
  let req =await fetch("http://localhost:3000/")
  // let passwords = localStorage.getItem("passwords")
  let passwords = await req.json()
    // let passwordArray;
    // if (passwords) {
    //   passwordArray(JSON.parse("passwords"));
    // }
    console.log(passwords)
      setPasswordArray("passwords");

}

  useEffect(() => {
    getPassword();
    

  }, [])

  const copyText = (text)=>{


    toast('Copy to Clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      // theme: "light",
      theme: "dark",
      });
    // alert("copy to " + text)
    navigator.clipboard.writeText(text);
  }



  const showPassword = () => {
    // alert("Password")
    // console.log(ref.current.src)

    passwordRef.current.type = "text";
    
    if (ref.current.src.includes("icons/closeEye.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    }
    else {
      ref.current.src = "public/icons/closeEye.png";
      passwordRef.current.type = "text";
    }
  }

  const savePassword = async() => {
    // console.log(form)
    if(form.site.length > 3 && form.site.username > 3 && form.site.password > 3){

      //  If any such id exits in the db, delete it
      await fetch("http://localhost:3000/", {method:"DELETE",headers:{"Content-Type":"application/json"},
      // body:json.stringify({...form, id})
      body:json.stringify({id: form.id})
    })

    setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
    await fetch("http://localhost:3000/", {method:"POST",headers:{"Content-Type":"application/json"},
    body:json.stringify({...form, id:uuidv4()})
  })
    // localStorage.setItem("passswords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
    console.log([...passwordArray, form])
    setForm({site :"", username:"", password:""})

    toast('Password saved', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      // theme: "light",
      theme: "dark",
      });

    }
    else{
     console.log(form.site.username, form.site.password)
      toast('Not Password saved ')
  
      
    }

    
    
  }
  
  const deletePassword =async (id) => {
    console.log("dDeleting password with id ", id)
    let c = confirm("Do want to  delete password ")
    if(c){
      setPasswordArray(passwordArray.filter(item => item.id !== id))
      // localStorage.setItem("passswords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
    let res = await fetch("http://localhost:3000/", {method:"DELETE",headers:{"Content-Type":"application/json"},
    // body:json.stringify({...form, id})
    body:json.stringify({id})
  })
     
      toast('Password edit successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // theme: "light",
        theme: "dark",
        });
    }
  }

  const editPassword = (id) => {
    
    console.log("editting password with id ", id)
    setForm({...passwordArray.filter(i=>i.id === id)[0], id: id})
    setPasswordArray(passwordArray.filter(item => item.id !== id))

  }


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }




  return (
    <>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition = "Bounce"
/>
{/* Same as */}
<ToastContainer />
   


      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-green-400 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div> */}

      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

      <div className=" bg-slate-200 mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">op/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager
        </p>

        <div className="text-black flex flex-col p-4 gap-8  items-center">
          <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className="rounded-full border border-green-500 w-full p-4 py-1" type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input value={form.username} onChange={handleChange} placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder="Enter Password" className="rounded-full border border-green-500 w-full p-4 py-1" type="password" name="password" id=""
              />

              <span className="absolute right-[3px] top-[4px] cursor-pointer  " onClick={showPassword}  >
                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="" />
              </span>
            </div>
          </div>
          <button onClick={savePassword} className="flex justify-center gap-2 items-center bg-green-400 hover:bg-green-300  rounded-full px-8 py-2 w-fit border border-green-900">
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
            // style="width:250px;height:250px"  this is not apply bcz we use tailwind css
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>


          {/* if password not have than this line print */} {passwordArray.length === 0 && <div>No Passwords to show</div>}

          {/* if  password have than this line print */} {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2" >Site</th>
                <th className="py-2" >Username</th>
                <th className="py-2" >Password</th>
                <th className="py-2" >Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-200" >

              {passwordArray.map((item, index) => {
                return <tr key={index}>

                        <td className="py-2 border border-white text-center">
                              <div className="flex items-center justify-center text-center">
                                <a href={item.site} target="_blank">{item.site}</a>
                                <div className="lordiconscopy" onClick={()=>{copyText(item.site)}} ><img className=" cursor-pointer w-5 " src="public/icons/copy.png" alt="" /></div>
                              </div> 
                        </td>

                        <td className="py-2 border border-white text-center">
                              <div className="flex items-center justify-center text-center">
                              <span>{item.username}</span> 
                                  <div className="lordiconscopy" onClick={()=>{copyText(item.username)}} ><img className=" cursor-pointer w-5 " src="public/icons/copy.png" alt="" /></div>
                              </div>

                        </td>

                        <td className="py-2 border border-white text-center">
                              <div className="flex items-center justify-center text-center">
                                {/* <span> {item.password} </span> */}
                                <span> {"*".repeat(item.password.length)} </span>  {/* ye password ko star ke form mai show karenga */}
                                  <div className="lordiconscopy" onClick={()=>{copyText(item.password)}} ><img className=" cursor-pointer w-5 " src="public/icons/copy.png" alt="" /></div>
                              </div>
                        </td>
                        <td className="flex  py-2 border border-white justify-center items-center">
                        <span onClick={()=>{ editPassword(item.id) }}>
                          <img className="w-7 mx-2" src="public/icons/developer.png" alt="Edit" />
                        </span>
                        <span onClick={()=>{ deletePassword(item.id) }}>
                          <img className="w-7 mx-2" src="public/icons/project.png" alt="Delete" />
                        </span>
                        </td>
                      </tr>
              })}

            </tbody>
          </table>}

        </div>

      </div>
    </>
  );
};

export default Manager;


/* 

tailwind css table layout copy from this url

'https://tailwindcss.com/docs/table-layout'
*/

