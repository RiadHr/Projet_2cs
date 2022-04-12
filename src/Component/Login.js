import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Login.css';
import axios, { Axios } from "axios";



function Login(){
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
        
        function handlerEmail(e){
            setEmail(e.target.value);
        }
        
        function handlerPassword(e){
            setPassword(e.target.value);
        }
        
        // /authenticateadmin
        // /authenticateexpert
        //useNavigate
        function login(e){
            e.preventDefault()
            // switch(email){
                // case "admin@gmail.com":{
                //     if(password=="admin"){
                //         alert("authentification admin\nemail: "+email+" password: "+password);   
                        axios.post("localhost:8080/authenticateadmin",{email:email,password:password}).then((response)=>{console.log(response)}).
                        catch((error)=>{console.log(error)});  
                        
                //     }else{
                //         alert("wrong admin password");
                //     }
                //     break;
                // }
                // case "lahmar@gmail.com":{
                //     if(password=="lahmar"){
                        // alert("authentification expert\nemail: "+email+" password: "+password);   
                    
                        
                //     }else{
                //         alert("wrong expert password");
                //     }
                //     break;
                // }
                // case "harmel@gmail.com":{
                //     if(password=="harmel"){
                //         alert("authentification user\nemail: "+email+" password: "+password);   
                           
                        
            //         }else{
            //             alert("wrong user password");
            //         }
            //         break;
            //     }    
            //     default:{
            //         alert("wrong email ");
            //         break;
            //     }
            // }
            
                // if(password==confirmpassowrd)
           
        }
        return(
                <div className="containerlogin">
                        <div className="logobox">  
                            <img src="/assets/images/logo 200x80.png"/>
                        </div>
                        
                        
                        <div className="Formbox">
                            <form onSubmit={login}>
                                    <div className="labelbox">
                                        <label className="l1">
                                            email
                                        </label>
                                    </div>
                                    
                                    
                                    <div className="inputbox">
                                            <input type="email" onChange={handlerEmail} value={email} placeholder="@esi-sba.dz"/>
                                    </div>

                                    
                                    <div className="labelbox">
                                            <label>password</label>   
                                    </div> 
                                    
                                    
                                    <div className="inputbox">
                                            <input type="password" onChange={handlerPassword} value={password} placeholder="password"/>
                                    </div>
                                    
                                    
                                    <div className="buttonbox">
                                            <button type="submit">Login</button>
                                    </div>
                                    
                                    
                                    <div className="labelbox0">
                                        <div className="buttonbox2">
                                            <button><Link to="SignIn/*" className="Link">Signin buyer</Link></button>
                                        </div>
                                        <div className="buttonbox2">
                                            <button><Link to="/" className="Link">Login admin</Link></button>
                                        </div>
                                        <div className="buttonbox2 ">
                                            <button><Link to="/" className="Link">Login customer</Link></button>
                                        </div>
                                    </div>
                            </form>
                        </div>
                </div>
        );
}
export default Login;