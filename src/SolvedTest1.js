import React, {useState} from 'react'

function App() {

  const [items, setItems] = useState([1, 2, 3])

  const doChange = () => {
    // El problema es cómo React gestiona las actualizaciones de estado y la inmutabilidad de los datos. Paradigma funcional...
    //React compara las referencias de los estados anteriores y los estados nuevos para determinar si ha habido algún cambio. Si la referencia del estado no cambia, React puede no reconocer los cambios internos en los datos. De esta forma si detecta los cambios.
    const newItems = [...items]; // Crear una copia del array, operador spread
    newItems[0] = 3;
    newItems[1] = 3;
    setItems(newItems)
  }

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 16 }}>

      <button onClick={doChange}>
        change items
      </button>
      {/* Por qué no se actualizan los items con los nuevos valores? */}
      <label>
        Items: {items.join(', ')}
      </label>
    </div>
  )
}

export default App;
