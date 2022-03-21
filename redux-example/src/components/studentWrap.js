import { useState, useEffect } from "react";
import { getStudent } from "../utils/getStudent";
import { StudentList } from "./student";


export function StudentWrap() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [loading, setLoading] = useState(false);


  function getStudentData() {
    setLoading(true);
    let data = getStudent();
    data = data.slice(0, pageNo * pageSize);
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    getStudentData();

    return () => {
    };
  }, [pageNo])

  return <div>
    <StudentList data={data} />
    <input value={pageNo} onChange={e => setPageNo(e.target.value)}></input>
  </div>
}