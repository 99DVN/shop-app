import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import styles from '../styles.module.scss';

const Loading = () => {
    const { loadingCart } = styles;
    return (
        <div className={loadingCart}>
            <LoadingTextCommon />
        </div>
    );
};

export default Loading;
