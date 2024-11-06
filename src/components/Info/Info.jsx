import { dataInfo } from '@components/Info/constants';
import InfoCard from '@components/Info/InfoCard/InfoCard';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';

const Info = () => {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>
                {dataInfo.map((item) => {
                    return (
                        <InfoCard
                            src={item.src}
                            content={item.title}
                            description={item.description}
                        />
                    );
                })}
            </div>
        </MainLayout>
    );
};

export default Info;
