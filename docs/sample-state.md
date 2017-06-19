```javascript
{
  currentUser: {
    id: 1,
    first_name: 'Bob',
    last_name: 'Smith',
    email: 'bobbysmith123@example.com',
  },

  forms: {
    signUp: {
      errors: [],
    },
    signIn: {
      errors: [],
    },
    post: {
      errors: [],
    },
    comment: {
      errors: [],
    },
    profile: {
      errors: [],
    },
  },

  user: {
    id: 1,
    first_name: 'Michael',
    last_name: 'Scott',
    email: 'mikeyscott@example.com',
    profile_pic: 'image.jpg',
    date_of_birth: '03/19/1984',
    gender: 'Male',
    about: 'Just doing my thing!',
    profile_info: {
      phone: '123-456-7890',
      education: 'Fab University',
      relationship: 'Double',
      location: 'New York, NY',
      work: 'Friendster',
    },
    pictures: {
      1: {
        id: 1,
      },
      2: {
        id: 2,
      },
    },
    friends: {
      10: {
        id: 23,
        first_name: 'Julia',
        last_name: 'Thorton',
      }
    },
    posts: {
      100: {
        id: 100,
        author_id: 5,
        receiver_id: 10,
        author_first_name: 'Darlene',
        author_last_name: 'Curry',
        body: 'Good job today!',
        numLikes: 5,
        createdAt: '2 days ago',
        comments: {
          55: {
            id: 55,
            author_id: 11,
            author_first_name: 'John',
            author_last_name: 'Jole',
            body: 'I think so',
            createdAt: '10 days ago',
            numLikes: 10,
            parentId: 54,
          },
        },
      },
    },
    friendships: {
      incomingRequests: {
        4: {
          id: 4,
          user_first_name: 'Calvin',
          user_last_name: 'Thunk',
        },
      },
    },
    notifications: {
      count: 10,
      list: [],
    },
    messages: {
      1: {
        id: 1,
        sender_id: 1,
        receiver_id: 2,
        body: 'Hi there!',
      },
    },
  },
}
```
