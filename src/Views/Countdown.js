import React, { Component, useState, useEffect } from "react";

class Countdown extends Component {
  state = {
    count: 10,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   console.log("ok");
    // }, 1000);
    this.timer = setInterval(() => {
      //console.log("ok");
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        this.props.onTimesUp();
      }
    }
  }

  render() {
    return <div>{this.state.count} class</div>;
  }
}

const NewCountDown = (props) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      props.onTimesUp();
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count, props]);

  return <div>{count} hook</div>;
};

export { Countdown, NewCountDown };
