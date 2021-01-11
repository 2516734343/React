const appkey = "jmm__1559186214524";
// https://open.duyiedu.com  .then(resp => resp.json())
/**
 * 获取所有学生
 * @returns {Promise<any>}
 */
export async function getAllStudent() {
    return await fetch(`/api/student/findAll?appkey= + ${appkey}`)
        .then(resp => resp.json()).then(resp => resp.data);

}

export async function getStudents(page = 1, limit = 10) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`,
        {
            method: 'GET',
            // mode: 'cors',
            // credentials: 'include',
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            // },
        }).then(resp => resp.data);
}
