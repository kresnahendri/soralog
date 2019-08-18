import { combineEpics } from 'redux-observable'
import { pingEpic, pongEpic } from './pingEpics'

export default combineEpics(
  pingEpic,
  pongEpic
)
