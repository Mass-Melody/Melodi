import axios from 'axios'

const initialState = {
  personalProfile: null,
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
      console.log("STATE: ", payload)
      return { ...state, personalProfile: payload.username, profile: payload }
    case 'navigateProfile':
      console.log("STATE: ", payload)
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
      return { ...state, profile: payload }
    default:
      return state
  }
}

export const createProfile = (profileInfo) => async dispatch => {
  console.log('Profile Info: ', profileInfo);
  await axios.post(`${process.env.REACT_APP_API}/signup`, profileInfo)

  let test = await axios({
    method: "POST",
    url:`${process.env.REACT_APP_API}/api/v1/allUsers`
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
  console.log('USER PROFILE NAME', userProfileName)
  console.log('Stringified PROFILE', stringifiedProfile)
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

export const addFriend = (user) => {
  return {
    type: 'addFriend',
    payload: user
  }
}

export const navigateProfile = (user) => {
  return {
    type: 'navigateProfile',
    payload: user
  }
}

export const yourProfile = (user, listOfUsers) => {
  let personal = listOfUsers.users.filter(profile => user === profile.username)[0]
  console.log(personal)
  return {
    type: 'yourProfile',
    payload: personal
  }
}

export const getAllUsers = () => async dispatch => {
  console.log("THIS IS IN THE ACTION CREATOR")
  let allUsers = await axios.get(`${process.env.REACT_APP_API}/api/v1/allUsers/`)
  console.log('THIS IS ALL USERS')
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