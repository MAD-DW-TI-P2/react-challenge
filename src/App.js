import React from 'react'
import {useReact} from 'react'

// const context = React.createContext({
//   language: 'english',
//   backgroundColor: 'white'
// })



const App = () => {
  // eslint-disable-next-line
  const contextValue = {
    language: 'spanish',
    backgroundColor: 'yellow'
  }


  return (
    <context.Provider value={contextValue}>
      {/* Por qué el lenguaje sigue siendo 'english', en lugar de 'spanish'? */}
      <Button/>
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

export default App