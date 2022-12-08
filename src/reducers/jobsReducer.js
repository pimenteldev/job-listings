 import {
    GET_LIST_JOBS_BY_ID,
    GET_LIST_JOBS_BY_TAG,
    SET_LIST_DATA,
    CLEAR_LIST_BY_TAGS,
    REMOVE_TAG_BY_TAGS,
    GET_JOB_BY_ID
  } from "../actions/actionTypes";
import {initialState} from './initialState'

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_JOBS_BY_ID:
            return { ...state }
        case GET_LIST_JOBS_BY_TAG:{
            let list = []

            if(state.tags.length!==0){
                list = state.listByTag
            }else{
                list = state.jobs
            }

            const tags = state.tags.filter(tag => !tag.includes(action.payload))
            tags.push(action.payload)

            const newSetListFilter = filterJobsByLanguages(list,tags,['languages','role','level','tools'])
            return {...state, listByTag: newSetListFilter, tags:tags};
        }
        case SET_LIST_DATA:
            return { ...state, jobs: action.payload }
        case CLEAR_LIST_BY_TAGS:
            return { ...state, listByTag: [], tags:[] }
        case REMOVE_TAG_BY_TAGS: {
            const tagsList = state.tags.filter(tag => tag!==action.payload)    
            let list =state.jobs

            const newSetListFilterAfterRemoveTag = filterJobsByLanguages(list,tagsList,['languages','role','level','tools'])
            return { ...state, listByTag: newSetListFilterAfterRemoveTag, tags:tagsList }
        }
        case GET_JOB_BY_ID: {
            
            const job_details = state.jobs.filter(job => job.id === parseInt(action.payload))
            return { ...state, job_details:job_details }
        }
      default:
        return state;
    }
  };
export default jobsReducer;




function filterJobsByLanguages(listJobs, tags, fields) {
    let arrayValid = []
    for (let job of listJobs) {
        let valido = []
        let contador = 0
        for (let tag of tags) {
            contador = contador + 1 
            for (let field of fields) {
                
                if(job[field].includes(tag)){
                    valido = [...valido, true]
                }
                
            }
            
        }
        console.log(contador)
        if(contador===valido.length){
            arrayValid.push(job)
        }
        
        
    }
    return [...new Set(arrayValid.flat())]
}