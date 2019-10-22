import React, { useState, useEffect } from 'react'
import { useParams, RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';

interface IProps extends RouteComponentProps<any> {

}

const UpdateWork: React.FC<IProps> = (props) => {
  const [work, setWork] = useState();
  const { id } = useParams();

  const changeState = (event) => {
    const { name, value } = event.target;
    
    setWork({
      ...work,
      [name]: value
    })
  }
  useEffect(() => {
    const fetchWork = () => {
      axios.get(`work/${id}`, { headers: {"Authorization": `${localStorage.getItem("authToken")}`}})
        .then(res => {
          setWork(res.data);
        }) 
        .catch(err => console.log(err))
    }

    fetchWork();
  }, [id])
  
  const submitNewWork = () => {
    axios.post("work", work, {headers: { "Authorization": localStorage.getItem('authToken') }})
      .then(res => {
        props.history.push('/admin/work')
      })
      .catch(err => console.log(err))
  }
  return (
    <>
    {
      work ?
        <div className="admin-form-wrapper">
          <label>
            name:
            <input name="name" value={work.name} onChange={changeState}/>
          </label>
          <label>
            url:
            <input name="url" value={work.url} onChange={changeState}/>
          </label>
          <img src={work.image} />

          <button onClick={submitNewWork}>
            Update Work  
          </button>    
        </div>
        : null
    }
    </>
  )
}

export default withRouter(UpdateWork)
