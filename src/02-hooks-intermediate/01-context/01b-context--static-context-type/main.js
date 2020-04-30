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

/*
  'static Class.contextType' was introduced on React v16.6.0 [1][2] because
  the Context.Consumer method was problematic on class
  components when working with 'render prop API' [3]

  Ref:
  [1] https://reactjs.org/blog/2018/10/23/react-v-16-6.html#static-contexttype
  [2] https://stackoverflow.com/questions/54283509/react-context-context-consumer-vs-class-contexttype
  [3] https://reactjs.org/docs/render-props.html
*/
