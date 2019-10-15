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
  componentDidMount() {
    this.getWork();
  }
  render() {
    return (
      <>
        <h1>Works</h1>
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
            />
          ))
        }
      </>
    )
  }
}
