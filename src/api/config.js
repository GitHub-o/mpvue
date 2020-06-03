const BASE_API = 'https://mpvue0124.herokuapp.com/';

const app = {
  id: 'wx1c024e7512d17ad3',
  secret: '0ea0c2c3938b3a0695d2684a6ba953c2'
}

export default {
  getOpenid: `${ BASE_API }api/profiles/getOpenid/${ app.id }/${ app.secret }/`,
  getMyLesson: BASE_API + 'api/profiles/mylessons/',
  getQuestions: BASE_API + 'api/profiles/questions/',
  myLesson: BASE_API + 'api/profiles/mylesson/',
  getHotLessons: BASE_API + 'api/profiles/hotLessons/',
  getCatalogue: BASE_API + 'api/profiles/lessondetail',
  getLessons: BASE_API + 'api/profiles/lessons'
}
