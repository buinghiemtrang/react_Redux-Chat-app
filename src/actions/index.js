import * as types from "../constants";

export const View = (item,index)=>{
    return {
        type : types.CHOOSE_USER,
        item,index
    }
}
export const ChatUser = (content,id)=>{
    return {
        type : types.CHAT_USER,
        content,id
    }
}
export const addGroup = (name) => {
    return {
        type: types.ADD_GROUP,
        name : name
    }
}
export const filterChat = () => {
    return {
        type: types.FILTER_CHAT,
       
    }
}
export const filterImage = () => {
    return {
        type: types.FILTER_IMAGE,
    }
}
export const filterVideo = () => {
    return {
        type: types.FILTER_VIDEO,
    }
}
export const filterAll = () => {
    return {
        type: types.FILTER_ALL,
    }
}