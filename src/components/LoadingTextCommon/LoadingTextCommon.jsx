import styles from './styles.module.scss';
import { FiLoader } from 'react-icons/fi';

const LoadingTextCommon = () => {
    const { rotate } = styles;
    return (
        <FiLoader
            style={{ color: 'green', height: '40px', width: '40px' }}
            className={rotate}
        />
    );
};

export default LoadingTextCommon;
