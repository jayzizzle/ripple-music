class CreateAlbumLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :album_likes do |t|
      t.integer :album_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :album_likes, :album_id
    add_index :album_likes, :user_id
    add_index :album_likes, [:album_id, :user_id], unique: true
  end
end
