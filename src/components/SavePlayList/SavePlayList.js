import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'

export const SavePlayList = ({ video }) => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        className='btn btn-outline-primary'
        onClick={() => setShow((prev) => !prev)}
      >
        Save
      </button>
      {show && <Modal show={show} setShow={setShow} video={video} />}
    </div>
  )
}
