import React from "react";
import { useEffect, useState } from "react";
const CountDown = (props) => {
  const [countHook, setCountHook] = useState(10);
  useEffect(() => {
    if (countHook === 0) {
      return {
        //props.alertCountDown();
      };
    }
    let CountDownHook = setInterval(() => {
      console.log("countHook: ", countHook);
      //console.log("setCountHook: ", setCountHook);
      setCountHook(countHook - 1);
    }, 1000);
    return () => {
      clearInterval(CountDownHook);
    };
  }, [countHook]);

  return (
    <div>
      <p>Countdown width Hooks</p>
      <div>{countHook} s</div>
      <div>---------------------------------------</div>
    </div>
  );
};
class ClassCountDown extends React.Component {
  state = {
    count: 10,
  };
  componentDidMount() {
    //ham chay khi state thay doi se tru 1
    this.CountdownClass = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    // neu state cu va hien tai khong bang nhau nghia la co su thay doi gia tri va gia tri state hien tai bang 0 thi chay ham
    if (prevState.count !== this.state.count && this.state.count === 0) {
      // neu ham true la co ham du lieu
      if (this.CountdownClass) {
        // thoat khoi ham vong lap interval
        clearInterval(this.CountdownClass);
        //this.props.alertCountDown();
      }
    }
  }
  render() {
    return (
      <div>
        <p>Countdown width ClassComponent</p>
        <div>{this.state.count}s</div>
      </div>
    );
  }
}
export { CountDown, ClassCountDown };
