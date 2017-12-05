import axios from 'axios';

export function getcomment() {
  return {
    type: "GET_COMMENT",
    payload: axios.get("http://localhost:3000/api")
  }
};
