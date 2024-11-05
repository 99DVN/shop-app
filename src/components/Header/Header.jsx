import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constans';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import rotateIcon from '@icons/svgs/rotateicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';

const Header = () => {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container
    } = styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{ width: '153px', height: '53px' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, 6).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <img
                            width={26}
                            height={26}
                            src={rotateIcon}
                            alt='rotate icon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={heartIcon}
                            alt='heart icon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={cartIcon}
                            alt='cart icon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
