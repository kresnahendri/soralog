import 'rxjs'
import { mapTo } from 'rxjs/operators'
import { PING, PONG } from '../actionTypes'
import { actionPingF, actionPongF } from '../actions/pingActions'

export const pingEpic = (action$) => {
  return action$.ofType(PING).pipe(
    mapTo(actionPingF())
  )
}

export const pongEpic = (action$) => {
  return action$.ofType(PONG).pipe(
    mapTo(actionPongF())
  )
}
