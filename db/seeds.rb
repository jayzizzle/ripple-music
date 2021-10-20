# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Follow.destroy_all
Album.destroy_all
Artist.destroy_all
User.destroy_all

require 'open-uri'

spidey = User.create(username: 'spidey', email: 'spidey@marvel.com', password: 'parker')
miles = User.create(username: 'miles', email: 'miles@marvel.com', password: 'morales')
gwen = User.create(username: 'gwen', email: 'gwen@marvel.com', password: 'gstacy')

her = Artist.create(
    artist_name: 'H.E.R.', 
    bio: ''
)

kehlani = Artist.create(
    artist_name: 'Kehlani', 
    bio: ''
)

wolftyla = Artist.create(
    artist_name: 'Wolftyla', 
    bio: ''
)

her_vol_1 = Album.create(
    title: 'H.E.R. Volume 1',
    artist_id: her.id,
    category: 'EP',
    year: 2016,
    is_explicit: false
)

cloud_19 = Album.create(
    title: 'Cloud 19',
    artist_id: kehlani.id,
    category: 'LP',
    year: 2014,
    is_explicit: true
)

wolf_in_color = Album.create(
    title: 'Wolf In Color',
    artist_id: wolftyla.id,
    category: 'LP',
    year: 2020,
    is_explicit: false
)

follows1 = Follow.create(
    artist_id: her.id,
    user_id: spidey.id
)

follows2 = Follow.create(
    artist_id: kehlani.id,
    user_id: spidey.id
)

follows3 = Follow.create(
    artist_id: wolftyla.id,
    user_id: spidey.id
)