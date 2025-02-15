import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePosts, getPosts } from "../store/posts/postsSlice";

export const AdminPage = () => {
    const dispatch = useDispatch();
    const { posts, isLoading } = useSelector((state) => state.postStore || {});
    console.log("Posts recibidos:", posts);
    const navigate = useNavigate();

    // Verificación de rol
    useEffect(() => {
        const token = localStorage.getItem("token");
        const userRole = localStorage.getItem("role");

        if (!token || userRole !== "admin") {
            navigate("/");
            console.log("entre a la page admin");
        } else {
            dispatch(getPosts());
        }
    }, [dispatch, navigate]);

    const handleEdit = (postId) => {
        console.log(`Editar post con ID: ${postId}`);
    };

    const handleDelete = (postId) => {
        dispatch(deletePosts(postId));
    };

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Crud konecta
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </nav>

            <div className="admin-posts-page p-8">
                <h2 className="text-2xl font-bold mb-6">Todos los Posts</h2>
                {isLoading ? (
                    <p>Cargando posts...</p>
                ) : Array.isArray(posts.data) && posts.data.length === 0 ? (
                    <p>No hay posts disponibles.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {Array.isArray(posts.data) &&
                            posts.data.map((post) => (
                                <div
                                    key={post.id}
                                    className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                        {post.title}
                                    </h3>
                                    <p className="mb-3 font-normal text-gray-700">
                                        {post.description}
                                    </p>
                                    <div className="flex justify-between mt-4">
                                        <button
                                            className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                            onClick={() => handleEdit(post.id)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                                            onClick={() => handleDelete(post._id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};
