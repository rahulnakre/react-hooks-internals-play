
const useState1 = (initialValue) => {
  var _val = initialValue

  const state = () => {
    return _val;
  }

  const setState = (newVal) => {
    _val = newVal;
    // console.log({ "state in useState1 hook": _val });
  }

  return [state, setState]
}

export default useState1;