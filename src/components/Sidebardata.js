import React from 'react'

function sidebardata({Icon,selected}) {
    return (
        <div className={`sidebardata-container ${selected && "sidebar-active"} `}>
           <Icon /> 
        </div>
    )
}

export default sidebardata
