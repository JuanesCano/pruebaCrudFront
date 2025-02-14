import { useState } from "react";
import { useDispatch} from "react-redux";
import { registerUser } from "../store/users/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
    name: "",
    entry_date: "",
    salary: "",
    email: "",
    password: "",
}

export const RegisterForm = () => {
    const dispatch = useDispatch();
    // const { users } = useSelector((state) => state.userStore);

    const [formulario, setFormulario] = useState(initialState);
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        try {
            await dispatch(registerUser(formulario)).unwrap();
            alert("Registro exitoso");
            navigate("/login")
        } catch (error) {
            setErrorMessage(error || "Hubo un problema con el registro intente de nuevo")
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white/20 rounded-lg backdrop-blur-lg pt-4 pb-14 px-7 shadow-2xl">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight pb-6">
                            Registro
                        </h2>
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-sm text-center pb-4">{errorMessage}</div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6" id="1">
                        <div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Nombre completo"
                                value={formulario.name}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-full border border-white-600  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 bg-transparent shadow-2xl"
                            />
                        </div>
                        <div>
                            <input
                                id="entry_date"
                                name="entry_date"
                                value={formulario.entry_date}
                                onChange={handleChange}
                                type="date"
                                placeholder="Fecha de ingreso"
                                required
                                className="block w-full rounded-full border border-white-600  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 bg-transparent shadow-2x"
                            />
                        </div>
                        <div>
                            <input
                                id="salary"
                                name="salary"
                                type="number"
                                placeholder="Salario"
                                value={formulario.salary}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-full  border py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 bg-transparent shadow-2xl"
                            />
                        </div>
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Correo"
                                value={formulario.email}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-full  border py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 bg-transparent shadow-2xl"
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Contraseña"
                                value={formulario.password}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-full  border py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 bg-transparent shadow-2xl"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-full bg-indigo-500 px-3 py-2 text-lg font-semibold leading-6 text-black hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-2xl"
                            >
                                Registrarme
                            </button>
                        </div>
                    </form>
                    <p className="mt-4 text-center text-sm text-black ">
                        Ya tienes una cuenta?{" "}
                        <a
                            href="/register"
                            className="font-semibold leading-4 text-indigo-600 hover:text-indigo-500"
                        >
                            Iniciar sesion
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};