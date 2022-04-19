import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
export const LoginForm = () => {
    // Necessary States
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    
    // Call when form will submit
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(username !== "" && password !== ""){
            setMessage(`Welcome, ${username}`);
            setMessageType("success");
        }
        else{
            setMessage(`All the fields are required`);
            setMessageType("error");
        }
        setUserName("");
        setPassword("");
        setTimeout(()=>{setMessage("")}, 5000); 
    };
    return (
        <div className="login_box">
        <div className="box_image">
            <img src={logo}  alt="logo" />
        </div>
        <form className="form" onSubmit={onSubmitForm}>
            
            <div className="input_div">
            {message !== "" ? 
            <div className={`message message_${messageType}`}>
                <span>{message}</span>
            </div> 
            : ""}
            </div>
            <div className="input_div">
            <input type="text" name="username" value={username} onChange={(e) => {setUserName(e.target.value)}} placeholder="Username"  />
            </div>
            <div className="input_div">
            <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" />
            </div>
            <div className="input_div">
            <button type="submit" className="btn_login">Login</button>
            </div>        
        </form>
        
        </div>
    );
}
