import React from "react";
import Gender from "./Category/Gender.jsx";
import Species from "./Category/Specie.jsx";
import Status from "./Category/Status.jsx";

const Filters = () => {
  return (
  <div classNameName="col-3">
    <div className="text-center fw-bold fs-4 mb-2">Filter</div>
    <div
      style={{ cursor: "pointer" }}
      className="text-center text-primary text-decoration-underline mb-4"
    >
         Clear Filters 
    </div>

    <div className="accordion" id="accordionExample">
        <Status />
        <Species />
        <Gender />
        </div>
        </div>

     /* <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">

        <button
          className="accordion-button"
           type="button"
           data-bs-toggle="collapse" 
           data-bs-target="#collapseOne"
           aria-expanded="true" 
           aria-controls="collapseOne"
           >

         Gender
         </button>
         </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="accordionExample"
     >
    <div className="accordion-body">
    </div>
    </div>
    </div>
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
    </div>
    </div>*/
)}   
export default Filters;


