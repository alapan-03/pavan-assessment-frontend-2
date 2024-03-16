import logo from "./../Assets/full_logo.png"
import google from "./../Assets/Google.png"
import fb from "./../Assets/Facebook.png"
import mail from "./../Assets/Email.png"
import pass from "./../Assets/Password.png"
import Cookies from 'universal-cookie';
import URL from "./../rootUrl";
import { useState } from "react"

export default function Login(props) {

    const [result, setResult] = useState(null);
    const [token, setToken] = useState(null);
    const [postData, setPostData] = useState({
      email: "",
      password: "",
    });
    
    const handleInputChange = (e) => {
      setPostData({
        ...postData,
        [e.target.name]: e.target.value
      });
    };
    const handleInputChange2 = (e) => {
      setPostData({
        ...postData,
        [e.target.name]: e.target.value
      });
    };


    const handlePostRequest = async () => {
        try {
          const response = await fetch(`${URL}/api/v1/users/login`, {
            method: 'POST',
            credentials: "include",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          });
          
          // if (!response.ok) {
          //   console.log(response)
          //   throw new Error('Network response was not ok');
          // }

          if(response.ok){
            window.location = "/dashboard"
          }
          
          const result = await response.json();
          console.log(result);
          setToken(result.token)
          setResult(result);
    
          const cookies = new Cookies();
    cookies.set('token', result.token, { path: '*' });
    console.log(cookies.get('token')); 
        //   setUsername(result.name);
          
          
        } catch (error) {
          console.error('Error making POST request:', error);
        }
      }


    return(
        <>
        <div className="login-cont-outer">
            <div className="login-cont-inner">
                {/* <div></div> */}
                <div className="login-i1">
                    <img className="logo1" src={logo}></img>
                </div>
                <div className="login-i2">
                    <div className="login-i2-p">
                        <p className="login-i2-p1">Welcome to</p>
                        <p className="login-i2-p2">RestroDineTech</p>
                    </div>

                    <img className="google" src={google}/>
                    <img className="fb" src={fb}/>

                    <div className="or-border">
                        <div className="or-border-1"></div>
                        <p>OR</p>
                        <div className="or-border-1"></div>
                    </div>

                    <div className="input-cont">
                        <img className="input-logo1" src={mail}/>
                        <input className="input" type="email" 
                        name="email"
                        value={postData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"></input>
                    </div>

                    <div className="input-cont">
                        <img className="input-logo1" src={pass}/>
                        <input className="input" 
                        name="password" value={postData.password}
                        onChange={handleInputChange2}
                        type="password" placeholder="Enter your password"></input>
                    </div>
                    

                    <button className="login-btn" onClick={handlePostRequest}>Login</button>
                </div>
            </div>
        </div>
        </>
    )
}