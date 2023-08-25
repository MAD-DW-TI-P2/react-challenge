import React from 'react'

const Page2 = () => {
  const [items, setItems] = React.useState([1, 2, 3])

  const doChange = () => {
    items[0] = 3 
    items[1] = 3
    setItems(items)
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