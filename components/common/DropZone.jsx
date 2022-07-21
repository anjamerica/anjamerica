import React from 'react'

function DropZone({children, setIsDragging, setFile}) {
  
    const handleDrag=(event)=>{
        event.preventDefault();
        setIsDragging(true);
        const childNodes=event.target.childNodes;
        childNodes.forEach(item=>{
            item.onclick=event=>{
                event.preventDefault();
            }
        })
    }
    const handleDragLeave=()=>{
        setIsDragging(false);
    }
    const handleDrop=(event)=>{
        event.preventDefault();
        // event.stopPropagation();
        let dt=event.dataTransfer;
        let file=dt.files[0];
        setFile(file);
        setIsDragging(false);
    }

    const handleDragCapture=(event)=>{

        console.log(event);
    }

    return (
    <div style={{border:"1px solid black"}} className=" mt-10 border border-[#565962] h-[8.5rem]  border-opacity-[33%] rounded" onDragOver={handleDrag} onDragCapture={handleDragCapture} onDragLeave={handleDragLeave} onDrop={handleDrop}>
        {children}
    </div>
  )
}

export default DropZone