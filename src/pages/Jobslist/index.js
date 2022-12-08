import React from 'react'
import './index.css'
import {ThemeContext} from '../../contexts/theme'
import { useContext } from 'react'
import {Link, Outlet} from 'react-router-dom'
import BarSelect from '../../components/BarSelect'

function index (props) {
    const [{ themeName }] = useContext(ThemeContext)
    const {data, orderbytag} = props
    
    return (<>
    <BarSelect themeName={props.themeName} clearTags={props.clearTags} getListOfTags={props.getListOfTags}  tags={props.tags} removeTagByTags={props.removeTagByTags}/>
    <ul className='content_list'>
        {
            data && 
            data.map(job => 
            <li 
                className={'card_job card_job_' + themeName} 
                key={job.id}>
                <figure>
                    <img src={job.logo} alt={job.company} width="70px" height="70px" className="img_list" />
                </figure>
                <div className='body_card_job'>
                    <Link to={"/job/"+job.id} className='body_card_job_left'>
                        <div className='group_top'>
                            <span className='job_company'>{job.company}</span>
                            { job.new && (<span className='job_new'>NEW!</span>)}
                            { job.featured && (<span className='job_featured'>FEATURED</span>)}
                        </div>
                        <div className={'job_position job_position_' + themeName}>{job.position}</div>
                        <div className='group_bottom'>{job.postedAt} <strong className='strong'>.</strong> {job.contract} <span className='strong'><strong>.</strong></span> {job.location}</div>
                    </Link>
                    <div className='items_list'><span className='item' onClick={()=>orderbytag(job.role)}>{job.role}</span> <span className='item' onClick={()=>orderbytag(job.level)}>{job.level}</span>{job.languages && job.languages.map((language,index) => (<span key={index} className='item' onClick={()=>orderbytag(language)}>{language}</span>))} {job.tools && job.tools.map((tool,index) => (<span key={index} className='item' onClick={()=>orderbytag(tool)}>{tool}</span>))}</div>
                </div>
                <Outlet key={job.id}/>
            </li>
            
            )
        }
        </ul>
        
    </>)
}


export default index