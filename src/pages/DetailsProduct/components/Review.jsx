import Button from '@components/Button/Button';
import styles from '../styles.module.scss';
import FormItem from '@/pages/DetailsProduct/components/FormItem';

const ReviewProduct = () => {
    const {
        reviews,
        containerReview,
        noreview,
        replyForm,
        commentReplyTitle,
        commentNote,
        commentFormCookiesConsent,
        btnSubmit
    } = styles;

    return (
        <div className={containerReview}>
            <div className={reviews}>REVIEWS</div>
            <p className={noreview}>There are no reviews yet.</p>
            <div className={replyForm}>
                <div className={commentReplyTitle}>
                    BE THE FIRST TO REVIEW "10K YELLOW GOLD"
                </div>
                <p className={commentNote}>
                    Your email address will not be published. Required fields
                    are maked
                </p>
                <form action=''>
                    {/* RATING*/}
                    <FormItem
                        label={'Your rating'}
                        isRequired={true}
                        typeChildren='rating'
                    />
                    {/* AREA */}
                    <FormItem
                        label={'Your review'}
                        isRequired={true}
                        typeChildren='textarea'
                    />
                    {/* NAME */}
                    <FormItem
                        label={'Name'}
                        isRequired={true}
                        typeChildren='input'
                    />
                    {/* EMAIL */}
                    <FormItem
                        label={'Email'}
                        isRequired={true}
                        typeChildren='input'
                    />
                    <div className={commentFormCookiesConsent}>
                        <input type='checkbox' />
                        <span>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                        </span>
                    </div>
                    <div className={btnSubmit}>
                        <Button content={'SUBMIT'} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewProduct;
