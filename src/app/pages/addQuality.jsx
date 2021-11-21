import React from "react";
//import CreateForm from "../components/ui/createForm";
import QualityForm from "../components/ui/qualityForm";
const AddQualityPage = () => {
  const handleSubmit = (data) => {
    // updateQuality(data);
    console.log(data);
  };

  return (
    <>
      <h1>Add Quality</h1>
      <QualityForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddQualityPage;
