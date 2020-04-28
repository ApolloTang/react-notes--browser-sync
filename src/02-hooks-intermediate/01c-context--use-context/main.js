const reactContainer = document.getElementById('react-container')

const MyContext = React.createContext('defaultValue')

const SomeComponent = () => {
  const foo = React.useContext(MyContext)
  return (
    <h1>{foo}</h1> // <h1>value is foo<h1>
  )
}





const MyApp = () => (
  <MyContext.Provider value={'value is foo'}>
    <SomeComponent />
  </MyContext.Provider>
)

ReactDOM.render(<MyApp />, reactContainer)

/*
  https://reactjs.org/docs/hooks-reference.html#usecontext
*/
