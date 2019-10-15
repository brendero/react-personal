import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  id: string;
  title: string;
  content: string;
  image: string;
}

const WorkCard: React.FC<IProps> = ({id, title, content, image}) => {
  return (
    <div className="card-wrapper">
      <img src={image}/>
      <div>
        <h2 className="card-title">{title}</h2>
        <a href={content} target="_blank">{content}</a>
      </div>
      <div className="edit-wrapper">
        <Link to={`/admin/work/${id}`} >
          <i className="fa fa-pencil" />
        </Link>
      </div>
  </div>
  )
}

export default WorkCard;
