import React from 'react'

const Page1 = () => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const onMousedown = () => {
      setCount(count + 1)
    }

  }, [])

  window.removeEventListener('mousedown', onMousedown)
  window.addEventListener('mousedown', onMousedown)

  return (
    <label>
      {/* Por qué no se actualiza el contador? */}
      Count: {count}
    </label>
  )
}

export default Page1