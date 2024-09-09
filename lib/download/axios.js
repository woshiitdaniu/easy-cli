/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-05 21:17:30
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 13:14:30
 */
const axios = require('axios')
const { GROUP } = require('../config/const/template')
const { getBaseUrl } = require('../utils/public')
axios.interceptors.response.use(res => {
  return res.data;
})

// 获取项目的版本列表 从而让用户选择不同的模板版本
const getGitlabTag = async (projectName) => {
  return axios.get(`${getBaseUrl()}/${projectName}/tags`)
}
// 获取项目的版本列表 从而让用户选择不同的模板版本
const getGitTemplateList = async ({ terminalSelect = 'pc' }) => {
  // 根据用户选择的终端来获取对应的groupId
  let groupId = GROUP[terminalSelect]
  // 构建带有子群组参数的 URL
  let url = `${getBaseUrl()}/api/v4/groups/${groupId}/projects?include_subgroups=true`;
  return axios.get(`${url}`)
}
                                                                   
module.exports = {
  getGitTemplateList
}