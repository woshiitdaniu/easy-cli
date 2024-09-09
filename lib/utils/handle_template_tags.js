/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-09 13:58:26
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 15:03:48
 */

module.exports = (templateList) => {
    let tempTemplateList = [];
    // 处理tag
    const handleTag = (tags) => {
        // return tags.map(tagEl => {
        //     return {
        //         name:,
        //         value:
        //             }
        // })
        return tags
    }
    templateList.forEach(element => {
        tempTemplateList.push({
            name:element.name+'  ('+element.description+')',
            value:element.name,
            tags:element.tag_list.length?handleTag(element.tag_list):[]
        })
    });
    return tempTemplateList
}