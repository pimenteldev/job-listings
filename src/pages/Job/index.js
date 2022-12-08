import React,{useEffect} from 'react'
import {useParams, Link, Outlet} from 'react-router-dom'
import './index.css'
import { useSelector, useDispatch } from "react-redux"
import {GET_JOB_BY_ID,SET_LIST_DATA} from '../../actions/actionTypes'
import {data} from '../../Data/data'

function index () {
    let {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        // fetch('dataID.json')
        //     .then((response) => {
        //         return response.json()
        //     })
        //     .then((data) => {
        //         dispatch({
        //             type: SET_LIST_DATA,
        //             payload: data
        //         })
        //         console.log(data.length)
        //     })
        //     .catch((e) => {
        //         console.log("Hubo un error"+ e)
        //     })
        dispatch({
            type: SET_LIST_DATA,
            payload: data
        })
    }, [])

    const job = useSelector((state) => {
        return state.jobsReducer.job_details
    })
    

    useEffect(() => {
        dispatch({
          type: GET_JOB_BY_ID,
          payload: id
        })
        
    }, [dispatch])
    
    console.log(job)

    return (<>
        <div className='content_job_page'>
            <div className='back_job_details'>
                <Link to="/" className='btn_back_job'> {'<--'} Back</Link> 
            </div>
            {
                job && job.map(job=>
                    <div className='job_details' key={job.id}>
                            <figure>
                                <img src={'.'+job.logo} alt={job.company} width="100px" height="100px" className="job_details_img" />
                            </figure>
                            <div className='job_details_body'>
                                <div className='job_details_body_left'>
                                    <div className='job_details_group_top'>
                                        <span className='job_details_job_company'>{job.company}</span>
                                        { job.new && (<span className='job_details_job_new'>New!</span>)}
                                        { job.featured && (<span className='job_details_job_featured'>Featured</span>)}
                                    </div>
                                    <div className={'job_details_job_position job_details_job_position_' }>{job.position}</div>
                                    <div className='job_details_group_bottom'>{job.postedAt} <strong className='strong'>.</strong> {job.contract} <span className='strong'><strong>.</strong></span> {job.location}</div>
                                </div>
                                <div className='job_details_items_list'><span className='item'>{job.role}</span> <span className='item' >{job.level}</span>{job.languages && job.languages.map((language,index) => (<span key={index} className='item'>{language}</span>))} {job.tools && job.tools.map((tool,index) => (<span key={index} className='item'>{tool}</span>))}</div>
                            </div>
                        
                    </div>
                )  
            }
            
           
            <Outlet />
        </div>
    </>)
}

export default index