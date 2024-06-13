import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"; 
import logo from "../../assets/logo.png"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        }),
        headers: {
          "Content-type": "application/json"
        }
      });
      console.log(res)
      if (res.ok) {
        alert("Login success")
        navigate("/")
      } else {
        throw new Error("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="h-100 gradient-form section">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <img src={logo}
                     alt="logo" className='img'></img>
                  <h4 className="mt-1 mb-5 pb-1">Grön Market</h4>
                </div>

                <form onSubmit={handleLoginSubmit}>
                  <p>Please login to your account</p>

                  <div data-mdb-input-init className="form-outline mb-4">
                     <input
                        type="email"
                        id="form2Example11"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder='Password'
                          onChange={(e) => setPassword(e.target.value)}
                        />
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn fa-lg gradient-custom-2 mb-3 px-5 text-white fs-5" type="submit">Login</button>
                        <br />
                    <a className="text-muted small-texts" href="#!">Forgot password?</a>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2 text-muted small-texts">New here?</p>
                    <a href="/signup" className='gradient-custom-2 signup-btn p-2'>Create an account</a>
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are Grön, we are Green/Verde/Vert/Grün/Зеленый/Grønn</h4>
                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>
  )
}
