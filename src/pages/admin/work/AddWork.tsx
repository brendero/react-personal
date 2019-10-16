import React, { useState } from 'react'
import { IWork } from '../../../utils/types/work'
import axios from 'axios';
import { withRouter, RouteComponentProps} from 'react-router-dom';

interface IProps extends RouteComponentProps<any> {

}

const AddWork: React.FC<IProps> = (props) => {
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

  const submitNewWork = () => {
    axios.post("work", work, {headers: { "Authorization": localStorage.getItem('authToken') }})
    .then(res => {
      props.history.push('/admin/work')
    })
    .catch(err => console.log(err))
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
    <input type="file" accept="image/png, image/jpeg"/>
    <button onClick={submitNewWork}>
      Add New Work  
    </button>    
  </div>
  )
}

export default withRouter(AddWork)
