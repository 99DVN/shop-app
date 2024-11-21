import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const InputCommon = ({ label, type, isRequired = false }) => {
    const { container, labelInput, boxInput, boxIcon } = styles;
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    const isShowpassword = type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={container}>
            <div className={labelInput}>
                {label}
                {isRequired && <span> *</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowpassword} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputCommon;
