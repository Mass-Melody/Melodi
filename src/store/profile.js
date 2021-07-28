import axios from 'axios'
// Update personalProfile picture upsen setting and loggin in
const initialState = {
  messageUser: '',
  personalProfile: null,
  personalProfilePicture: '',
  listOfFriends: [],
  currentlyVisiting: null,
  users: [],
  profile: {
    firstName: '',
    lastName: '',
    username: '',
    age: '',
    instrument: '',
    location: '',
    picture: '',
    hero: '',
    friends: [],
    aboutMe: '',
    playlist: '',
    posts: [],
    interests: [],
    details: []
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {







    case 'editProfile':
      return { ...state, profile: payload }
    case 'setProfile':
      return { ...state, personalProfilePicture: payload.picture, personalProfile: payload.username, profile: payload }
    case 'navigateProfile':
      return { ...state, profile: payload }
    case 'newPost':
      let id = state.profile.posts.length + 11
      payload[id] = id
      let addPost = [payload, ...state.profile.posts]
      return { ...state, profile: { ...state.profile, posts: addPost } }
    case 'deletePost':
      let updatePost = state.profile.posts.filter(post => payload !== post.id)
      return { ...state, profile: { ...state.profile, posts: updatePost } }
    case 'removeFriend':
      return { ...state, profile: payload }
    case 'getAllUsers':
      return { ...state, users: payload }
    case 'yourProfile':
      return { ...state, profilePicture: payload.picture, personalProfile: payload.username, profile: payload }
    case 'populateFriends':
      return { ...state, listOfFriends: payload }
    case 'setMessageUser':
      return { ...state, messageUser: payload }
    default:
      return state
  }
}

export const createProfile = (profileInfo) => async dispatch => {
  await axios.post(`${process.env.REACT_APP_API}/signup`, profileInfo)

  let test = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_API}/api/v1/allUsers`
    ,
    data: {
      username: profileInfo.username,
    },
  })
    .then(res => {
      console.log("res", res.data.message);
      alert('Account Successfully Created!')
    })
    .catch(err => {
      alert('Error in request')
      console.log("error in request", err);
    });
}

export const setProfile = (profileInfo) => async dispatch => {
  let userProfile = await axios.get(`${process.env.REACT_APP_API}/api/v1/allUsers/${profileInfo.username}`)
  let parseInterests = JSON.parse(userProfile.data.interests);
  let parseDetails = JSON.parse(userProfile.data.details);
  let parsePosts = JSON.parse(userProfile.data.posts)
  let parseFriends = JSON.parse(userProfile.data.friends)
  userProfile.data.interests = parseInterests;
  userProfile.data.details = parseDetails;
  userProfile.data.posts = parsePosts;
  userProfile.data.friends = parseFriends;
  dispatch({
    type: 'setProfile',
    payload: userProfile.data
  })
}

export const editProfile = (info, userProfileName) => async dispatch => {
  let stringifiedProfile = {
    ...info,
    interests: JSON.stringify(info.interests),
    details: JSON.stringify(info.details),
    posts: JSON.stringify(info.posts),
    friends: JSON.stringify(info.friends)
  }
  console.log('THIS IS STRINGIFIED PROFILE', stringifiedProfile)
  // Turn back into Json and display
  let { url, profile } = {
    url: `${process.env.REACT_APP_API}/api/v1/allUsers/${userProfileName}`,
    profile: stringifiedProfile
  }
  // AXIOS CALL
  await axios.put(url, profile)
    .then(response => {
      console.log("RESPONSE DATA DID IT WORK???", response.data)
    }).catch(e => {
      console.log(e)
    })
  // Stringify Details and Interest
  dispatch({
    type: 'editProfile',
    payload: info
  })
}


export const populateFriends = (friends) => async dispatch => {
  let getFriends = []
  console.log('GET FRIENDS', getFriends)
  if (friends.length === 0) {
    dispatch({
      type: 'populateFriends',
      payload: getFriends
    })
  } else {
    for (let i = 0; i < friends.length; i++) {
      let gotFriend = await axios.get(`${process.env.REACT_APP_API}/api/v1/allUsers/${friends[i]}`)
      getFriends.push(gotFriend.data)
    }
    dispatch({
      type: 'populateFriends',
      payload: getFriends
    })
  }

}

export const newPost = (post) => {
  return {
    type: 'newPost',
    payload: post
  }
}

export const deletePost = (info, userProfileName) => async dispatch => {
  let stringifiedProfile = {
    ...info,
    interests: JSON.stringify(info.interests),
    details: JSON.stringify(info.details),
    posts: JSON.stringify(info.posts),
    friends: JSON.stringify(info.friends)
  }
  // Turn back into Json and display
  let { url, profile } = {
    url: `${process.env.REACT_APP_API}/api/v1/allUsers/${userProfileName}`,
    profile: stringifiedProfile
  }
  // AXIOS CALL
  await axios.put(url, profile)
    .then(response => {
    }).catch(e => {
      console.log(e)
    })
  // Stringify Details and Interest
  dispatch({
    type: 'deletePost',
    payload: info
  })
}

export const removeFriend = (info, userProfileName) => async dispatch => {
  let stringifiedProfile = {
    ...info,
    interests: JSON.stringify(info.interests),
    details: JSON.stringify(info.details),
    posts: JSON.stringify(info.posts),
    friends: JSON.stringify(info.friends)
  }
  // Turn back into Json and display
  let { url, profile } = {
    url: `${process.env.REACT_APP_API}/api/v1/allUsers/${userProfileName}`,
    profile: stringifiedProfile
  }
  // AXIOS CALL
  await axios.put(url, profile)
    .then(response => {
    }).catch(e => {
      console.log(e)
    })
  // Stringify Details and Interest
  dispatch({
    type: 'removeFriend',
    payload: info
  })
}


export const messageUser = (username) => {
  return {
    type: 'setMessageUser',
    payload: username
  }
}

export const navigateProfile = (profileInfo) => async dispatch => {
  let userProfile = await axios.get(`${process.env.REACT_APP_API}/api/v1/allUsers/${profileInfo.username}`)
  let parseInterests = JSON.parse(userProfile.data.interests);
  let parseDetails = JSON.parse(userProfile.data.details);
  let parsePosts = JSON.parse(userProfile.data.posts)
  userProfile.data.interests = parseInterests;
  userProfile.data.details = parseDetails;
  userProfile.data.posts = parsePosts;
  dispatch({
    type: 'navigateProfile',
    payload: userProfile.data
  })
}

export const yourProfile = (user) => async dispatch => {
  let userProfile = await axios.get(`${process.env.REACT_APP_API}/api/v1/allUsers/${user}`)
  let parseInterests = JSON.parse(userProfile.data.interests);
  let parseDetails = JSON.parse(userProfile.data.details);
  let parsePosts = JSON.parse(userProfile.data.posts)
  let parseFriends = JSON.parse(userProfile.data.friends)
  userProfile.data.interests = parseInterests;
  userProfile.data.details = parseDetails;
  userProfile.data.posts = parsePosts;
  userProfile.data.friends = parseFriends;
  dispatch({
    type: 'yourProfile',
    payload: userProfile.data
  })
}

export const getAllUsers = () => async dispatch => {
  let allUsers = await axios.get(`${process.env.REACT_APP_API}/api/v1/allUsers/`)
  let parsedUsers = allUsers.data.map(profile => {
    let parseInterests = JSON.parse(profile.interests);
    let parseDetails = JSON.parse(profile.details);
    let parsePosts = JSON.parse(profile.posts)
    let parseFriends = JSON.parse(profile.friends)
    profile.interests = parseInterests;
    profile.details = parseDetails;
    profile.posts = parsePosts;
    profile.friends = parseFriends;
    return profile
  })
  dispatch({
    type: 'getAllUsers',
    payload: parsedUsers
  })
}