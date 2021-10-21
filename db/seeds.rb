# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

AlbumLike.destroy_all
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

file003 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/her.jpg')
her.photo.attach(io: file003, filename: 'her.jpg')

file007 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/kehlani.jpg')
kehlani.photo.attach(io: file007, filename: 'kehlani.jpg')

file011 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/wolftyla.jpg')
wolftyla.photo.attach(io: file011, filename: 'wolftyla.jpg')

her_vol_1 = Album.create(
    title: 'H.E.R. Volume 1',
    artist_id: her.id,
    category: 'EP',
    year: 2016,
    is_explicit: false
)

cover01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/her-vol1.jpg')
her_vol_1.cover.attach(io: cover01, filename: 'her-vol1.jpg')

cloud_19 = Album.create(
    title: 'Cloud 19',
    artist_id: kehlani.id,
    category: 'LP',
    year: 2014,
    is_explicit: true
)

cover02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/kehlani-cloud.jpg')
cloud_19.cover.attach(io: cover02, filename: 'kehlani-cloud.jpg')

wolf_in_color = Album.create(
    title: 'Wolf In Color',
    artist_id: wolftyla.id,
    category: 'LP',
    year: 2020,
    is_explicit: false
)

cover03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/wolftyla-wolf.jpg')
wolf_in_color.cover.attach(io: cover03, filename: 'wolftyla-wolf.jpg')

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

album_like1 = AlbumLike.create(
    album_id: her_vol_1.id,
    user_id: spidey.id
)

album_like2 = AlbumLike.create(
    album_id: cloud_19.id,
    user_id: spidey.id
)

album_like3 = AlbumLike.create(
    album_id: wolf_in_color.id,
    user_id: spidey.id
)