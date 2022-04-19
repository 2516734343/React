import { useMemo, useRef, useState } from "react";

/**
 * 要实现的功能：
 * 1、 控制每一个表单的值
 * 2、表单提交，获取整个表单数据
 * 3、表单重置
 */
export function useFormChange() {
  const formData = useRef({});
  const [, forceUpdate] = useState({});

  const handleFormChange = useMemo(() => {

    const setFormItem = (key, value) => {
      console.log(key, value);
      const form = formData.current;

      form[key] = value;
      forceUpdate(value);
    }

    const resetForm = () => {
      const form = formData.current;
      for (let name in form) {
        form[name] = '';
      }
      forceUpdate('');
    }

    return [setFormItem, resetForm];
  }, []);

  return [formData.current, ...handleFormChange];
}