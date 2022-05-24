import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {
    const test = function (event) {
        console.log("hello")
    }
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
          <input {...getInputProps()} onChange={ test} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}
export default MyDropzone