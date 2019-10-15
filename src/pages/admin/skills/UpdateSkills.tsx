import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface IProps {

}

const UpdateSkills: React.FC<IProps> = () => {
  const [skill, setSkill] = useState();
  const { id } = useParams();
  
  const changeState = (event) => {
    const { name, value } = event.target;

    setSkill({
      ...skill,
      [name]: value
    });
  }

  useEffect(() => {
    const fetchSkill = async() => {
      axios.get(`skills/${id}`)
        .then(res => {
          setSkill(res.data);
        })
        .catch(err => console.log(err))
    }

    fetchSkill();
  }, [id])

  return (
    <>
      {
        skill ?
          <>
            <label>
              title:
              <input name="title" value={skill.title} onChange={changeState}/>
            </label>
            <label>
              content:
              <input name="content" value={skill.content} onChange={changeState} />
            </label>
            <img src={skill.image} />
            <input type="file" accept="image/png, image/jpeg"/>
          </>
          : null 
      }
    </>
  )
}

export default UpdateSkills
