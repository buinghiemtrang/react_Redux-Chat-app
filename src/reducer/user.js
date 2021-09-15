import * as types from '../constants/index'
var init = {
    index : null,
    name : null,
    img : null,
    desc : null,
    chatroom1 : [],
    filterText: null,
}

const user = (state = init,action)=>{
    var item = action.item
    var index = action.index
    switch(action.type){
        case types.CHOOSE_USER:
            return {
                index : index,
                name : item.name,
                img : item.img,
                desc : item.desc,
                chatroom1 : item.chatroom1,
                filterText: item.filterText
            } 
        
        default : return state
    }
}

export default user