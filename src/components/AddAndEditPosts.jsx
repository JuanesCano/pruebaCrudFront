import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addPosts, updatePosts } from "../store/posts/postsSlice";
import { useDispatch } from "react-redux";

export const AddAndEditPosts = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const post = location.state?.post;
    const [formData, setFormData] = useState({
        title: post?.title || "",
        description: post?.description || "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/");
        } 

        if (post && post._id) {
            dispatch(updatePosts({ postId: post._id, updateData: formData })).then(() => {
                navigate("/homepage")
            })
        } else {
            dispatch(addPosts(formData)).then(() => {
                navigate("/homepage");
            });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex justify-center">
                {post ? "Editar Post" : "Crear Nuevo Post"}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Título</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Descripción</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    {post ? "Actualizar" : "Crear"}
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/user/posts")}
                    className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                >
                    Cancelar
                </button>
            </form>
        </div>
        </div>
    );
};
