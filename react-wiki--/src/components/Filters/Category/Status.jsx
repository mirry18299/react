import React from "react";

const Status = ()=> {
    return (
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">

        <button
          className="accordion-button collapsed"
           type="button"
           data-bs-toggle="collapse" 
           data-bs-target="#collapseThree"
           aria-expanded="false" 
           aria-controls="collapseThree"
           >

            Status
         </button>
         </h2>
    <div
      id="collapseThree"
      class="accordion-collapse-collapse show"
      aria-labelledby="headingThree"
      data-bs-parent="accordionExample"
     >
    <div class="accordion-body">
    </div>
    </div>
    </div>
)}    
export default Status;