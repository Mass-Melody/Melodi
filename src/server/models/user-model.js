'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    f_name: {
        type: String
    },
    l_name: {
        type: String
    },
    username: {
        type: String
    }
}, {
        collection: 'users'
    })

module.exports = mongoose.model('User', userSchema)

// firstName: ‘’,
//   lastName: ‘’,
//   username: ‘’,
//   age: ‘’,
//   location: ‘’,
//   profile: {
//     picture: ‘’,
//     hero: ‘’,
//     friends: [],
//     aboutMe: ‘’,
//     playlist: ‘’,
//     posts: [
//       {
//         title: ‘’,
//         content: ‘’
//       }
//     ],
//     interests:
//       {
//         interest1: ‘’,
//         interest2: ‘’,
//         interest3: ‘’,
//         interest4: ‘’,
//         interest5: ‘’,
//       }
//     ,
//     details:
//       {
//         detail1: ‘’,
//         detail2: ‘’,
//         detail3: ‘’,
//         detail4: ‘’,
//         detail5: ‘’,