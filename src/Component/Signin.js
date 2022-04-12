import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../Style/Signin.css';
import axios from 'axios';
// node server.js

function Signin(){
        const [Lname,setLname]=useState("");
        const [Fname,setFname]=useState("");
        const [telephone,setTelephone]=useState("");
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");

        
        function handlerLname(e){
                setLname(e.target.value);
        }
        function handlerFname(e){
                setFname(e.target.value);
        }
        function handlerTelephone(e){
                setTelephone(e.target.value);
        }
        function handlerEmail(e){
                setEmail(e.target.value);
        }
        function handlerPassword(e){
                setPassword(e.target.value);
        }

        
        
        
      

        //     if(password==confirmpassowrd)
        function signin(){
                if(!email.toString.contains("@")){
                        if(password.toString.length>8){
                                alert(Lname+"lastname: "+Fname+"FirstName:"+email +"+email+" +password +"+password+" +telephone +" telephone");
                        axios.post("localhost:8080/adduser",{Lname:Lname,Fname:Fname,telephone:telephone,email:email,password:password}).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
                        }else{
                                alert("wrong user password too short at least 8 ");
                        }
                            
                }else{
                        alert("wrong email user");
                }
           

        }
        return(
                <div className='Container'>

                        <div className="containerlogo"> 
                               
                                <div className="containerlogo">  
                                        <img src="/assets/images/logo600x240.png" alt=''/>
                                </div>
                                <p>acheter votre produit avec une garantie par&nbsp;<span> des experts</span></p>
                        </div>
                        <div className="containersignin">
                                <div className="Formbox1">
                                <form onSubmit={signin}>
                                        <div className="labelbox1">
                                                <label className="l1">
                                                last name
                                                </label>
                                        </div>
                                        
                                        
                                        
                                        <div className="inputbox1">
                                                <input type="text" onChange={handlerLname} value={Lname} placeholder="last name"/>
                                        </div>


                                        <div className="labelbox1">
                                                <label className="l1">
                                                first name
                                                </label>
                                        </div>

                                        <div className="inputbox1">
                                                <input type="text" onChange={handlerFname} value={Fname} placeholder="first name"/>
                                        </div>
                                        
                                        
                                        <div className="labelbox1">
                                                <label className="l1">
                                                telephone
                                                </label>
                                        </div>
                                        
                                        
                                        <div className="inputbox1">
                                                <input type="telephone" onChange={handlerTelephone} value={telephone} placeholder="tel"/>
                                        </div>
 
                                        <div className="labelbox1">
                                                <label className="l1">
                                                email
                                                </label>
                                        </div>
                                        
                                        <div className="inputbox1">
                                                <input type="email" onChange={handlerEmail} value={email} placeholder="@esi-sba.dz"/>
                                        </div>

                                        
                                        <div className="labelbox1">
                                                <label>password</label>   
                                        </div> 
                                        
                                        
                                        <div className="inputbox1">
                                                <input type="password" onChange={handlerPassword} value={password} placeholder="password"/>
                                        </div>
                                        


                                       
                                        <div className="buttonbox1">
                                                <button type="submit">Signin</button>
                                        </div>
                                        
                                        
                                        <div className="labelbox2">
                                                <label><Link to="/" className="Link1">Click</Link> here if you want login</label>
                                        </div>
                                </form>
                                </div>
                        </div>
                </div>
        );
}
export default Signin;















{/* <div className="labelbox1">
        <label className="l1">
        confirme password
        </label>
</div>


<div className="inputbox1">
        <input type="password" placeholder="password"/>
</div> */}