User.create!(
  first_name: "Wen Bo",
  last_name: "Xie",
  email: "wenbox323@gmail.com",
  password: "password",
  birth_year: 1992,
  birth_month: 3,
  birth_day: 23,
  gender: "Male",
  profile_picture: File.open("app/assets/images/wenbo_profile_pic.jpg"),
  cover_picture: "https://s3.us-east-2.amazonaws.com/wenbook-dev/users/cover_pictures/cover_pic.jpg"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "wenbo1@wenbo.com",
  password: 'password',
  birth_year: (1990..2000).to_a.sample,
  birth_month: (1..12).to_a.sample,
  birth_day: (1..31).to_a.sample,
  gender: ["Male", "Female"].sample,
  profile_picture: File.open("app/assets/images/face1.jpg"),
  cover_picture: "https://s3.us-east-2.amazonaws.com/wenbook-dev/users/cover_pictures/cover_pic.jpg"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "wenbo2@wenbo.com",
  password: 'password',
  birth_year: (1990..2000).to_a.sample,
  birth_month: (1..12).to_a.sample,
  birth_day: (1..31).to_a.sample,
  gender: ["Male", "Female"].sample,
  profile_picture: File.open("app/assets/images/face2.jpg"),
  cover_picture: "https://s3.us-east-2.amazonaws.com/wenbook-dev/users/cover_pictures/cover_pic.jpg"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "wenbo3@wenbo.com",
  password: 'password',
  birth_year: (1990..2000).to_a.sample,
  birth_month: (1..12).to_a.sample,
  birth_day: (1..31).to_a.sample,
  gender: ["Male", "Female"].sample,
  profile_picture: File.open("app/assets/images/face3.jpg"),
  cover_picture: "https://s3.us-east-2.amazonaws.com/wenbook-dev/users/cover_pictures/cover_pic.jpg"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "wenbo4@wenbo.com",
  password: 'password',
  birth_year: (1990..2000).to_a.sample,
  birth_month: (1..12).to_a.sample,
  birth_day: (1..31).to_a.sample,
  gender: ["Male", "Female"].sample,
  profile_picture: File.open("app/assets/images/face4.jpg"),
  cover_picture: "https://s3.us-east-2.amazonaws.com/wenbook-dev/users/cover_pictures/cover_pic.jpg"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "wenbo5@wenbo.com",
  password: 'password',
  birth_year: (1990..2000).to_a.sample,
  birth_month: (1..12).to_a.sample,
  birth_day: (1..31).to_a.sample,
  gender: ["Male", "Female"].sample,
  profile_picture: File.open("app/assets/images/face5.jpg"),
  cover_picture: "https://s3.us-east-2.amazonaws.com/wenbook-dev/users/cover_pictures/cover_pic.jpg"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "wenbo6@wenbo.com",
  password: 'password',
  birth_year: (1990..2000).to_a.sample,
  birth_month: (1..12).to_a.sample,
  birth_day: (1..31).to_a.sample,
  gender: ["Male", "Female"].sample,
  profile_picture: File.open("app/assets/images/face6.jpg"),
  cover_picture: "https://s3.us-east-2.amazonaws.com/wenbook-dev/users/cover_pictures/cover_pic.jpg"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "wenbo7@wenbo.com",
  password: 'password',
  birth_year: (1990..2000).to_a.sample,
  birth_month: (1..12).to_a.sample,
  birth_day: (1..31).to_a.sample,
  gender: ["Male", "Female"].sample,
  profile_picture: File.open("app/assets/images/face7.jpg"),
  cover_picture: "https://s3.us-east-2.amazonaws.com/wenbook-dev/users/cover_pictures/cover_pic.jpg"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "wenbo8@wenbo.com",
  password: 'password',
  birth_year: (1990..2000).to_a.sample,
  birth_month: (1..12).to_a.sample,
  birth_day: (1..31).to_a.sample,
  gender: ["Male", "Female"].sample,
  profile_picture: File.open("app/assets/images/face8.jpg"),
  cover_picture: "https://s3.us-east-2.amazonaws.com/wenbook-dev/users/cover_pictures/cover_pic.jpg"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "wenbo9@wenbo.com",
  password: 'password',
  birth_year: (1990..2000).to_a.sample,
  birth_month: (1..12).to_a.sample,
  birth_day: (1..31).to_a.sample,
  gender: ["Male", "Female"].sample,
  profile_picture: File.open("app/assets/images/face9.jpg"),
  cover_picture: "https://s3.us-east-2.amazonaws.com/wenbook-dev/users/cover_pictures/cover_pic.jpg"
)

30.times do
  Post.create!(
    author_id: User.all.sample.id,
    body: Faker::ChuckNorris.fact,
  )
end

20.times do
  Post.create!(
    author_id: [1, 2, 3].sample,
    receiver_id: [1, 2, 3].sample,
    body: Faker::Hacker.say_something_smart
  )
end

100.times do
  Comment.create!(
    author_id: User.all.sample.id,
    commentable_id: Post.all.sample.id,
    commentable_type: "Post",
    body: Faker::Hipster.sentence
  )
end

user_ids = (2..10).to_a

user_ids.size.times do
  Friendship.create!(
    sender_id: 1,
    receiver_id: user_ids.pop,
    status: "confirmed"
  )
end
