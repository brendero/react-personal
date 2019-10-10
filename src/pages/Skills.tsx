import React, { Component } from 'react'
import SkillModal from '../components/SkillModal/SkillModal'
import { ISkill } from '../utils/types/skill';
import axios from 'axios';

export default class Skills extends Component<{}, {modalVisible: boolean, activeSkill: any, skillsArray: ISkill[]}> {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      activeSkill: null,
      skillsArray: []
    }
  }
  toggleModule = (skill, visible) => {
    this.setState({
      activeSkill: skill,
      modalVisible: !visible
    })
  }

  getSkills = async () => {
    axios.get('skills')
      .then(res => {
        this.setState({
          skillsArray: res.data
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
        <div>
          <h1 className="skills-title">Skills</h1>
          <div className="skills-wrapper">
          {
            this.state.skillsArray ?
            this.state.skillsArray.map(skill => (
                <img src={skill.image} alt={`${skill.title} Logo`} onClick={() => this.toggleModule(skill, this.state.modalVisible)} key={skill._id}/>
            )) :
            null 
          }
          </div>
        </div>

        <SkillModal skill={this.state.activeSkill} hidden={this.state.modalVisible} toggleModule={this.toggleModule}/>
      </>
    )
  }
}