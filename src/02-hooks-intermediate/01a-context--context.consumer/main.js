const reactContainer = document.getElementById('react-container')

const MyContext = React.createContext('defaultValue')

const SomeComponent = () => (
  <MyContext.Consumer>
    {
      foo => (<h1>{foo}</h1>) // <h1>value is foo<h1>
    }
  </MyContext.Consumer>
)




const MyApp = () => (
  <MyContext.Provider value={'value is foo'}>
    <SomeComponent />
  </MyContext.Provider>
)

ReactDOM.render(<MyApp />, reactContainer)
