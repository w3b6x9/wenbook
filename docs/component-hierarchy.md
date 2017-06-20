## Component Hierarchy

**App**
  - NavigationBarContainer
    - Link (Logo)
    - SearchBar
    - Link (Profile)
    - Link (Home)
    - FriendsDropdownContainer
      - FriendsDropdown
    - MessagesDropdownContainer
      - MessagesDropdown
    - NotificationsDropdownContainer
      - NotificationsDropdown
    - MenuDropdown
  - ProfileContainer
    - UserDetailHeader
      - Link (Edit Profile)
    - UserInfoPanelContainer
      - UserInfoPanel
    - UserPhotosPanelContainer
      - UserPhotosPanel
    - UserFriendsListPanelContainer
      - UserFriendsListPanel
    - WallFeedContainer
      - PostContainer
        - Post
        - CommentsContainer
          - Comments
      - PostFormContainer
        - PostForm
  - NewsFeedContainer
    - LeftNavSidebar
      - Link (Profile)
      - Link (NewsFeed)
      - Link (Messenger)
    - RightChatSidebarContainer
      - ChatFriend
      - SearchBar
    - PostFormContainer
      - PostForm
    - PostContainer
      - PostContainer
      - CommentsContainer
        - Comments
  - LandingPageContainer
    - SignInContainer
      - SignIn
    - SignUpContainer
      - SignUp
    - Copy


## Routes
| Path   |  Component |
|--------|-------------|
| "/login"| SignInPage |
| "/" | NewsFeed |
| "/:username" | Profile |
| "/:username/friends" | Friends |
| "/:username/edit" | EditProfile |
| "/messages" | Messages |
