import { LoginForm } from '../components/LoginForm';

export const Login = () => {
    return(
        <div className='flex justify-center items-center h-screen' style={{background: 'url(/src/img/background.png)', backgroundSize: 'cover'}}>
            <LoginForm/>
        </div>
    )
};