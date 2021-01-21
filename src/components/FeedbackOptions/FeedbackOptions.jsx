import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';


const FeedbackOptions = ({ options, onLeaveFeedback, onUpperCaseFeedbackOptions }) => (

   <div className={s.buttonList}>
      { options.map(option => (
         <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
            {onUpperCaseFeedbackOptions(option)}
         </button>
      ))}
   </div >
)

FeedbackOptions.propTypes = {
   onLeaveFeedback: PropTypes.func.isRequired,
   onUpperCaseFeedbackOptions: PropTypes.func.isRequired,
   options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;