import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const { container, title, boxRememberme, lostPw } = styles;

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required')
        }),
        onSubmit: (value) => {
            console.log(value);
        }
    });

    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>

            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label='Username or email'
                    type='text'
                    isRequired
                    formik={formik}
                />

                <InputCommon
                    id='password'
                    label='Password'
                    type='password'
                    isRequired
                    formik={formik}
                />

                <div className={boxRememberme}>
                    <input type='checkbox' />
                    <span>Remember me</span>
                </div>

                <Button content={'LOGIN'} type='submit' />
            </form>

            <div className={lostPw}>Lost your password</div>
        </div>
    );
};

export default Login;
