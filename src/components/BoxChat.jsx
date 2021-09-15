import React, { useState } from "react";

import { connect } from "react-redux";
import { ChatUser } from "../actions";

function BoxChat(props) {
   
    const value = "";
    const [content, change] = useState(value);
    const onChange = (e) => {
        change({
            content: e.target.value,
        });
    };
    const Chats = (user) => {
        let text = null;
        if (user && user.chatroom1) {
            if (user.chatroom1 !== null) {
                text = user.chatroom1.map((item, index) => {
                    let checkImg = item.content.slice(
                        item.content.length - 4,
                        item.content.length
                    );
                    let checkVideo = item.content.slice(0, 23);
                    if (props.actionsFilter.filterText===true) {
                        user.chatroom1 = user.chatroom1.filter((item) => {
                            let result = null
                            let checkImage = item.content.slice(
                                item.content.length - 4,
                                item.content.length
                            );
                            let checkVideo2 = item.content.slice(0, 23);
                            if ( checkImage === ".jpg" || checkImage === ".png" || checkImage === ".gif" || checkVideo2 ==="https://www.youtube.com") {
                            } 
                            else {  
                                result =  item
                            }
                            return result;
                        });
                    }
                    if (props.actionsFilter.filterImage===true) {
                        user.chatroom1 = user.chatroom1.filter((item) => {
                            let result = null
                            let checkImage = item.content.slice(
                                item.content.length - 4,
                                item.content.length
                            );
                            let checkVideo3 = item.content.slice(0, 23);
                            if ( checkImage === ".jpg" || checkImage === ".png" || checkImage === ".gif" && checkVideo3 === "https://www.youtube.com") {
                                result =  item
                            } 
                            else { 
                            }
                            return result;
                        });
                    }
                    if (props.actionsFilter.filterVideo===true) {
                        user.chatroom1 = user.chatroom1.filter((item) => {
                            let result = null
                            
                            let checkVideo3 = item.content.slice(0, 23);
                            if (checkVideo3 === "https://www.youtube.com") {
                                result =  item
                            } 
                            else { 
                            }
                            return result;
                        });
                    }
                    if (props.actionsFilter.filterAll===true) {
                        return user
                    }
                    var currentContent = null;
                    if ( checkImg === ".jpg" || checkImg === ".png" || checkImg === ".gif") {
                        currentContent = (
                            <img src={item.content} alt={item.content} />
                        );
                    } 
                    else if (checkVideo === "https://www.youtube.com") {
                        currentContent = (
                            <iframe
                                width="100%"
                                height="100%"
                                src={item.content}
                                title={item.content}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        );
                    } 
                    else {
                        currentContent = <p>{item.content}</p>;
                    }
                    if (item.user === "name") {
                        return (
                            <div className="boxchat__content__message__left" key={index}>
                                <img src={user.img} alt="" />
                                <div className="boxchat__content__message__left__content">
                                    {currentContent}
                                    <span>{item.timeAt}</span>
                                </div>
                            </div>
                        );
                    } 
                    else {
                        return (
                            <div className="boxchat__content__message__right" key={index}>
                                <div className="boxchat__content__message__right__content">
                                    {currentContent}
                                    <span>{item.timeAt}</span>
                                </div>
                                <i className="bx bxs-check-circle"></i>
                            </div>
                        );
                    }
                });
            }
        } 
        else {
            return null;
        }
        return text;
    };

    const onSend = () => {
        let check = null;
        const id = props.user.index;
        if (check === null) {
            if (content.length !== 0) {
                props.ChatUser(content, id);
                check = true;
            }
        }
        if (check === true) {
            change({
                content: "",
            });
        }
    };
    return (
        <div className="boxchat">
            <div className="boxchat__heading">
                <div className="boxchat__heading__title">
                    <h3>Box Chat</h3>
                </div>
                <div className="boxchat__heading__button">
                    <button>
                        <i className="bx bxs-video"></i>
                    </button>
                    <button>
                        <i className="bx bx-phone-call"></i>
                    </button>
                </div>
            </div>
            <div className="boxchat__content">{Chats(props.user)}</div>
            <div className="boxchat__input">
                <div className="boxchat__input__form">
                    <input
                        name="content"
                        value={content.content}
                        onChange={onChange}
                        type="text"
                        placeholder="Write your message..."
                    />

                    <form className="boxchat__input__form__icon">
                        <i className="bx bx-ghost"></i>
                        <i className="bx bx-link"></i>
                        <i className="bx bxs-send" onClick={onSend}></i>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        data: state.data,
        actionsFilter : state.actionsFilter
       
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        ChatUser: (content, id) => {
            dispatch(ChatUser(content, id));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BoxChat);
