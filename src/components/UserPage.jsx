import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UserPage = () => {
    const [userPosts, setUserPosts] = useState([]);
    const { user } = useSelector((state) => state.userStore); // Supongo que tienes user en Redux
    const navigate = useNavigate();

    useEffect(() => {
        // Verificar si el usuario tiene un token válido y cargar los posts
        const verifyTokenAndFetchPosts = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/"); // Redirigir al login si no hay token
                return;
            }

            try {
                // Verificar el token y cargar los posts del usuario
                const response = await axios.get("https://tu-backend-url.com/user/posts", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUserPosts(response.data.posts); // Suponiendo que el backend devuelve los posts
            } catch (error) {
                console.error("Error al cargar los posts del usuario:", error.message);
                navigate("/login"); // Redirigir al login si hay un error (token inválido)
            }
        };

        verifyTokenAndFetchPosts();
    }, [navigate]);

    return (
        <div className="user-posts-page">
            <h2 className="text-2xl font-bold mb-4">Tus Posts</h2>
            {userPosts.length === 0 ? (
                <p>No tienes posts aún.</p>
            ) : (
                <ul className="space-y-4">
                    {userPosts.map((post) => (
                        <li key={post.id} className="bg-white p-4 rounded shadow">
                            <h3 className="font-semibold">{post.title}</h3>
                            <p>{post.content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
