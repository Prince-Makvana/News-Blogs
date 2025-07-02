import React from 'react'

const Loading = () => {
  return (
    <div className='text-center position-fixed mx-auto my-5 z-3 container'>
      <img src={"loading.gif"} alt="" height={100} />
    </div>
  )
}

export default Loading
