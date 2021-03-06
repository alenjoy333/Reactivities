import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import { Navbar } from '../../features/nav/Navbar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter((a) => a.id === id)[0]);
    setEditMode(false);
  };

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  const handleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter((item) => item.id !== id)]);
  };

  const handleEditActivity = (activity: IActivity) => {
    setActivities([
      ...activities.filter((a) => a.id !== activity.id),
      activity,
    ]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  useEffect(() => {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        let activities = [];
        response.data.forEach((item) => {
          item.date = item.date.split('.')[0];
          activities.push(item);
        });
        setActivities(response.data);
      });
  }, []);

  return (
    <Fragment>
      <Navbar createActivity={handleOpenCreateForm}></Navbar>
      <div className="ui container" style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity!}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          createActivity={handleCreateActivity}
          editActivity={handleEditActivity}
          deleteActivity={handleDeleteActivity}
        ></ActivityDashboard>
      </div>
    </Fragment>
  );
};

export default App;
