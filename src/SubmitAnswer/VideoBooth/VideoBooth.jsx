import React from "react";
import { Stepper, Step } from "react-form-stepper";

export default function VideoBooth() {
  return (
    <>
      <section className="text-gray-600 body-font mx-auto">
        <div className="container px-5 py-24 pb-4 mx-auto">
          <Stepper activeStep={2} completedColor={'#ffffff'}>
            <Step label="Children Step 1 " />
            <Step label="Children Step 2" />
            <Step label="Children Step 3" />
          </Stepper>
        </div>
      </section>
    </>
  );
}
