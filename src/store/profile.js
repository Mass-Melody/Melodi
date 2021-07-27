import axios from 'axios'
// Update personalProfile picture upsen setting and loggin in
const initialState = {
  personalProfile: null,
  personalProfilePicture: '',
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
    case 'createProfile':
      return { ...state, profile: payload }
    case 'editProfile':
      console.log('SET PROFILE', payload)
      return { ...state, profile: payload }
    case 'setProfile':
      return { ...state, personalProfile: payload.username, profile: payload }
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
      let updateFriends = state.profile.friends.filter(person => payload !== person.username)
      return { ...state, profile: { ...state.profile, friends: updateFriends } }
    case 'addFriend':
      return { ...state, profile: { ...state.profile, friends: [...state.profile.friends, payload] } }
    case 'getAllUsers':
      return { ...state, users: payload }
    case 'yourProfile':
      return { ...state, personalProfile: payload.username, profile: payload }
    default:
      return state
  }
}

export const createProfile = (profileInfo) => async dispatch => {
  console.log('Profile Info: ', profileInfo);
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
    })
    .catch(err => {
      console.log("error in request", err);
    });
  console.log('What was stored: ', test);
  // dispatch({
  //   type: 'createProfile',
  //   payload: userProfile.data
  // })
}

export const setProfile = (profileInfo) => async dispatch => {
  let userProfile = await axios.get(`${process.env.REACT_APP_API}/api/v1/allUsers/${profileInfo.username}`)
  let parseInterests = JSON.parse(userProfile.data.interests);
  let parseDetails = JSON.parse(userProfile.data.details);
  let parsePosts = JSON.parse(userProfile.data.posts)
  userProfile.data.interests = parseInterests;
  userProfile.data.details = parseDetails;
  userProfile.data.posts = parsePosts;
  dispatch({
    type: 'setProfile',
    payload: userProfile.data
  })
}

export const editProfile = (info, userProfileName) => async dispatch => {
  // PUT to database and edit VIA username
  // Stringify then put in database
  let stringifiedProfile = {
    ...info,
    interests: JSON.stringify(info.interests),
    details: JSON.stringify(info.details),
    posts: JSON.stringify(info.posts)
  }
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

// export const populateFriends = () => async dispatch =>{

//   return {
//     type: 'populateFriends',
//     payload: post
//   }
// }

export const newPost = (post) => {
  return {
    type: 'newPost',
    payload: post
  }
}

export const deletePost = (postId) => {
  return {
    type: 'deletePost',
    payload: postId
  }
}

export const removeFriend = (username) => {
  return {
    type: 'removeFriend',
    payload: username
  }
}

export const addFriend = (info, userProfileName) => async dispatch => {
  let stringifiedProfile = {
    ...info,
    interests: JSON.stringify(info.interests),
    details: JSON.stringify(info.details),
    posts: JSON.stringify(info.posts)
  }
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
    type: 'addFriend',
    payload: info
  })
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
  userProfile.data.interests = parseInterests;
  userProfile.data.details = parseDetails;
  userProfile.data.posts = parsePosts;
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
    profile.interests = parseInterests;
    profile.details = parseDetails;
    profile.posts = parsePosts;
    return profile
  })
  dispatch({
    type: 'getAllUsers',
    payload: parsedUsers
  })
}