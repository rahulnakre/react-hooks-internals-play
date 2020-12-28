import MyReact from "../hooks/MyReact.mjs";

/**
 * just run this example in the CLI
 */
const Counter = () => {
  const [count, setCount] = MyReact.useState(0);

  MyReact.useEffect(() => {
    console.log({ "effect": count });
  }, [count]);

  // return { render: render }
  return {
    click: () => setCount(count + 1),
    noOp: () => setCount(count),
    render: () => console.log('render:', { count })
  }
}

let CounterApp
CounterApp = MyReact.render(Counter) 
// effect: 0
// render: { count: 0 }
CounterApp.click()
CounterApp = MyReact.render(Counter) 
// effect: 1
// render: { count: 1 }
CounterApp.noOp()
CounterApp = MyReact.render(Counter);
// no effect run
// render: { count: 1 }
CounterApp.click()
CounterApp = MyReact.render(Counter)
// effect 2
// render {count: 2}
export default CounterApp;