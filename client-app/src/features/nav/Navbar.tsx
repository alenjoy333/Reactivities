import React from 'react';

interface IProps {
  createActivity: () => void;
}
export const Navbar: React.FC<IProps> = (props) => {
  return (
    <div className="ui inverted top fixed menu">
      <div className="ui container">
        <a className="active item" href="#/">
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: 10 }}
          ></img>
          Reactivities
        </a>
        <a className="item" href="#/">Activities</a>
        <div className="item">
          <button
            className="ui positive button"
            onClick={() => props.createActivity()}
          >
            Create Activity
          </button>
        </div>
      </div>
    </div>
  );
};
