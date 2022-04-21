import {INIT_TASK } from '../types'
import axios from "axios";

export const initTask = (task) => ({
  type: INIT_TASK,
  payload: task
})

export const initTaskFromServer = () => async (dispatch) => {
  try {
    const { data } = await axios('/task')
    dispatch(initTask(data))
  } catch (error) {
    console.log(error);
  }
}

export const filterTaskFromServer = (payload) => async (dispatch) => {
  try {
    const { data } = await axios.post('/search', payload)
    dispatch(initTask(data))
  } catch (error) {
    console.log(error);
  }
}
