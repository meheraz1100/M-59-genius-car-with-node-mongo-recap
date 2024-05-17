import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { Authcontext } from "../../Providers/AuthProviders";
import axios from "axios";


const Login = () => {


    const {signIn} = useContext(Authcontext);
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)


    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        


        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = { email }
            // navigate(location?.state ? location?.state : '/' ) 
            // get access token
            axios.post('http://localhost:5000/jwt', user)
            .then(res => {
              console.log(res.data);
            })
        })
        .catch(error => console.log(error))
    }



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-4xl text-center font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className="text-center pb-4">New to Car Doctors? <Link to="/signUp" className="font-bold text-orange-500"> Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
