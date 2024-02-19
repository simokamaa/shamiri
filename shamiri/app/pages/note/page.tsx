import React from 'react'
import NoteIndex from '.'
import { Button } from '@radix-ui/themes'

function NotePage() {
  return (
    <div>
        <NoteIndex/>
        <Button>Search</Button>
    </div>
  )
}

export default NotePage