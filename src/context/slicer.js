import {createSlice} from '@reduxjs/toolkit';

const favouriteJobsSlice = createSlice({
  name: 'favouriteJobs',
  initialState: [],
  reducers: {
    addJob: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(id, title, company, city, level) {
        return {
          payload: {
            id,
            title,
            company,
            city,
            level,
          },
        };
      },
    },
    removeJob: (state, action) =>
      state.filter(it => it.id != action.payload.id),
  },
});

export default favouriteJobsSlice.reducer;
export const {addJob, removeJob} = favouriteJobsSlice.actions;
