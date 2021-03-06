import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { ActivityList } from './ActivityList';
import { ActivityDetails } from '../details/ActivityDetails';
import { ActivityForm } from '../form/ActivityForm';
interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  deleteActivity: (id: string) => void;
}

export const ActivityDashboard: React.FC<IProps> = (props) => {
  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityList
          activities={props.activities}
          selectActivity={props.selectActivity}
          deleteActivity={props.deleteActivity}
        ></ActivityList>
      </GridColumn>
      <GridColumn width={6}>
        {props.selectedActivity && (
          <ActivityDetails
            activity={props.selectedActivity}
            setEditMode={props.setEditMode}
            setSelectedActivity={props.setSelectedActivity}
          ></ActivityDetails>
        )}
        {props.editMode && (
          <ActivityForm
            key={(props.selectedActivity && props.selectedActivity.id) || 0}
            setEditMode={props.setEditMode}
            activity={props.selectedActivity!}
            createActivity={props.createActivity}
            editActivity={props.editActivity}
          ></ActivityForm>
        )}
      </GridColumn>
    </Grid>
  );
};
