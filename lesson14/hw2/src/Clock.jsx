import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ location, offset }) => {
  const [time, changeOffset] = useState(moment(getTimeWithOffset(offset)).format('LTS'));

  useEffect(() => {
    const interval = setInterval(() => {
      changeOffset(moment(getTimeWithOffset(time)).format('LTS'));
    }, 1000);

    return clearInterval(interval);
  }, [time]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

// class Clock1 extends Component {
//   constructor(props) {
//     super(props);

//     console.log(props.offset);
//     this.state = {
//       location: props.location,
//       offset: moment(getTimeWithOffset(props.offset)).format('LTS'),
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({
//         offset: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div className="clock">
//         <div className="clock__location">{this.state.location}</div>
//         <div className="clock__time">{this.state.offset}</div>
//       </div>
//     );
//   }
// }

export default Clock;
