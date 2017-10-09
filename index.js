const request = require('request');
const express = require('express');
const Sequelize = require('sequelize');
const path = require('path')
const app = express();

const sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: path.join(__dirname,'model/database.sqlite') 
});
const Video = sequelize.define('video', {
  aid: Sequelize.INTEGER,
  view: Sequelize.INTEGER,
  danmu: Sequelize.INTEGER,
  coin: Sequelize.INTEGER,
  share: Sequelize.INTEGER,
  pic: Sequelize.STRING,
  title: Sequelize.STRING

});

// Video.sync({ force: true }).then(function () {
//   console.log('succeed')
// });

// for (let i = 1; i <= 50; i++) {
//   request(`http://api.bilibili.com/archive_rank/getarchiverankbypartion?type=jsonp&tid=76&pn=${i}`, function (error, response, body) {
//     let newBody = JSON.parse(body)
//     if (!error && response.statusCode == 200 && newBody.code == 0) {
//       for (let j = 0; j < newBody.data.page.size; j++) {
//         let videoDate = {
//           aid: newBody.data.archives[j].aid,
//           view: newBody.data.archives[j].play === '--' ? 0 : newBody.data.archives[j].play,
//           danmu: newBody.data.archives[j].stat.danmaku,
//           coin: newBody.data.archives[j].stat.coin,
//           share: newBody.data.archives[j].stat.share,
//           pic: newBody.data.archives[j].pic,
//           title: newBody.data.archives[j].title,
//         }
//         Video.create(videoDate).then((data)=>{
//           console.log(data)
//         })
//       }
//     } else {
//       console.log('error!!')
//     }
//   })
// }
