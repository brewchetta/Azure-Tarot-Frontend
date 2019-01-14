import { backendAPI as API } from '../APIAddress'

export function fetchCreateSpread(body) {
  return fetch(API + 'spreads', {
    method: 'POST',
    headers: { 'Accept':'application/json', 'Content-Type':'application/json', Authorization: `Bearer ${localStorage.jwt}` },
    body: JSON.stringify(body)
  })
  .then(r=>r.json())
}

export function fetchGetSpread(spreadId) {
  return fetch(API + `spreads/${spreadId}`, {
    headers: {Authorization: `Bearer ${localStorage.jwt}` }
  })
  .then(r=>r.json())
}
