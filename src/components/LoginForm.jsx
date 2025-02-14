import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/users/userSlice";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resultAction = await dispatch(loginUser({email, password}));

        if(loginUser.fulfilled.match(resultAction)){
            navigate("/homepage");
        }else{
            alert("Credenciales incorrectas o error en el servidor, intente de nuevo.")
        } 
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white/15 rounded-lg backdrop-blur-lg pt-8 pb-16 px-7 shadow-2xl">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight pb-6">
                            Iniciar sesion
                        </h2>
                    </div>
                    <form onSubmit = {handleSubmit} className="space-y-6">
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Correo"
                                required
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                className="block w-full rounded-full  border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 bg-transparent shadow-2xl bg-white/10"
                            />
                        </div>
                        <div>
                            {/* <div className="flex items-center justify-between"></div> */}
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Contraseña"
                                required
                                value = {password}
                                onChange = {(e => setPassword(e.target.value))}
                                autoComplete="current-password"
                                className="block w-full rounded-full  border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 bg-transparent shadow-2xl bg-white/10"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-full bg-indigo-500 px-3 py-2 text-lg font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-2xl"
                            >
                                Iniciar
                            </button>
                        </div>
                    </form>
                    <p className="mt-4 text-center text-sm text-black ">
                        No eres miembro aun?{" "}
                        <a
                            href="/register"
                            className="font-semibold leading-4 text-indigo-600 hover:text-indigo-500"
                        >
                            Crea una cuenta
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};