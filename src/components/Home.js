import React from 'react';

const Home = (props) => {
    return (
      <div className="home">
        <button onMouseEnter={props.handleMouseEnter}>
          <i
            className={
              props.isShow ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"
            }
          ></i>
        </button>
      </div>
    );
  };
  export default Home;