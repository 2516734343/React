import { useState } from "react";
import { useTableRequest } from "./useTableRequest";



export function table() {

  const [query, setQuery] = useState({ search: '' });
  const remoteRequest = () => {
    return fetch('http://127.0.0.1:7001/page/tag/list?' + query).then(res => res.json())
  }
  const [tableData, handleChange, pagation] = useTableRequest(query, remoteRequest);

  const { dataSource, total } = tableData;
  const { page, pageSize } = pagation;
}