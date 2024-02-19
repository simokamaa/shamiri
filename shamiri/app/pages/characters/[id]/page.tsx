import React from 'react'

interface Props{
    params : {id:number}
}

const page = ({params: {id}}:Props) => {
  return (
    <div>
      <p>Character one{id}</p>
    </div>
  )
}

export default page
