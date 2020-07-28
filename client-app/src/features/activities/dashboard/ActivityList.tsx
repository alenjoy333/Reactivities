import React from 'react';
import { IActivity } from '../../../app/models/activity';

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export const ActivityList: React.FC<IProps> = (props) => {
  return (
    <div className="ui segment">
      <div className="ui items">
        {props.activities.map((activity: IActivity) => (
          <div className="item" key={activity.id}>
            <div className="content">
              <a className="header" href="#/">{activity.title}</a>
              <div className="meta">{activity.date}</div>
              <div className="description">
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </div>
              <div className="extra">
                <button
                  className="ui blue button right floated"
                  onClick={() => props.selectActivity(activity.id)}
                >
                  View
                </button>
                <button
                  className="ui red button right floated"
                  onClick={() => props.deleteActivity(activity.id)}
                >
                  Delete
                </button>
                <label className="ui label basic">{activity.category}</label>
              </div>
              <div className="ui divider"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
