import { useEffect, useMemo, useRef, useState } from "react";



export function useTableRequest(params, remoteRequest) {

  const firstRequest = useRef(false); // 记录是否是第一次请求
  const [tableData, setTableData] = useState({
    dataSource: [],
    total: 0,
  });
  const [pagation, setPagation] = useState({
    page: 1,
    pageSize: 10,
  });
  // 请求数据
  const getList = useMemo(() => {
    return async param => {
      if (!remoteRequest) return;
      const resp = await remoteRequest(param || { ...params, ...pagation });
      setTableData({
        ...tableData,
        dataSource: resp.dataSource,
        total: resp.total,
      });
      firstRequest.current = true;
    }
  }, []);

  // 改变分页，重新请求数据
  useEffect(() => {
    firstRequest.current && getList({ ...params, ...pagation });
  }, pagation);

  // 改变查询条件，请求数据
  useEffect(() => {
    getList({ ...params, ...pagation });
  }, params);


  // 改变分页
  const handleChange = useMemo((page, pageSize) => {
    setPagation({
      ...pagation,
      page,
      pageSize,
    })
  }, []);
  // 返回表格数据，分页函数，分页
  return [tableData, handleChange, pagation];

}