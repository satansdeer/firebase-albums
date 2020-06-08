import React, {useState} from 'react'
import firebase from 'firebase'
import {app} from './base'

const db = app.firestore()
const storage = app.storage();

export const NewPhoto = ({currentAlbum}) => {
  const [file, setFile] = useState(null)

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const onUpload = async () => {
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    db.collection("albums").doc(currentAlbum).update({
      images: firebase.firestore.FieldValue.arrayUnion({
        name: file.name,
        url: await fileRef.getDownloadURL()
      })
    })
  }

  return <>
    <input type="file" onChange={onFileChange}/>
    <button onClick={onUpload}>Upload image</button>
  </>
}