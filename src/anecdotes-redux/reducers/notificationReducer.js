import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notification',
    initialState: 'notification text',
    reducers: {

    }
});

// export const { filterChange } = notificationSlice.actions;
export default notificationSlice.reducer;