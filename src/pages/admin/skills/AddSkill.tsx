import React, { useState, useCallback, useEffect } from 'react'
import { ISkill } from '../../../utils/types/skill';
import axios from 'axios';
import { withRouter, RouteComponentProps} from 'react-router-dom';
import cloudinaryUpload from '../../../utils/cloudinary';
import { base64Encoding } from '../../../utils/imageService';

interface IProps extends RouteComponentProps<any> {

}

const AddSkill: React.FC<IProps> = (props) => {
  const [newImg, setNewImg] = useState<String>('')
  const [skill, setSkill] = useState<ISkill>({
    title: '',
    content: '',
    image: ''
  })

  const changeState = (event) => {
    const {name, value} = event.target;

    setSkill({
      ...skill,
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

  const submitNewSkill = () => {
    if( newImg !== null) {
      cloudinaryUpload(newImg)
        .then(res => {
          setSkill({
            ...skill,
            image: res.url
          })
        })
        .catch(err => console.log(err))
    } 
  }

  useEffect(() => {
    const setNewSkill = () => {
      if(skill.image !== '') {
        axios.post("skills", skill, { headers: { "Authorization": localStorage.getItem('authToken')}})
        .then(res => {
          props.history.push('/admin/skills')
        })
        .catch(err => console.log(err))
      }
    }
    setNewSkill();
  }, [skill.image])

  return (
    <div className="admin-form-wrapper">
    <label>
      Title:
      <input name="title" value={skill.title} onChange={changeState}/>
    </label>
    <label>
      Content:
      <input name="content" value={skill.content} onChange={changeState}/>
    </label>
    <input type="file" accept="image/png, image/jpeg" onChange={(e) => setImageData(e.target.files)}/>
    <button onClick={submitNewSkill}>
      Add New Skill  
    </button>    
  </div>
  )
}

export default withRouter(AddSkill)
