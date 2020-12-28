import React from "react";
import CounterApp from "./components/Counter.mjs";
import useState1 from "./hooks/useState1";

const App = () => {
  // have to access `foo()` like that cus its a function
  const [foo, setFoo] = useState1(0);

  const onClickHandler = () => {
    setFoo(foo() + 1);
    console.log({ "foo() in App": foo() });
  }

  return (
    <>
      <div> 
        <p>
          Foo: {foo()}
        </p>
        <button onClick={onClickHandler}>
          set foo
        </button>
      </div>
      {/* <CounterApp /> */}
    </>
  );
}

export default App;
