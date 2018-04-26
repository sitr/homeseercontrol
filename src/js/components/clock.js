import React from 'react';

class Clock extends React.Component {
   constructor(props) {
      super(props)
      this.state = {date: new Date()};
      this.state.className = props.className;
   }

   componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }

   render() {
      return (
         <div className={this.state.className}>
            <span>{this.state.date.toLocaleTimeString()}</span>
            <p>{this.state.date.toLocaleDateString()}</p>
         </div>
      );
   }
}

export default Clock;