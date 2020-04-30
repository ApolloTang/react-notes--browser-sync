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

/*
  'Context.Consumer' is deprecated in favour of 'static Class.contextType' [1][2] because
  the Context.Consumer method was problematic on class
  components when working with 'render prop API' [3]

  Ref:
  [1] https://reactjs.org/blog/2018/10/23/react-v-16-6.html#static-contexttype
  [2] https://stackoverflow.com/questions/54283509/react-context-context-consumer-vs-class-contexttype
  [3] https://reactjs.org/docs/render-props.html
*/
