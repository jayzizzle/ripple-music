class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.integer :album_id, null: false
      t.integer :num, null: false
      t.integer :seconds, null: false
      t.boolean :is_interlude, null: false, default: false

      t.timestamps
    end
    add_index :tracks, :artist_id
    add_index :tracks, :album_id
  end
end
