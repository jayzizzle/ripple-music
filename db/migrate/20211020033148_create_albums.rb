class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :category, null: false
      t.integer :year, null: false
      t.boolean :is_explicit, null: false

      t.timestamps
    end
    add_index :albums, :artist_id
  end
end
