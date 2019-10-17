import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IWork } from '../../../utils/types/work';
import SkeletonComponent from '../../../components/SkeletonComponent';
import WorkCard from '../../../components/Admin/WorkCard';

interface IState {
  workArray: IWork[];
  isLoading: boolean;
}

export default class WorkDashboard extends Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = {
      workArray: [],
      isLoading: true
    }
  }
  getWork = async () => {  
    axios.get('work')
      .then(res => {
        this.setState({
          workArray: res.data,
          isLoading: false
        })
      })
      .catch(err => console.log(err))
  }
  deleteWork = async(id) => {
    axios.delete(`work/${id}`,{ headers: { "Authorization": localStorage.getItem('authToken') }})
      .then(res => {
        this.setState({
          workArray: this.state.workArray.filter(work => work._id !== id)
        })
      })
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.getWork();
  }
  render() {
    return (
      <>
        <h1 className="admin-title">Works</h1>
        <Link to="/admin/work/add" className="add-new-btn">
          Add New Work  
        </Link>
        {
          this.state.isLoading ?
          <>
            <SkeletonComponent />
            <SkeletonComponent />
            <SkeletonComponent />
          </> :
          this.state.workArray.map(work => (
            <WorkCard
              key={work._id}
              id={work._id}
              title={work.name}
              content={work.url}
              image={work.image}
              deleteWorkItem={() => this.deleteWork(work._id)}
            />
          ))
        }
      </>
    )
  }
}
