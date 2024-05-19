


export const removeTooltip =()=>{
    const elms =  document.querySelectorAll('[role="tooltip"]')
    if(elms){
        for( const item of elms){
            item.remove()
        }
   
}

}