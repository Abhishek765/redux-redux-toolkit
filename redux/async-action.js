const axios = require("axios");
const redux = require("redux");
const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCHED_USERS_REQUESTED";
const FETCH_USERS_SUCCESS = "FETCHED_USERS_SUCCESS";
const FETCH_USERS_FAILED = "FETCHED_USERS_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailed = (errorMessage) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: errorMessage,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const usersId = res.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(usersId));
      })
      .catch((err) => {
        dispatch(fetchUsersFailed(err.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const unsubscribe = store.subscribe(() =>
  console.log("state: ", store.getState())
);

store.dispatch(fetchUsers());
