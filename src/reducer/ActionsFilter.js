import * as types from '../constants'

const init = {
    filterText : false,
    filterImage: false,
    filterVideo: false,
    filterAll: false,
}
const actionsFilter = (state= init,action)=>{
    switch(action.type){
        case types.FILTER_CHAT:
            return {
                filterText : !state.filterText,
            }
        case types.FILTER_IMAGE:
            return {
                filterImage : !state.filterImage,
            }
        case types.FILTER_VIDEO:
            return {
                filterVideo : !state.filterVideo,
            }
        case types.FILTER_ALL:
            return {
                filterAll : !state.filterAll,
            }
        case types.CHOOSE_USER:
            return {
                filterText : false,
                filterImage : false,
                filterVideo : false,
                filterAll : false,
            }
        default : return state
    }
}
export default  actionsFilter