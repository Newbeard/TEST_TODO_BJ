import {INIT_TASK } from '../types'
import axios from "axios";

export const initTask = (task) => ({
  type: INIT_TASK,
  payload: task
})

export const initTaskFromServer = () => async (dispatch) => {
  try {
    const { data } = await axios('/task')
    data.page = 1
    dispatch(initTask(data))
  } catch (error) {
    console.log(error);
  }
}

export const pageTaskFromServer = (payload) => async (dispatch) => {
  try {
    const { data } = await axios.post('/task/page',payload)
    data.page = payload.page
    dispatch(initTask(data))
  } catch (error) {
    console.log(error);
  }
}

export const filterTaskFromServer = (payload) => async (dispatch) => {
  try {
    const { data } = await axios.post('/task', payload)
    dispatch(initTask(data))
  } catch (error) {
    console.log(error);
  }
}
