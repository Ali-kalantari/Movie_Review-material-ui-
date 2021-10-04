const isdarkmode = (state=false , action)=>{
    if(action.type === 'isdark'){
        return !state
    }
    else{
        return state
    }
}
export default isdarkmode;