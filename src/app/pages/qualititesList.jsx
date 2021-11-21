import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import QualitiesTable from "../components/ui/qualitiesTable";
import axios from "axios";
import config from "../config.json";
const QualitiesListPage = () => {
  const [quality, setQuality] = useState([]);
  const history = useHistory();
  const qualityEndPoint = config.apiEndPoint;
  useEffect(async () => {
    const { data } = await axios.get(qualityEndPoint + "quality");
    setQuality(data.content);
  }, []);
  //   useEffect(() => {
  //     const promise = axios
  //       .get("http://localhost:4000/api/v1/quality")
  //       .then((res) => setQuality(res.data.content));
  //   }, []);
  const handleEdit = (param) => {
    console.log(param);
    history.push(`/edit/${param}`);
  };
  const handleDelete = (param) => {
    console.log(param);
  };
  return (
    <>
      <h1>Qualitites List Page</h1>
      <QualitiesTable
        onDelete={handleDelete}
        onEdit={handleEdit}
        data={quality}
      />
    </>
  );
};

export default QualitiesListPage;
