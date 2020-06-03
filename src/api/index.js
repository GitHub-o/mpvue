import request from "@/utils/request";
import API from "./config";

export const getOpenid = (code) =>
  request({
    url: API.getOpenid + code
  })

export const getMyLesson = (id) =>
  request({
    url: API.getMyLesson + id
  })

export const getQuestions = () =>
  request({
    url: API.getQuestions
  })

export const getMyRecomLesson = (data) =>
  request({
    url: API.myLesson,
    method: 'post',
    data
  })

export const getHotLesson = (data) =>
  request({
    url: API.getHotLessons,
    data
  })

export const getCatalogue = (data) =>
  request({
    url: API.getCatalogue,
    data
  })


export const getLessons = () =>
  request({
    url: API.getLessons
  })
