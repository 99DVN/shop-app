import styles from './styles.module.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingTextCommon = () => {
    const { rotate } = styles;
    return <AiOutlineLoading3Quarters className={rotate} />;
};

export default LoadingTextCommon;
