30.times do
  User.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.unique.email,
    password: 'password',
    birth_year: (1990..2000).to_a.sample,
    birth_month: (1..12).to_a.sample,
    birth_day: (1..31).to_a.sample,
    gender: ["Male", "Female"].sample
  )
end

user_ids = (2..30).to_a

20.times do
  Friendship.create!(
    sender_id: 1,
    receiver_id: user_ids.pop,
    status: (0..3).to_a.sample
  )
end
