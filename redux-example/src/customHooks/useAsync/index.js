export function getArtices() {
  // 使用上面创建的 useAsync 获取文章列表 
  const { execute, data, loading, error } = useAsync(useCallback(async () => {
    const res = await fetch(`${endpoint}/posts`);
    return await res.json();
  }, []));
  // 执行异步调用
  useEffect(() => execute(), [execute]);
}