import { useNavigate } from 'react-router-dom';
import { AdminPage } from '../components/AdminPage';
import { UserPage } from '../components/UserPage';
import { useEffect } from 'react';

export const Homepage = () => {
    const navigate = useNavigate()
    const role = localStorage.getItem("role");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(!token || !role){
            navigate("/");
        }
    },[navigate, role]);
    return(
        <div>
            {role === "admin" ? <AdminPage/> : <UserPage/>}
        </div>
    )
};