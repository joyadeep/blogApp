import React from 'react'

interface Iupload{
    handleUpload?:(event:any)=>void;
}
const Imageupload:React.FC<Iupload> = ({handleUpload}) => {

 

  return (
    <input type="file" accept='image/*' name='image'  onChange={handleUpload} />
  )
}

export default Imageupload