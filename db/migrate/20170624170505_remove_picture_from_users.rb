class RemovePictureFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :picture_file_name, :string
    remove_column :users, :picture_content_type, :string
    remove_column :users, :picture_file_size, :integer
    remove_column :users, :picture_updated_at, :datetime
  end
end
