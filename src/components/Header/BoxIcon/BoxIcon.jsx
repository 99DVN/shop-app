import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbicon.svg';
import itgIcon from '@icons/svgs/itgicon.svg';
import ytbIcon from '@icons/svgs/ytbicon.svg';

const BoxIcon = ({ type, href }) => {
    const { boxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'itg':
                return itgIcon;
            case 'ytb':
                return ytbIcon;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
};

export default BoxIcon;
