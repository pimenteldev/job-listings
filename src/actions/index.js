import {
    GET_LIST_JOBS_BY_ID,
    GET_LIST_JOBS_BY_TAG,
    SET_LIST_DATA,
    CLEAR_LIST_BY_TAGS,
    GET_LIST_OF_TAGS,
    REMOVE_TAG_BY_TAGS,
    GET_JOB_BY_ID
  } from "./actionTypes";

export const getListJobsById = () => {
    return {
      type: GET_LIST_JOBS_BY_ID,
    };
};

export const getListJobsByTags = () => {
    return {
      type: GET_LIST_JOBS_BY_TAG,
    };
};  
export const setListData = () => {
    return {
      type: SET_LIST_DATA,
    };
}; 

export const clearListByTags = () => {
  return {
    type: CLEAR_LIST_BY_TAGS,
  };
}; 

export const getListOfTags = () => {
  return {
    type: GET_LIST_OF_TAGS,
  };
}; 

export const removeTagByTags = () => {
  return {
    type: REMOVE_TAG_BY_TAGS,
  };
}; 

export const getJobById = () => {
  return {
    type: GET_JOB_BY_ID,
  };
}; 