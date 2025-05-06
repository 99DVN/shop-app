import styles from './styles.module.scss';
import { FiLoader } from 'react-icons/fi';

const LoadingTextCommon = () => {
    const { rotate } = styles;
    return <FiLoader style={{ color: 'green' }} className={rotate} />;
};

export default LoadingTextCommon;
