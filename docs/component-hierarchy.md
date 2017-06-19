## Component Hierarchy

**App**
  - Navbar
    - Link (Logo)
    - SearchBar
    - Link (Profile)
    - Link (Home)
    - FriendsDropdown
    - MessagesDropdown
    - NotificationsDropdown
    - MenuDropdown
  - Profile
    - UserDetailHeader
      - Link (Edit Profile)
    - UserInfoPanel
    - UserPhotosPanel
    - UserFriendsListPanel
    - WallFeed
    - Post
    - Comment
    PostForm
  - NewsFeed
    - LeftNavSidebar
      - Link (Profile)
      - Link (NewsFeed)
      - Link (Messenger)
    - RightChatSidebar
      - ChatFriend
      - SearchBar
    - PostForm
    - NewsFeed
    - Post
    - Comment
  - LandingPage
    - SignIn
    - SignUp


## Routes
| Path   |  Component |
|--------|-------------|
| "/login"| SignInPage |
| "/" | NewsFeed |
| "/:username" | Profile |
| "/:username/friends" | Friends |
| "/:username/edit" | EditProfile |
| "/messages" | Messages |
