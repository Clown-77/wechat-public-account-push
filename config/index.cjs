/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1b9f302f8a896a77',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b3771781f3ed96fd6bb29dace134cc39',

  PROVINCE: '安徽省',
  CITY: '安庆市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '清宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oQd_p5yIQ7LiFDIVKG_1bjVXMitY失恋',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'X4NVNv5rdPgZcZRPJRo0bWO6DcR3dXbY0EluL9bgScw失恋',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          //type: '*生日', name: '清宝', year: '1999', date: '07-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '清宝', year: '1999', date: '05-21',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '09-16',
        },
      ],
        // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-16' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],
  
  


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'HbgPRodH1a6H-_2vPYtx1muqQmoQIICxveW4YcZQzEQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oQd_p52JLqy5BkmbdS-jF7aGaxss失恋',
    }
  ],

}

module.exports = USER_CONFIG

