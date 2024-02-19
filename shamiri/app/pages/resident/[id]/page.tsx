import React from 'react'

interface Props{
    params : {id:number}
}

const ResidentDetail = ({params: {id}}:Props) => {
  return (
    <div>
      <p>Resident one{id}</p>
    </div>
  )
}

export default ResidentDetail
