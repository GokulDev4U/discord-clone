import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../features/channelReducer";

export const store = configureStore({
  reducer: {
    channel: channelReducer,
  },
});
