

export function StudentList({ data }) {
  return <div>
    {
      data.length <= 0 && <div>无数据</div>
    }
    {
      data.length > 0 &&
      <ul>
        {
          data.map(item => {
            return <li key={item.id}>name: {item.name}， id:{item.id}</li>
          })
        }
      </ul>
    }
  </div>
}