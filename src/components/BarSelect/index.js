import React from 'react'
import './index.css'

function index (props) {
    const {tags} = props
    return (
        <>
        {
            tags.length>0 ? <><div className='bar_select'>
                <div className={'bar_select_flex bar_select_flex_'+props.themeName}>
                    <div className='list_tags'>
                    {
                        tags.map(tag => {
                            return(
                                <span key={tag} className='tags_select'><div>{tag}</div> <span className='tags_select_x' onClick={()=>props.removeTagByTags(tag)}>X</span></span>
                            )
                            
                        })
                    }
                    </div>
                    <button className={"btn_cleartags btn_cleartags_"+props.themeName} onClick={props.clearTags}>Clear</button>
                </div>
                
            </div></>:<></>
        }
        </>
    )
}

export default index