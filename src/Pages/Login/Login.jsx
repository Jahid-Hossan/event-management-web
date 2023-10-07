import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../Provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2'

const Login = () => {


    const { popUpGoogle, logIn } = useContext(AuthContext)

    const provider = new GoogleAuthProvider()
    const handlePopUp = () => {
        popUpGoogle(provider)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then(res => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `${err}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card pt-3 flex-shrink-0 w-full max-w-sm mt-14 shadow-2xl bg-base-100">
                        <h1 className=" text-2xl lg:text-5xl px-5 text-center font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="px-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3 p-0">
                                <button type='submit' className="btn btn-neutral">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>

                        </form>
                        <div className='text-center py-5'>
                            <button onClick={handlePopUp} className="btn gap-0 btn-sm "><FcGoogle></FcGoogle>oogle</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;