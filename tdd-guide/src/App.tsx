import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { Heading } from "./Heading"

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

// function App() {
//   return (
//     <div className="container">
//       <Heading />
//       <Counter label={"Current"}/>
//     </div>
//   );
// }
class App extends React.Component<object, CounterState> {
  readonly state: CounterState = initialState;

  increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    this.setState({ count: this.state.count + inc });
  };
  render() {
      return (
        <div>
          <Heading />
          <Counter
            label={`Current`}
            count={this.state.count}
            onCounterIncrease={this.increment}
          />
        </div>
      );
    }
}

export default App;
