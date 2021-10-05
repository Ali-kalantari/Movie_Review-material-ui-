// const initialstate = {
//   loading: false,
//   users: [],
//   error: "",
// };

// const FETCH_USERS_REQ = "FETCH_USERS_REQ";
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
// const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// const fetchUsersReq = () =>{
//     return {
//         type : FETCH_USERS_REQ
//     }
// }


// const fetchUsersSuccess = () =>{
//     return {
//         type : FETCH_USERS_SUCCESS
//     }
// }


// const fetchUsersFailed = () =>{
//     return {
//         type : FETCH_USERS_FAILED
//     }
// }

//  const userreducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case FETCH_USERS_REQ:
//       return {
//         ...state,
//         loading: true,
//       };

//     case FETCH_USERS_SUCCESS:
//       return {
//         loading: false,
//         users: action.payload,
//         error: "",
//       };
//     case FETCH_USERS_FAILED:
//       return {
//         loading: false,
//         users: [],
//         error: action.payload,
//       };

//     default:
//       break;
//   }
// };

//  const fetchUsers = () => {
//   return function (dispatch) {
//     dispatch(fetchUsersReq());
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//           dispatch(fetchUsersSuccess(res.data))
//       })
//       .catch((err) => {
//           dispatch(fetchUsersFailed(err.message))
//       });
//   };
// };


// export default userreducer;




import { SELECT_CHANNEL, REQUEST_POSTS, RECEIVE_POSTS } from './../actions/fetchData';

const FetchUsers = (state = {}, action) => {
  switch (action.type) {
    case SELECT_CHANNEL:
       return { ...state, channel: action.channel };
    case REQUEST_POSTS:
       return { ...state, loading: true };
    case RECEIVE_POSTS:
       return { ...state, json: action.json, loading: false };
    default:
       return state;
  }
};
export default FetchUsers;