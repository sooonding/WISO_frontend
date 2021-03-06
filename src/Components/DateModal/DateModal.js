import React, { Component } from "react";
import Calendar from "react-calendar";
import "./DateModal.scss";

class DateModal extends Component {
  state = {
    date: new Date(),
    sendingDate: {
      date: "",
      month: "",
      year: ""
    }
  };

  onChange = date => {
    this.setState(
      {
        date,
        sendingDate: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          date: date.getDate()
        }
      },
      () => {
        console.log("datemodal", this.state.sendingDate);
        this.props.closeSelector();
        this.props.toParent(
          this.state.sendingDate.date,
          this.state.sendingDate.month,
          this.state.sendingDate.year
        );
      }
    );
  };

  render() {
    return (
      <>
        {this.props.openSelector ? (
          <div className="calendarOverlay">
            <div className="calendarContent">
              <Calendar onChange={this.onChange} value={this.state.date} />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
export default DateModal;
