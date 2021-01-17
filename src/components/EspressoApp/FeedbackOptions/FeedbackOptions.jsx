import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
   <div className={s.buttonList}>
      { options.map(option => (
         <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
            {option.slice(0, 1).toLocaleUpperCase() + option.slice(1)}
         </button>
      ))}
   </div >
)

FeedbackOptions.propTypes = {
   onLeaveFeedback: PropTypes.func.isRequired,
   options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;