import React from 'react'

// import { BsFillBootstrapFill } from "react-icons/bs";
import { bindActionCreators } from 'redux'
import { connect} from 'react-redux'
import * as actions from '../actions'


function InfoFiles(props) {

    const  { user } = props

    const onFilterText =()=>{
        const {actions} = props
        const {filterChat} = actions
        filterChat()
    }

    const onFilterImage =()=>{
        const {actions} = props
        const {filterImage} = actions
        filterImage()
    }

    const onFilterVideo =()=>{
        const {actions} = props
        const {filterVideo} = actions
        filterVideo()
    }

    // const onFilterAll =()=>{
    //     const {actions} = props
    //     const {filterAll} = actions
    //     filterAll()
    // }
    
    return (
        <div className={user.name !== null ?  'info' : 'info isNone'}>
            <div className="info__header">
                <div className="info__header__icon">
                    <i className='bx bx-chevron-right'></i>
                </div>
                <div className="info__header__title">
                    <h3>Shared files</h3>
                </div>
            </div>
            <div className="info__user" >
                <div className="info__user__avt">
                    <img src={user.img} alt="" />
                </div>
                <h3>{user.name}</h3>
                {/* <p>
                    <BsFillBootstrapFill />
                </p> */}
            </div>
            <div className="info__share">
                <div className="info__share__files">
                    <p>All files</p>
                    <div className="info__share__files__icon">
                        <i className='bx bxs-folder'></i>
                        <span>231</span>
                    </div>
                </div>
                <div className="info__share__links">
                    <p>All links</p>
                    <div className="info__share__files__icon">
                        <i className='bx bx-link-alt'></i>
                        <span>45</span>
                    </div>
                </div>
            </div>
            <div className="info__allFiles">
                <div className="info__allFiles__heading">
                    <p>Messages type</p>
                    <i className='bx bx-dots-vertical-rounded'></i>
                </div>
                <div className="info__allFiles__content">
                <div className="info__allFiles__content__item" >
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124098.png" alt="" />
                        <div className="info__allFiles__content__item__txt">
                            <h3>All</h3>
                            <span>49 files, 194MB</span>
                        </div>
                        <i className='bx bx-chevron-right'></i>
                    </div>
                    <div className="info__allFiles__content__item" onClick={onFilterText}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991108.png" alt="" />
                        <div className="info__allFiles__content__item__txt">
                            <h3>Text</h3>
                            <span>126 files, 193MB</span>
                        </div>
                        <i className='bx bx-chevron-right'></i>
                    </div>
                    <div className="info__allFiles__content__item" onClick={onFilterImage}>
                        <img src="https://cdn-icons-png.flaticon.com/512/833/833453.png" alt="" />
                        <div className="info__allFiles__content__item__txt">
                            <h3>Photos</h3>
                            <span>53 files, 321MB</span>
                        </div>
                        <i className='bx bx-chevron-right'></i>
                    </div>
                    <div className="info__allFiles__content__item" onClick={onFilterVideo}>
                        <img src="https://cdn-icons-png.flaticon.com/512/777/777242.png" alt="" />
                        <div className="info__allFiles__content__item__txt">
                            <h3>Videos</h3>
                            <span>3 files, 210MB</span>
                        </div>
                        <i className='bx bx-chevron-right'></i>
                    </div>            
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        user : state.user
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {    
        actions : bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InfoFiles)

