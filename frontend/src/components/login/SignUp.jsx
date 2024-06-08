import React from 'react'
import logo from "../../assets/logo.png"

export default function SignUp() {
  return (
    <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center">
                  <img src={logo}
                     alt="logo" className='img'></img>
                </div>

                <form>
                  <p>Create an account </p>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="name" className="form-control"
                        placeholder="Name"
                      />
                  </div>
                    
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="lastname" className="form-control"
                        placeholder="Lastname"
                      />
                  </div>  
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form2Example22" className="form-control" placeholder='Password'/>
                  </div>
                  <div className="text-center pt-1 mb-5 pb-1">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn fa-lg gradient-custom-2 mb-3 px-5 text-white" type="submit">Submit</button>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pb-4">
                  <p className="mb-0 me-2 text-muted small-texts">Already registered?</p>
                    <a href="/login" className='gradient-custom-2 signup-btn p-2'>Sign In</a>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
