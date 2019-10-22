import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  id?: string;
  title: string;
  content: string;
  image: string;
  deleteWorkItem: () => {};
}

const WorkCard: React.FC<IProps> = ({id, title, content, image, deleteWorkItem}) => {
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
        <button className="delete-btn" onClick={deleteWorkItem}>
          <i className='fa fa-times'/>
        </button>
      </div>
  </div>
  )
}

export default WorkCard;
