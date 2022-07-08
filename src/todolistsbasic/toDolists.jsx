
//////////////////////////
import React from 'react'

     const ToDolists=(props)=>{
                      
            return (
              <>
                <div className="list_itm">
                  <div className="content">
                    <div className="serial">{1 + props.id}</div>
                    <div className="itemname">{props.text}</div>
                    <div
                      className="remove "
                      onClick={() => {
                        props.onSelect(props.id);
                      }}
                      title="Remove from list"
                    >
                      {/* - */}
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                </div>
              </>
            );
       }

       export default ToDolists;
/////////////////////////
      
      