import React, { Component } from 'react'
import { IWork } from '../../utils/types/work';
import axios from 'axios';

export default class PortfolioWork extends Component<{},{workArray: IWork[]}> {
  constructor(props) {
    super(props);

    this.state = {
      workArray: []
    }
  }
  getWork = async () => {  
    axios.get('work')
      .then(res => {
        this.setState({
          workArray: res.data
        })
        console.log(res);
      })
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.getWork();
  }
  render() {
    return (
      <div className="portfolio-wrapper">
        <h1>My work</h1>
        <div className="work-wrapper">
          {
            this.state.workArray ?
            this.state.workArray.map(work => (
              <div key={work._id} style={{backgroundImage: `url(${work.image})`}}>
                <a href={work.url} target="_blank">{ work.name }</a>
              </div>
            ))
            : null
          }
        </div>
      </div>
    )
  }
}
