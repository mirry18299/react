import React from "react";
import Gender from "..Filters/category/Gender.jsx";
import Species from "..Filters/category/Specie.jsx";
import Status from "..Filters/category/Status.jsx";

const Filters = () => {
  return (
  <div classNameName="col-3">
    <div className="text-center fw-bold fs-4 mb-2">Filter</div>
    <div
      style={{ cursor: "pointer" }}
      className="text center text-primary text-decoration-underline"
    >
         Clear Filters 
    </div>

    <div className="accordion" id="accordionExample">
        <Status />
        <Species />
        <Gender />
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">

        <button
          className="accordion-button"
           type="button"
           data-bs-toggle="collapse" 
           data-bs-target="#collapseOne"
           aria-expanded="true" 
           aria-controls="collapseOne"
           >

         Accordion Item #1
         </button>
         </h2>
    <div
      id="collapseOne"
      class="accordion-collapse-collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="accordionExample"
     >
    <div class="accordion-body">
    <strong>This is the first item's accordion body.</strong> It is shown 
    by default, until the collapse plugin adds the appropriate 
    classes that we use to style each element. These classes control
     the overall appearance, as well as the showing and hiding via CSS
      transitions. You can modify any of this with custom CSS or 
      overriding our default variables. It's also worth noting that just 
      about any HTML can go within the <code>.accordion-body</code>,
       though the transition does limit overflow.
    </div>
    </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">

        <button
          className="accordion-button"
           type="button"
           data-bs-toggle="collapse" 
           data-bs-target="#collapseOne"
           aria-expanded="true" 
           aria-controls="collapseOne"
           >

         Accordion Item #2
         </button>
         </h2>
    <div
      id="collapseOne"
      class="accordion-collapse-collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="accordionExample"
     >
    <div class="accordion-body">
    <strong>This is the first item's accordion body.</strong> It is shown 
    by default, until the collapse plugin adds the appropriate 
    classes that we use to style each element. These classes control
     the overall appearance, as well as the showing and hiding via CSS
      transitions. You can modify any of this with custom CSS or 
      overriding our default variables. It's also worth noting that just 
      about any HTML can go within the <code>.accordion-body</code>,
       though the transition does limit overflow.
    </div>
    </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">

        <button
          className="accordion-button"
           type="button"
           data-bs-toggle="collapse" 
           data-bs-target="#collapseOne"
           aria-expanded="true" 
           aria-controls="collapseOne"
           >

         Accordion Item #3
         </button>
         </h2>
    <div
      id="collapseOne"
      class="accordion-collapse-collapse show"
      aria-labelledby="headingThree"
      data-bs-parent="accordionExample"
     >
    <div class="accordion-body">
    <strong>This is the first item's accordion body.</strong> It is shown 
    by default, until the collapse plugin adds the appropriate 
    classes that we use to style each element. These classes control
     the overall appearance, as well as the showing and hiding via CSS
      transitions. You can modify any of this with custom CSS or 
      overriding our default variables. It's also worth noting that just 
      about any HTML can go within the <code>.accordion-body</code>,
       though the transition does limit overflow.
    </div>
    </div>
    </div>
    </div>
    </div>
)}    
export default Filters;


