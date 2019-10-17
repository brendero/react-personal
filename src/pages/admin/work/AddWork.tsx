import React, { useState } from 'react'
import { IWork } from '../../../utils/types/work'
import axios from 'axios';
import { withRouter, RouteComponentProps} from 'react-router-dom';
import cloudinaryUpload from '../../../utils/cloudinary';
import { base64Encoding } from '../../../utils/imageService';

interface IProps extends RouteComponentProps<any> {

}

const AddWork: React.FC<IProps> = (props) => {
  const [newImg, setNewImg] = useState<String>('')
  const [work, setWork] = useState<IWork>({
    name: '',
    url: '',
    image: ''
  })

  const changeState = (event) => {
    const {name, value} = event.target;

    setWork({
      ...work,
      [name]: value
    })
  }

  const setImageData = (event) => {
    const file = event[0];

    base64Encoding(file)
      .then(res => {
        setNewImg(res);
      })
      .catch(err => console.log(err))
  }

  const submitNewWork = () => {
    if( newImg !== null) {
      console.log(newImg)
      cloudinaryUpload(newImg)
        .then(res => {
          setWork({
            ...work,
            image: res
          })

          axios.post("work", work, { headers: { "Authorization": localStorage.getItem('authToken')}})
            .then(res => {
              props.history.push('/admin/work')
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    } else {
      axios.post("work", work, {headers: { "Authorization": localStorage.getItem('authToken') }})
      .then(res => {
        props.history.push('/admin/work')
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <div className="admin-form-wrapper">
    <label>
      name:
      <input name="name" value={work.name} onChange={changeState}/>
    </label>
    <label>
      url:
      <input name="url" value={work.url} onChange={changeState}/>
    </label>
    <input type="file" accept="image/png, image/jpeg" onChange={(e) => setImageData(e.target.files)}/>
    <button onClick={submitNewWork}>
      Add New Work  
    </button>    
  </div>
  )
}

export default withRouter(AddWork)
