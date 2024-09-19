import logo from '../../logo.svg';
import '../../assets/css/Login/Login.css';
import UserLogin from '../../components/Login/UserLogin';

function Login() {
    return(
        <div className='container'>
            <div className='login'>
                <div className='login-left'>
                    <img src={logo} className='form-left-logo' alt='logo' />
                </div>
                <div className='login-right'>
                    <UserLogin />
                </div>
            </div>
        </div>
    )
}
export default Login;