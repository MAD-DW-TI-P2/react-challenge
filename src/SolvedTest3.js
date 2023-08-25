import React from 'react'

const context = React.createContext({
    language: 'english',
    backgroundColor: 'white'
})
  
const App = () => {
    // eslint-disable-next-line
    const contextValue = {
      language: 'spanish',
      backgroundColor: 'yellow'
    }
    return (
      <context.Provider value={contextValue}>
        <Button />
        {/*<Button2 language={contextValue.language} />*/}
      </context.Provider>
    )
}

const Button = () => {
    const { language } = React.useContext(context)
    return (
      <button onClick={() => alert(language)}>
        show me your language
      </button>
    )
}

/*
const Button2 = (props) => {
  return (
    <button onClick={() => alert(props.language)}>
      show me your language
    </button>
  )
}
*/


export default App;




