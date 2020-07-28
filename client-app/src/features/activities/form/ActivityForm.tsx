import React, { useState, FormEvent } from 'react';
import { IActivity } from '../../../app/models/activity';
import { v4 as uuid } from 'uuid';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
}
export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
  createActivity,
  editActivity,
}) => {
  const initializeForm = () => {
    if (!initialFormState) {
      return {
        title: '',
        description: '',
        category: '',
        date: '',
        city: '',
        venue: '',
        id: '',
      };
    } else {
      return initialFormState;
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = event.currentTarget;
    setActivity({ ...activity, [name]: event.currentTarget.value });
  };

  let handleSubmit = (event:any) => {
    event.preventDefault();
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <input
            onChange={handleInputChange}
            placeholder="Title"
            value={activity.title}
            name="title"
          />
        </div>
        <div className="field">
          <textarea
            placeholder="Tell us more about you..."
            rows={2}
            value={activity.description}
            name="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="field">
          <input
            placeholder="Category"
            value={activity.category}
            name="category"
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <input
            type="datetime-local"
            placeholder="Date"
            value={activity.date}
            name="date"
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <input
            placeholder="City"
            value={activity.city}
            name="city"
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <input
            placeholder="Venue"
            value={activity.venue}
            name="venue"
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="ui button  positive floated right">
          Submit
        </button>
        <button
          type="submit"
          className="ui button  floated right"
          onClick={() => setEditMode(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
