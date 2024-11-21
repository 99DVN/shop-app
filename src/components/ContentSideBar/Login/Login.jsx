import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

const Login = () => {
    const { container, title, boxRememberme, lostPw } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>

            <InputCommon label='Username or email' type='text' isRequired />
            <InputCommon label='Password' type='password' isRequired />
            <div className={boxRememberme}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>

            <Button content={'LOGIN'} />

            <div className={lostPw}>Lost your password</div>
        </div>
    );
};

export default Login;
