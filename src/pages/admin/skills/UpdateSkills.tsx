import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IProps extends RouteComponentProps<any> {

}

const UpdateSkills: React.FC<IProps> = (props) => {
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

  const submitNewSkill = () => {
    axios.post("skills", skill)
      .then(res => {
        console.log(res.data);
        props.history.push('/admin/skills')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      {
        skill ?
          <div className="admin-form-wrapper">
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

            <button onClick={submitNewSkill}>
              update Skill
            </button>
          </div>
          : null 
      }
    </>
  )
}

export default withRouter(UpdateSkills);
