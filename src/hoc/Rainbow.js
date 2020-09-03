import React from 'react';

const Rainbow = (WrappedComponent) =>{
  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColours = colours[Math.floor(Math.random() * colours.length)];
  const className = randomColours + '-text';

  return(props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Rainbow;