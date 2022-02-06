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

    getDayOfWeek = (dayNumber) => {
       var days = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
       return days[dayNumber -1];
    }

   render() {
      return (
         <div className={this.state.className}>
            <span>{this.state.date.toLocaleTimeString('nb-NO')}</span>
            {/* <p>{this.getDayOfWeek(this.state.date.getDay())} {this.state.date.toLocaleDateString('nb-NO')}</p> */}
         </div>
      );
   }
}

export default Clock;