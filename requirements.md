# Software Requirements

  ## Vision
    + **What is the vision of this product?**
      + A social media platform focused around sharing and discovery of music/musicians.
    + **What pain point does this project solve?**
      + When searching for new genres or artists, or even bands looking for new talent in their city.
    + **Why should we care about your product?**
      + This would be a major tool for assembling musical acts/organically growing fan communities/exposing others to new music in a more intimate fashion than something like SoundCloud.
  
  ## Scope (In/Out)
  
    ### IN - What will your product do
      + **Describe the individual features that your product will do.**
      + Users can make an individual profile with password authentication. Profiles can be customized to display user info/photos.
      + Users can share playlists via the Spotify API and listen to playlists on other users' channels.
      + Users can follow musical acts / connect with other users as friends.
      + Users can engage in real time text chat with friend profiles.
      + Users can search for others based on instruments they play, location, and musical tastes.
    ### OUT - What will your product not do?
      + Will not be accessible on mobile devices.
      + Will not allow more than two users to chat at once.
      + Will not allow streaming media in chat.
  
  ## Minimum Viable Product
  
    + **What will your MVP functionality be?**
      + User Profiles
      + Instant Messaging
      + Musical Playlist Sharing
      + Profile Search Feature

    + **What are your stretch goals?**
      + Stretch Goal: IM will alert you when the user you are attempting to message is currently logged off.
      + Stretch Goal: A log of all messages sent is saved to the database when all users have left the room in order to save chat logs for future interactions with the same user.
      + Users are able to upload a personal photo.
      + Stretch Goal: Users may create photo albums.
      + Stretch Goal: Playlist info can be shared among users via a "share" button.
    + **What stretch goals are you going to aim for?**
      + IM alerts
      + Playlist Sharing

  ## Functional Requirements
  
    + **List the functionality of your product. This will consist of tasks such as the following:**
      + Only the user can update their profile information
      + A user can search for other user profiles, musical acts' profiles, and musician types.
      + A user may instant message other users.
      + A user may listen to embedded playlists.
      
  ## Data Flow
  
    + Login: User is prompted to login, a db server is contacted to do basic auth.
    + Edit: Users may update their profile with text information, Spotify playlists, and photos. A db server is contacted to update the profile schema attached to this user. Uploading of files is handled via a WebRTC connection.
    + Message: Users may IM other users, a new room is created via Socket.io to facilitate chat.
    + Play Music: Users may embed playlists, a call is made to the Spotify API to retrieve song/album cover data.
    + Search: Users may search for other users based on various criteria. A db server is contacted to retrieve a list of current users based on the search criteria.
    + Logout: User is able to view/search other profiles and play music while logged out.
  
  ## Non-Functional Requirements
  
    + **Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.**
      + Security — Product will store username/password info in an auth db. Usernames must be kept unique. Based authentication token is issued to allow editing of a profile page.
      + Maintainability  + Manageability— Using React and identical user profile layouts means components are easily fixed/expanded upon. As there is only one web server currently deployed, an administrator can easily single out and patch the profile schema as required. As scalability issues occur, so too will our ability to manage so much data. 
      + Scalability – Under the current model, only a single web server is being deployed. As the number of users increases it could strain SQL. This would be addressed by automatic deployment of additional web servers. 


