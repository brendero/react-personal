import React from 'react'
import {Link} from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <Link to="/admin/work" className="dashboard-link">
        Work
      </Link>
      <Link to="/admin/skills" className="dashboard-link">
        Skills
      </Link>
    </>
  )
}

export default Dashboard;