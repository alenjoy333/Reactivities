import React from 'react';
import { IActivity } from '../../../app/models/activity';

interface IProps {
  activity: IActivity;
  setEditMode: (editmode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
}

export const ActivityDetails: React.FC<IProps> = (props) => {
  return (
    <div className="ui card fluid">
      <div className="image">
        <img src={`/assets/categoryImages/${props.activity.category}.jpg`}  alt="categoryImage"/>
      </div>
      <div className="content">
        <div className="header">{props.activity.title}</div>
        <div className="meta">
          <span className="date">{props.activity.date}</span>
        </div>
        <div className="description">{props.activity.description}</div>
      </div>
      <div className="extra content">
        <div>
          <div className="ui buttons two">
            <button
              className="ui blue basic button"
              onClick={() => props.setEditMode(true)}
            >
              Edit
            </button>
            <button
              className="ui grey basic button"
              onClick={() => props.setSelectedActivity(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
