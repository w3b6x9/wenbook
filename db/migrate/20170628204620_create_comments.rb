class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.text :body, null: false
      t.references :commentable, polymorphic: true, index: true
      t.timestamps null: false
    end

    add_index :comments, :author_id
  end
end
