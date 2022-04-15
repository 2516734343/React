import { useFormChange } from "./useFormChange";


export function FormInfo() {
  const [formData, setFormItem, resetForm] = useFormChange();

  const { name, grade, sex } = formData;
  return <div>
    <input name="name" placeholder="请输入名称" value={name} onChange={e => setFormItem('name', e.target.value)}></input>
    <select name="grade" placeholder="请选择年级" value={grade} onChange={value => setFormItem('grade', value)}>
      <option value={1}>1</option>
      <option value={2}>2</option>
    </select>
    <button onClick={() => { console.log(formData) }}>提交</button>
    <button onClick={() => resetForm()}>重置</button>
  </div>
}