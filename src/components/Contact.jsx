import React, { useState } from 'react'

import user from '../assets/images/avt.jpg'

import { connect} from 'react-redux'
import * as all from '../actions'

function Contact(props) {
    const onView = (item,index) => {
        props.View(item,index)
    }
    
    const loadUsers = (items) => {
        let HTML = null
        
        HTML = items.map((item, index) => {
            var desc = null
            var end = item.chatroom1.length 
                item.chatroom1.forEach((product,index) =>{
                    if(end-1 ===index){
                        desc = product.content
                    }
                })
        
            return (
                <div className="contact__friends__list__item" key={index} onClick={() =>onView(item,item.id)}>
                    <img src={item.img} alt=""  />
                    <div className="contact__friends__list__item__content">
                        <h3>{item.name}</h3>
                        <p>{desc}</p>
                    </div>
                    <span>{item.time}</span>
                </div>  
            )
        })
        return HTML
    }

    const [showForm, setShowFrom] = useState(false)

    const showFormInput = () => {
        return setShowFrom(!showForm)
    }

    const [keyWord, setKeyWord] = useState('')

    const onChange = (e) => {
        setKeyWord ({
            keyWord: e.target.value
        }) 
        
    }

    const handleAdd = (name) => {
        // let check = null
        props.addGroup(name)

        setKeyWord ({
            keyWord: ''
        })
        // if (check === null){
        //     props.addGroup(name);
        //         check = true
        // }
        // if (check === true){
        //     keyWord({
        //         name: "",
        //     });
        // }
    }
    
    return (
        <div className="contact">
            <div className="contact__header">
                <div className="contact__header__icon">
                    <i className='bx bx-chevron-left'></i>
                </div>
                <div className="contact__header__title">
                    <h3>Chat</h3>
                </div>
            </div>
            <div className="contact__user" >
                <div className="contact__user__icon">
                    <i className='bx bxs-cog'></i>
                </div>
                <div className="contact__user__avt">
                    <img src={user} alt="" />
                    {/* <i className='bx bxs-circle icon'></i> */}
                </div>
                <h3>Bùi Nghiêm Trang</h3>
                <div className="contact__user__main">
                    <button>
                        avilable
                        <i className='bx bx-chevron-down'></i>
                    </button>
                </div>
            </div>
            <form className="contact__search">
                <input type="text" placeholder="Search"/>
                <label>
                    <i className='bx bx-search'></i>
                </label>
            </form>
            <div className="contact__friends">
                <div className="contact__friends__heading">
                    <div className="contact__friends__heading__icon">
                        <p>Last chats</p>
                        <span>
                            <i className='bx bx-plus' onClick={showFormInput}></i>
                            <i className='bx bx-dots-vertical-rounded'></i>
                        </span>
                    </div>
                    <form className={showForm ? "contact__friends__heading__form" : "hidden"}>
                        <div className="simple-search">
                            <input name="keyWord" value={keyWord.keyWord} onChange={onChange} type="text" placeholder="Enter your Group Chat" />
                            <i onClick={() =>handleAdd(keyWord.keyWord)}>Save</i>
                        </div>
                    </form>
                </div>
                <div className="contact__friends__list">
                    {
                        loadUsers(props.data)
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        data : state.data
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        View : (item,index)=>{
            dispatch(all.View(item,index))
        },
        addGroup : (name) => {
            dispatch(all.addGroup(name))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact)
