import {configureStore} from '@reduxjs/toolkit';

import favouriteJobsSlice from './slicer';

export default configureStore({
  reducer: {
    favouriteJobs: favouriteJobsSlice,
  },
});
