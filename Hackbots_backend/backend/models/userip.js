const mongoose = require('mongoose');

const coderSchema = new mongoose.Schema({
  username: String,
  userid:Number,
  ccc_score: Number,
  skills: [String],
});

const coder = mongoose.model('coder', coderSchema);

const usersToAdd = [
  {username: 'user1', userid: '1000',ccc_score: '1152',skills:['Backend','API','AIML']},
  { username: 'user2', userid: '1001',ccc_score: '1156',skills:['Frontend','AIML','Blockchain'] },
  { username: 'user3', userid: '1002',ccc_score: '1000',skills:['Blockchain','AppDevelopment','FullStack'] },
  { username: 'user4', userid: '1003',ccc_score: '1456',skills:['Frontend','API','Blockchain'] },
  { username: 'user5', userid: '1004',ccc_score: '1852',skills:['CyberSecurity','Design','Frontend'] },
  { username: 'user6', userid: '1005',ccc_score: '2165',skills:['CloudComputing','API','FullStack'] },
  { username: 'user7', userid: '1006',ccc_score: '1652',skills:['Frontend','SQLDatabase','Blockchain'] },
  { username: 'user8', userid: '1007',ccc_score: '907',skills:['CloudComputing','Design','API'] },
  { username: 'user9', userid: '1008',ccc_score: '465',skills:['AppDevelopment','AIML','Blockchain'] },
  { username: 'user10', userid: '1009',ccc_score: '1096',skills:['Frontend','SQLDatabase','Cybersecurity'] },
  { username: 'user11', userid: '1010',ccc_score: '1456',skills:['CyberSecurity','Design','API'] },
  { username: 'user12', userid: '1011',ccc_score: '1755',skills:['Frontend','SQLDatabase','Backend'] },
  { username: 'user13', userid: '1012',ccc_score: '1882',skills:['CloudComputing','API','FullStack'] },
  { username: 'user14', userid: '1013',ccc_score: '1396',skills:['Frontend','Design','Blockchain'] },
  { username: 'user15', userid: '1014',ccc_score: '1912',skills:['CyberSecurity','AIML','AppDevelopment'] },
  { username: 'user16', userid: '1015',ccc_score: '1756',skills:['Frontend','SQLDatabase','AppDevelopment'] },
  { username: 'user17', userid: '1016',ccc_score: '1165',skills:['CloudComputing','Design','Backend'] },
  { username: 'user18', userid: '1017',ccc_score: '1145',skills:['Frontend','AIML','FullStack'] },
  { username: 'user19', userid: '1018',ccc_score: '789',skills:['CyberSecurity','API','Blockchain'] },
  { username: 'user20', userid: '1019',ccc_score: '1265',skills:['AppDevelopment','SQLDatabase','FullStack'] },
];

const newUserDocuments = usersToAdd.map(userData => new coder(userData));

Promise.all(newUserDocuments.map(coder => coder.save()))
  .then(savedUsers => {
    console.log('Users saved:', savedUsers );
  })
  .catch(error => {
    console.error('Error saving users:', error);
  });



module.exports = coder;
