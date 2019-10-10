import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  id: string;
  title: string;
  content: string;
  image: string;
}

const SkillCard: React.FC<IProps> = ({id, title, content, image}) => {
  return (
    <div className="card-wrapper">
      <img src={image}/>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="edit-wrapper">
        <Link to={`/admin/skills/${id}`} >
          <i className="fa fa-pencil" />
        </Link>
      </div>
  </div>
  )
}

export default SkillCard;