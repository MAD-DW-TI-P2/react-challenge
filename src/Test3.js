import React from 'react'

const context = React.createContext({
  language: 'english',
  backgroundColor: 'white'
})

const Page3 = () => {
  // eslint-disable-next-line
  const contextValue = {
    language: 'spanish',
    backgroundColor: 'yellow'
  }

  const { language } = React.useContext(context)

  return (
    <context.Provider value={contextValue}>
      {/* Por qué el lenguaje sigue siendo 'english', en lugar de 'spanish'? */}
      <button onClick={() => alert(language)}>
        show me your language
      </button>
    </context.Provider>
  )
}

export default Page3