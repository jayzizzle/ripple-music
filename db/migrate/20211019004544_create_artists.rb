class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :artist_name, null: false
      t.text :bio

      t.timestamps
    end
    add_index :artists, :artist_name
  end
end
