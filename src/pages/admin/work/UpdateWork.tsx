import React from 'react'
import { useParams } from 'react-router-dom';

interface IProps {

}

const UpdateWork: React.FC<IProps> = () => {
  const { id } = useParams();
  return (
    <div>
    </div>
  )
}

export default UpdateWork
