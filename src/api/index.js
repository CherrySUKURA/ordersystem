import {get,post} from '@/request/http.js'

export const aiAddress = p => get('/questionnaire/getTitleInfo',p)
export const aiAddress = p => post('/questionnaire/getTitleInfo',p)