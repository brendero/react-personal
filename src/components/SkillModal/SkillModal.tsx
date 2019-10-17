import React, { Component } from 'react'

interface IProps {
  skill: any;
  hidden: boolean;
  toggleModule(skill: any, hidden: boolean): void;
}

export default class SkillModal extends Component<IProps> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="module" style={this.props.hidden ? {display: "flex"} : {display: "none"}}>
          <div className="module-content">
          {
            this.props.skill ?
              <>
              <a className="closing-button" onClick={() => this.props.toggleModule(null, this.props.hidden)}><i className="fa fa-times"></i></a>
              <div className="skills-detail-header">
                  <img src={this.props.skill.image} alt="{{ skill.tag }} Logo" />
                  <h1>{ this.props.skill.title }</h1>
              </div>
              <p>
                  { this.props.skill.content }
              </p>
              </>
              : null
            }
          </div>
      </div>
    )
  }
}
