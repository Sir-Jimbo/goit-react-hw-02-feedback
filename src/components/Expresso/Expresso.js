
import { Component } from 'react'
import Section from '../Section.js/Section'
import Statistics from '../Statistics/Statistics'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Notification from '../Notification/Notification'


class Expresso extends Component {

   static defaultProps = {}

   static propTypes = {}

   state = {
      good: 0,
      neutral: 0,
      bad: 0,
   }

   leaveFeedback = (state) => {
      this.setState(prevState => ({
         [state]: prevState[state] + 1
      }))
   }

   countTotalFeedback = () => {
      return (
         Object.values = this.state.good + this.state.neutral + this.state.bad
      )
      //Object.values(this.state).reduce((acc, value) => acc + value, 0);
   }
   countPositiveFeedbackPercentage = () => {
      const countPercentage = Math.round(100 * (this.state.good / this.countTotalFeedback()));
      return countPercentage > 0
         ? countPercentage
         : 0;
   }

   upperCaseFeedbackOptions = (option) => {
      return (Object.values = option.slice(0, 1).toLocaleUpperCase() + option.slice(1)
      )
   }


   render() {
      const feedbackOptions = Object.keys(this.state);
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();

      return (
         <>
            <Section title="Please leave feedback">
               <FeedbackOptions
                  options={feedbackOptions}
                  onLeaveFeedback={this.leaveFeedback}
                  onUpperCaseFeedbackOptions={this.upperCaseFeedbackOptions}
               />
            </Section>
            <Section title="Statistics">
               {total > 0
                  ? < Statistics
                     good={this.state.good}
                     neutral={this.state.neutral}
                     bad={this.state.bad}
                     total={total}
                     positivePercentage={positivePercentage}
                  />

                  : <Notification message="No feedback given"></Notification>

               }
            </Section>
         </>
      )
   }
}

export default Expresso;