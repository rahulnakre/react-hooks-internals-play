

/** 
 * MyReact is a mini React like library i guess?
 * 
 * For useState2 we use the Module pattern (check modulePattern.js)
 * so that we can expose state as a variable, and not a function
 * 
 * Here we create our own mini React library
 */
const MyReact = (function () {
  // holds state and dependencies in scope
  let _val, _deps;

  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },
    
    useState(initialValue) {
      _val = _val || initialValue;
      function setState(newVal) {
        _val = newVal;
      }

      return [_val, setState];
    },

    useEffect(callback, depArray) {
      const hasNoDeps = !depArray;
      // cus we only gotta run the effect when our dependencies change
      const hasChangedDeps = _deps ? !depArray.every((el, i) => el === _deps[i]) : true;
      if (hasNoDeps || hasChangedDeps) {
        callback();
        _deps = depArray
      }

    }

  }
})();

export default MyReact;