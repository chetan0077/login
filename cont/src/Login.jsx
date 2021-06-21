import React, { Component } from 'react';
import './login.css';

    class Login extends Component{
        state ={
            isPasswordShown :false
        };

        togglePasswordVisibility = () =>{
            const {isPasswordShown} = this.state;
            this.setState ({ isPasswordShown : !isPasswordShown});
        };

        render = () =>{
           const { isPasswordShown } = this.state;
            return(
                <div className="bg-img">
            <div className="content">
                 <header> Login form</header>
                <form action="#">

                    <div className="field">
                        <span class="fa fa-user"></span>
                        <input type="text" required placeholder="Email or Phone"/>
                    </div>

                    <div className="field space">
                        <span class="fa fa-lock"></span>
                        <input type={(isPasswordShown)? "text":"password"} className="password" required placeholder="Password"/>
                        <span className={`fa ${ isPasswordShown ? "fa-eye-slash" :"fa-eye" }`} onClick={this.togglePasswordVisibility} ></span>
                    </div>

                    <div className="pass">
                         <a href="#abc"> Forgot Password ?</a>
                    </div>
                    <div className="field">
                        <input type="submit" value="LOGIN"/>
                    </div>

                    <div className="login"> Or login With </div>

                    <div className="link">
                       <div className="facebook">
                         <i class="fa fa-facebook"> <a href="https://www.facebook.com/" > Facebook </a></i>
                       </div>

                       <div className="instagram">
                           <i class="fa fa-instagram">  <a href="https://www.instagram.com/"> Instagram </a> </i>
                       </div>
                     </div>


                    <div className="signup"> Don't have account?
                    <a href="#signup"> Signup </a>
                    </div>

                    
                </form>
            </div> 
        </div>

            )
        }
    }


        


export default Login;