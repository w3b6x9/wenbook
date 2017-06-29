@sent_requests.each do |request|
  json.set! request.id do
    json.request_id request.id
    json.receiver_id request.receiver.id
    json.first_name request.receiver.first_name
    json.last_name request.receiver.last_name
    json.profile_picture request.receiver.profile_picture
  end
end
