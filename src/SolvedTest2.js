import React, {useState} from 'react'
// Cambio la forma en la que importo las librerías de React para que sea más fácil de leer
// Si importo muchos puede dificultar su lectura en caso contrario aparece mucho React

function App() {
  const [count, setCount] = useState(0)

  React.useEffect(() => {
    const onMousedown = () => {
      setCount(count + 1)
    }

    window.addEventListener('mousedown', onMousedown)
    // Importante: Eliminar el listener cuando el componente se desmonta, evita fugas de memoria
    // Utiliza la función de limpieza del useEffect para eliminar los event listeners cuando el componente se desmonte.
    return () => {
      // Función de limpieza: remover el event listener cuando el componente se desmonta. Cuando el componente se desmonta, es decir, cuando el efecto debe ser limpiado o deshecho
      window.removeEventListener('mousedown', onMousedown)
    }

  }, [count])
  // Poner el estado que disprarará el efecto en el array de dependencias
  // o quitarlo para que se ejecute una sola vez


  return (
    <label>
      Count: {count}
    </label>
  )
}

export default App;
