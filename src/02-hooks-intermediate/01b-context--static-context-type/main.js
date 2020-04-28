const reactContainer = document.getElementById('react-container')

const MyContext = React.createContext('defaultValue')

class SomeComponent extends React.Component {
  render() {
    const foo = this.context
    return(
      <h1>{foo}</h1>  // <h1>value is foo<h1>
    )
  }
}
SomeComponent.contextType = MyContext


const MyApp = () => (
  <MyContext.Provider value={'value is foo'}>
    <SomeComponent />
  </MyContext.Provider>
)

ReactDOM.render(<MyApp />, reactContainer)
