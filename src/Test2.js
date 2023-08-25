import React from 'react'

const Page2 = () => {
  const [items, setItems] = React.useState([1, 2, 3])

  const doChange = () => {
    alert('hola')
    console.log('1', items)
    items[0] = 3 
    items[1] = 3
    setItems(items)
    console.log('2', items)
  }

  return (
    <div>
      <button onClick={() => doChange()}>
        change items
      </button>
      {/* Por qué no se actualizan los items con los nuevos valores? */}
      <label>
        Items: {items.join(', ')}
      </label>
    </div>
  )
}

export default Page2