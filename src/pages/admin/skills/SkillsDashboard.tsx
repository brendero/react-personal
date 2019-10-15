import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ISkill } from '../../../utils/types/skill'
import axios from 'axios';
import SkeletonComponent from '../../../components/SkeletonComponent';
import SkillCard from '../../../components/Admin/SkillCard';

interface IState {
  skillsArray: ISkill[];
  isLoading: boolean;
}

export default class SkillsDashboard extends Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = {
      skillsArray: [],
      isLoading: true
    }
  }

  getSkills = () => {
    axios.get('skills')
      .then(res => {
        this.setState({
          skillsArray: res.data,
          isLoading: false
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getSkills();
  }
  render() {
    return (
      <>
        <h1 className="admin-title">Skills</h1>
        <Link to="/admin/skills/add" className="add-new-btn">
          Add New Skill
        </Link>
        {
          this.state.isLoading ? 
          <>
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
          </> :
          this.state.skillsArray.map(skill => (
            <SkillCard 
              key={skill._id}
              id={skill._id}
              content={skill.content}
              title={skill.title}
              image={skill.image}
            />
          ))
        }
      </>
    )
  }
}
