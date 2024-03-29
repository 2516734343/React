
import { searchStudents } from "../../../services"
/**
 * 对学生查询结果改变的action类型
 */
export const actionTypes = {
  setStudentsAndTotal: Symbol('setStudentsAndTotal'),
  setIsLoading: Symbol('setIsLoading'),
}
/** action creator
 * 得到学生数组和总数
 */
export function setStudentsAndTotal(arr, total) {
  return {
    type: actionTypes.setStudentsAndTotal,
    pyload: {
      datas: arr,
      total: total
    },
  }
}

/** action creator
 * 得到是否正在加载中
 */
export function setIsLoading(isLoading) {
  console.log(isLoading);
  return {
    type: actionTypes.setIsLoading,
    pyload: isLoading,
  }
}

/**
 * 根据仓库中的查询条件，查询学生
 */
export function fetchStudents() {
  return async function (dispatch, getState) {
    dispatch(setIsLoading(true));
    const condition = getState().student.condition;
    const resp = await searchStudents(condition);
    dispatch(setStudentsAndTotal(resp.datas, resp.count));
    dispatch(setIsLoading(false));
  }

}


export async function fetchStudents1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const action = setStudentsAndTotal([], 0)
      resolve(action);
    }, 1000)
  })
}


export async function fetchStudents2(condition) {
  const resp = await searchStudents(condition);
  return setStudentsAndTotal(resp.datas, resp.count);
}


export async function fetchStudents3(condition) {
  return {
    type: actionTypes.setStudentsAndTotal,
    pyload: new Promise((resolve, reject) => {

      searchStudents(condition).then(res => (
        {
          datas: res.datas,
          total: res.count
        }
      ))

    })

  }
}

