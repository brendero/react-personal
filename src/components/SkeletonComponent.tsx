import React from 'react'

const SkeletonComponent = () => {
  const getRandomWidth = () => {
    const min = 30;
    const max = 70;
    const width = Math.floor(Math.random() * (max - min + 1) + min);

    return width;
  }

  return (
    <div className="skeleton-wrapper">
    <div className="skeleton-img"></div>
    <div className="text-wrapper">
      <div className="skeleton-title" style={{width: `${getRandomWidth()}%`}}></div>
      <div className="skeleton-text" style={{width : `${getRandomWidth()}%`}}></div>
      <div className="skeleton-text" style={{width : `${getRandomWidth()}%`}}></div>
    </div>
  </div>
  )
}

export default SkeletonComponent