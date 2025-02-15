import { useNavigate } from 'react-router-dom';
import { AdminPage } from '../components/AdminPage';
import { UserPage } from '../components/UserPage';
import { useEffect } from 'react';

export const Homepage = () => {
    const navigate = useNavigate()
    const role = localStorage.getItem("role");

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("entre a la homepage")
        console.log("Role desde localStorage:", role);

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