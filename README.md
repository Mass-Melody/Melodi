# Melodi

A Social Media Web Application based on Music to promote connection and the love of music!

## Motivation

Traditional social media platforms focus too much on displays of status, materialism, and brief ideas. The team here at Melodi created Melodi to deter people from these potential problems. By keeping a focus on music, hobbies, and interests of individuals, Melodi strives to organically build communities and meaningful connections based on passion. Whether you are an artist, musician, or music lover, Melodi provides a proactive and healthy environment to facilitate relationships centered around music.
[Live Link](https://dev.d3nmhf49ophq95.amplifyapp.com)


## Screenshots

### Home Page
![Home Page](https://j.gifs.com/6WB8KR.gif)

### Logged-in User Profile
![Home Page](https://j.gifs.com/DqQkWK.gif)

### Friends / Search Page
![Friends / Search Page](https://j.gifs.com/RlP6jE.gif)

### User Profile
![User Profile](https://j.gifs.com/gpnJXk.gif)

## User Stories

  1. **As a basic user, I would like to be able to create a custom username and password for individuality and security.**
  
    + (Medium)

    + **Feature Tasks:**
      + Users can create a username that is unique to the database..
      + Users can create a password to secure their username..
      + Users must receive a token from an auth api before entering the chatroom.
    + **Acceptance Tests:**
      + Ensure that all users are prompted to register or login upon clicking the 'sign-in' link..
      + Ensure that username and password pairs are properly stored in database
      + Ensure that users can change their password/username and update it in the database.
      + Ensure that authorization measures work properly.


  2. **As a basic user, I would like to send and receive messages from other users of the site in real time.**
    + (Medium)

    + **Feature Tasks:**
      + Users will all have a 'Message Me' link that appears on their profile, clicking it will open a chat box.
      + Users can enter text to send messages to other users and receive text from other users.
      + Users can only see messages from clients in the same chat room as them.
    + **Acceptance Tests:**
      + Profile will feature a list of friends that can be clicked on to open an instant messenger.
      + Stretch Goal: IM will alert you when the user you are attempting to message is currently logged off.
      + Stretch Goal: A log of all messages sent is saved to the database when all users have left the room in order to save chat logs for future interactions with the same user.


  3. **As a basic user, I want to be able to edit the contents of my profile, while other users are only able to view it.**
    
    + (Medium-Small)

    + **Feature Tasks:**
      + Users are able to edit information on their profile.
      + Users are able to upload a personal photo.
      + Stretch Goal: Users can create a photo album.
    + **Acceptance Tests:**
      + Ensure that users are able to click to edit information and update it in their database.
      + Ensure that users are not able to alter information on a profile that does not belong to them.


  4. **As a recruiter, I’d like to be able to see who helped work on this application.**
    
    + (Small)

    + **Feature Tasks:**
      + The main site features a 'team' area which displays the profile links to the developers.
    + **Acceptance Tests:**
      + Ensure profile links photos display properly.

  5. **As a user, I want to be able to create custom playlists and post them to my profile.**
    
    + (Medium-Large)

    + **Feature Tasks:**
      + Users are able to create a list of favorite songs/personal music and then display that list on their site to be discovered by others.
    + **Acceptance Tests:**
      + Ensure that the playlist displays properly and music streams when the play button is clicked.
      + Stretch Goal: Playlist info can be shared among users.

