import { useEffect, useState } from "react";
import { getStudent } from "../utils/getStudent";


export function useLoadStudent() {
  const [students, setStduent] = useState([]);

  useEffect(() => {

    // (async () => {
    //   const data = await getStudent();
    //   setStduent(data);
    // })();

    const data = getStudent();
    setStduent(data);

  }, []);
  return students;
}