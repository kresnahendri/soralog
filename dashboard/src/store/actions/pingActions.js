import {
  PING,
  PING_F,
  PONG,
  PONG_F,
} from '../actionTypes'

export const actionPing = () => ({
  type: PING,
})
export const actionPingF = () => ({
  type: PING_F,
  payload: 'PING',
})

export const actionPong = () => ({
  type: PONG,
})

export const actionPongF = () => ({
  type: PONG_F,
  payload: 'PONG',
})
