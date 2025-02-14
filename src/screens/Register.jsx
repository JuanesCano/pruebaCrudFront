import { RegisterForm } from '../components/RegisterForm';

export const Register = () => {
    return(
        <div className='flex-1 justify-center items-center h-screen w-screen' style={{background: 'url(/src/img/background.png)', backgroundSize: 'cover'}}> 
            <RegisterForm/>
        </div>
    )
}