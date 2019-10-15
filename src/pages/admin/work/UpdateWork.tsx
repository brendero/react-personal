import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface IProps {

}

const UpdateWork: React.FC<IProps> = () => {
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
      axios.get(`work/${id}`)
        .then(res => {
          setWork(res.data);
        }) 
        .catch(err => console.log(err))
    }

    fetchWork();
  }, [id])
  
  return (
    <>
    {
      work ?
        <>
          <label>
            name:
            <input name="name" value={work.name} onChange={changeState}/>
          </label>
          <label>
            url:
            <input name="url" value={work.url} onChange={changeState}/>
          </label>
          <img src={work.image} />
        </>
        : null
    }
    </>
  )
}

export default UpdateWork
