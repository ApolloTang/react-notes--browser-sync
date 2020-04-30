const reactContainer = document.getElementById('react-container')


const Child = () => {
  const baz = React.useRef(0) // reference to baz is persist across each render
  let poo = 0                 // each render poo is recreated

  return(
    <>
      <div>baz.current: {baz.current++}</div>
      <div>poo: {poo++}</div>
    </>
  )
}




const MyApp = () => {
  let [foo, set_foo] = React.useState(true)

  return(
    <>
      <button onClick={() => { set_foo(!foo) }}>render</button>
      <Child />
    </>
  )
}

ReactDOM.render(<MyApp />, reactContainer)

/*

*/
