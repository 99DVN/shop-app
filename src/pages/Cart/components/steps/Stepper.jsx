import styles from '../../styles.module.scss';
import cls from 'classnames';

const Stepper = ({ number, content, isDisabled }) => {
    const { numberStep, stepper, textStep, isDisableNumber, isDisabledText } =
        styles;
    return (
        <div className={stepper}>
            <div
                className={cls(numberStep, {
                    [isDisableNumber]: isDisabled
                })}
            >
                {number}
            </div>
            <div className={cls(textStep, { [isDisabledText]: isDisabled })}>
                {content}
            </div>
        </div>
    );
};

export default Stepper;
