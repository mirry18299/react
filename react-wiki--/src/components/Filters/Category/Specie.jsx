import React from "react";

const Specie = ()=> {
    return(
<div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">

        <button
          className="accordion-button"
           type="button"
           data-bs-toggle="collapse" 
           data-bs-target="#collapseTwo"
           aria-expanded="false" 
           aria-controls="collapseTwo"
           >
     Species
         </button>
         </h2>
    <div
      id="collapseTwo"
      class="accordion-collapse collapse "
      aria-labelledby="headingTwo"
      data-bs-parent="accordionExample"
     >
    <div class="accordion-body">
    </div>
    </div>
    </div>
    )
}
export default Specie;