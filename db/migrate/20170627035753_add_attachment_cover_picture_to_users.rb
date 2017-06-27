class AddAttachmentCoverPictureToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :cover_picture
    end
  end

  def self.down
    remove_attachment :users, :cover_picture
  end
end
