const reactContainer = document.getElementById('react-container')

const MyContext = React.createContext('defaultValue')

const SomeComponent = () => {
  const foo = React.useContext(MyContext)
  return (
    <h1>{foo}</h1> // <h1>defaultValue<h1>
  )
}





const MyApp = () => (
  // <MyContext.Provider value={'value is foo'}>
    <SomeComponent />
  // </MyContext.Provider>
)

ReactDOM.render(<MyApp />, reactContainer)

/*
  https://medium.com/@dai_shi/a-thought-on-react-context-default-value-fb3283cb5788
*/
