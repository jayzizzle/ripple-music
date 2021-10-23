class CreateTrackLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :track_likes do |t|
      t.integer :track_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :track_likes, :track_id
    add_index :track_likes, :user_id
    add_index :track_likes, [:track_id, :user_id], unique: true
  end
end
