import {
  NEW_RESUME,
  UPDATE_RESUME,
} from '../actions/app.actions';
import Resume from '../resume-data';
import { saveResume, loadResume } from '../helpers/resume.helper';

const storedResume = loadResume();
const initialState = {
  ...Resume,
};

const newResume = () => ({ ...Resume });

const updateResume = (state, action) => {
  saveResume(action.resume);
  return {
    ...state,
    ...action.resume,
  };
};

export default (state = storedResume || initialState, action) => {
  switch (action.type) {
    case NEW_RESUME:
      return newResume(state);
    case UPDATE_RESUME:
      return updateResume(state, action);
    default:
      return state;
  }
};
