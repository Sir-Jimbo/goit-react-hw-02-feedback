import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
   <div >
      { options.map(option => (
         <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
         </button>
      ))}
   </div >
)

FeedbackOptions.propTypes = {
   onLeaveFeedback: PropTypes.func.isRequired,
   options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;