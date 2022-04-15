import React, { useState, useEffect } from "react";
import { useLoadStudent } from "../customHooks/useLoadStudent";
import { getStudent } from "../utils/getStudent";
import { StudentList } from "./student";


export function StudentWrap() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [loading, setLoading] = useState(false);


  // function getStudentData() {
  //   setLoading(true);
  //   let data = getStudent();
  //   data = data.slice(0, pageNo * pageSize);
  //   setData(data);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   getStudentData();

  //   return () => {
  //   };
  // }, [pageNo])
  const stu = useLoadStudent();
  console.log(stu);

  return <div>
    <StudentList data={stu} />
    {/* <input value={pageNo} onChange={e => setPageNo(e.target.value)}></input> */}
    <studentBox render={stu => <StudentList data={stu} />} />
  </div>
}

export class studentBox extends React.Component {
  constructor() {
    state = {
      stu: [],
    }
  }


  componentDidMount() {

  }

  render() {
    if ((typeof this.props.render) === 'function') {
      return this.props.render(stu)
    }
  }
}