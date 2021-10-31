# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PlaylistTrack.destroy_all
TrackLike.destroy_all
AlbumLike.destroy_all
Follow.destroy_all
Playlist.destroy_all
Track.destroy_all
Album.destroy_all
Artist.destroy_all
User.destroy_all

require 'open-uri'

spidey = User.create(username: 'spidey', email: 'spidey@marvel.com', password: 'parker')
miles = User.create(username: 'miles', email: 'miles@marvel.com', password: 'morales')
gwen = User.create(username: 'gwen', email: 'gwen@marvel.com', password: 'gstacy')

tinashe = Artist.create(
    artist_name: 'Tinashe', 
    bio: ''
)

jhene = Artist.create(
    artist_name: 'Jhene Aiko', 
    bio: ''
)

miguel = Artist.create(
    artist_name: 'Miguel', 
    bio: ''
)

frank = Artist.create(
    artist_name: 'Frank Ocean', 
    bio: ''
)

jenevieve = Artist.create(
    artist_name: 'Jenevieve', 
    bio: ''
)

wolftyla = Artist.create(
    artist_name: 'Wolftyla', 
    bio: ''
)

weeknd = Artist.create(
    artist_name: 'The Weeknd', 
    bio: ''
)

drake = Artist.create(
    artist_name: 'Drake', 
    bio: ''
)

jcole = Artist.create(
    artist_name: 'J. Cole', 
    bio: ''
)

kehlani = Artist.create(
    artist_name: 'Kehlani', 
    bio: ''
)

her = Artist.create(
    artist_name: 'H.E.R.', 
    bio: ''
)

file001 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/drake.jpg')
drake.photo.attach(io: file001, filename: 'drake.jpg')

file002 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/frank.jpg')
frank.photo.attach(io: file002, filename: 'frank.jpg')

file003 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/her.jpg')
her.photo.attach(io: file003, filename: 'her.jpg')

file004 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/jcole.jpg')
jcole.photo.attach(io: file004, filename: 'jcole.jpg')

file005 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/jenevieve.jpg')
jenevieve.photo.attach(io: file005, filename: 'jenevieve.jpg')

file006 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/jhene.jpg')
jhene.photo.attach(io: file006, filename: 'jhene.jpg')

file007 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/kehlani.jpg')
kehlani.photo.attach(io: file007, filename: 'kehlani.jpg')

file008 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/miguel.jpg')
miguel.photo.attach(io: file008, filename: 'miguel.jpg')

file009 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/tinashe.jpg')
tinashe.photo.attach(io: file009, filename: 'tinashe.jpg')

file010 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/weeknd.jpg')
weeknd.photo.attach(io: file010, filename: 'weeknd.jpg')

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

her_vol_1_01 = Track.create(
    title: 'Losing',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 1,
    seconds: 225
)

vol1_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-1/Losing.mp3')
her_vol_1_01.audiofile.attach(io: vol1_01, filename: 'Losing.mp3')

her_vol_1_02 = Track.create(
    title: 'Wait For It',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 2,
    seconds: 135
)

vol1_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-1/Wait+For+It.mp3')
her_vol_1_02.audiofile.attach(io: vol1_02, filename: 'Wait+For+It.mp3')

her_vol_1_03 = Track.create(
    title: 'Facts',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 3,
    seconds: 218
)

vol1_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-1/Facts.mp3')
her_vol_1_03.audiofile.attach(io: vol1_03, filename: 'Facts.mp3')

her_vol_1_04 = Track.create(
    title: 'U',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 4,
    seconds: 178
)

vol1_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-1/U.mp3')
her_vol_1_04.audiofile.attach(io: vol1_04, filename: 'U.mp3')

her_vol_1_05 = Track.create(
    title: 'Focus',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 5,
    seconds: 200
)

vol1_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-1/Focus.mp3')
her_vol_1_05.audiofile.attach(io: vol1_05, filename: 'Focus.mp3')

her_vol_1_06 = Track.create(
    title: 'Jungle',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 6,
    seconds: 304
)

vol1_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-1/Jungle.mp3')
her_vol_1_06.audiofile.attach(io: vol1_06, filename: 'Jungle.mp3')

her_vol_1_07 = Track.create(
    title: 'Pigment',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 7,
    seconds: 86
)

vol1_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-1/Pigment.mp3')
her_vol_1_07.audiofile.attach(io: vol1_07, filename: 'Pigment.mp3')

her_vol_2 = Album.create(
    title: 'H.E.R. Volume 2',
    artist_id: her.id,
    category: 'EP',
    year: 2017,
    is_explicit: false
)
    
cover13 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/her-vol2.jpg')
her_vol_2.cover.attach(io: cover13, filename: 'her-vol2.jpg')

her_vol_2_01 = Track.create(
    title: 'Every Kind Of Way',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 1,
    seconds: 160
)

vol2_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-2/Every+Kind+Of+Way.mp3')
her_vol_2_01.audiofile.attach(io: vol2_01, filename: 'Every+Kind+Of+Way.mp3')

her_vol_2_02 = Track.create(
    title: 'Say It Again',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 2,
    seconds: 172
)

vol2_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-2/Say+It+Again.mp3')
her_vol_2_02.audiofile.attach(io: vol2_02, filename: 'Say+It+Again.mp3')

her_vol_2_03 = Track.create(
    title: 'Still Down',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 3,
    seconds: 169
)

vol2_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-2/Still+Down.mp3')
her_vol_2_03.audiofile.attach(io: vol2_03, filename: 'Still+Down.mp3')

her_vol_2_04 = Track.create(
    title: 'Avenue',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 4,
    seconds: 214
)

vol2_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-2/Avenue.mp3')
her_vol_2_04.audiofile.attach(io: vol2_04, filename: 'Avenue.mp3')

her_vol_2_05 = Track.create(
    title: 'Gone Away',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 5,
    seconds: 249
)

vol2_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-2/Gone+Away.mp3')
her_vol_2_05.audiofile.attach(io: vol2_05, filename: 'Gone+Away.mp3')

her_vol_2_06 = Track.create(
    title: "I Won't",
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 6,
    seconds: 212
)

vol2_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-2/I+Wont.mp3')
her_vol_2_06.audiofile.attach(io: vol2_06, filename: 'I+Wont.mp3')

her_vol_2_07 = Track.create(
    title: 'Changes',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 7,
    seconds: 213
)

vol2_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-2/Changes.mp3')
her_vol_2_07.audiofile.attach(io: vol2_07, filename: 'Changes.mp3')

her_vol_2_08 = Track.create(
    title: 'Lights On',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 8,
    seconds: 219
)

vol2_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/her-vol-2/Lights+On.mp3')
her_vol_2_08.audiofile.attach(io: vol2_08, filename: '/Lights+On.mp3')

cloud_19_01 = Track.create(
    title: 'FWU',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 1,
    seconds: 202
)

cloud01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/kehlani-cloud/01+FWU.mp3')
cloud_19_01.audiofile.attach(io: cloud01, filename: '01+FWU.mp3')

cloud_19_02 = Track.create(
    title: 'As I Am',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 2,
    seconds: 251
)

cloud02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/kehlani-cloud/02+As+I+Am.mp3')
cloud_19_02.audiofile.attach(io: cloud02, filename: '02+As+I+Am.mp3')

cloud_19_03 = Track.create(
    title: 'Get Away',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 3,
    seconds: 200
)

cloud03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/kehlani-cloud/03+Get+Away.mp3')
cloud_19_03.audiofile.attach(io: cloud03, filename: '03+Get+Away.mp3')

cloud_19_04 = Track.create(
    title: 'Deserve Better',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 4,
    seconds: 146
)

cloud04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/kehlani-cloud/04+Deserve+Better.mp3')
cloud_19_04.audiofile.attach(io: cloud04, filename: '04+Deserve+Better.mp3')

cloud_19_05 = Track.create(
    title: 'How We Do Us',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 5,
    seconds: 219
)

cloud05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/kehlani-cloud/05+How+We+Do+Us+(feat.+Kyle+Dion).mp3')
cloud_19_05.audiofile.attach(io: cloud05, filename: '05+How+We+Do+Us+(feat.+Kyle+Dion).mp3')

cloud_19_06 = Track.create(
    title: '1st Position',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 6,
    seconds: 190
)

cloud06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/kehlani-cloud/06+1st+Position.mp3')
cloud_19_06.audiofile.attach(io: cloud06, filename: '06+1st+Position.mp3')

cloud_19_07 = Track.create(
    title: 'Act A Fool',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 7,
    seconds: 175
)

cloud07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/kehlani-cloud/07+Tell+Your+Mama.mp3')
cloud_19_07.audiofile.attach(io: cloud07, filename: '07+Tell+Your+Mama.mp3')

wolf_in_color_01 = Track.create(
    title: 'Someone Like You',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 1,
    seconds: 162
)

wolf01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/wolftyla-wolf/01+Someone+Like+You.mp3')
wolf_in_color_01.audiofile.attach(io: wolf01, filename: '01+Someone+Like+You.mp3')

wolf_in_color_02 = Track.create(
    title: 'Boom Boom Room',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 2,
    seconds: 172
)

wolf02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/wolftyla-wolf/02+Boom+Boom+Room+(feat.+Roy+Woods).mp3')
wolf_in_color_02.audiofile.attach(io: wolf02, filename: '02+Boom+Boom+Room+(feat.+Roy+Woods).mp3')

wolf_in_color_03 = Track.create(
    title: 'All Tinted',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 3,
    seconds: 198
)

wolf03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/wolftyla-wolf/03+All+Tinted.mp3')
wolf_in_color_03.audiofile.attach(io: wolf03, filename: '03+All+Tinted.mp3')

wolf_in_color_04 = Track.create(
    title: 'Candy',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 4,
    seconds: 152
)

wolf04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/wolftyla-wolf/04+Candy.mp3')
wolf_in_color_04.audiofile.attach(io: wolf04, filename: '04+Candy.mp3')

wolf_in_color_05 = Track.create(
    title: 'Butterflies',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 5,
    seconds: 191
)

wolf05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/wolftyla-wolf/05+Butterflies+(feat.+Jay+Park).mp3')
wolf_in_color_05.audiofile.attach(io: wolf05, filename: '05+Butterflies+(feat.+Jay+Park).mp3')

wolf_in_color_06 = Track.create(
    title: 'In The Middle',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 6,
    seconds: 152
)

wolf06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/wolftyla-wolf/06+In+the+Middle.mp3')
wolf_in_color_06.audiofile.attach(io: wolf06, filename: '06+In+the+Middle.mp3')

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

track_like1 = TrackLike.create(
    track_id: her_vol_1_01.id,
    user_id: spidey.id
)

track_like2 = TrackLike.create(
    track_id: her_vol_1_02.id,
    user_id: spidey.id
)

track_like3 = TrackLike.create(
    track_id: her_vol_1_03.id,
    user_id: spidey.id
)

track_like4 = TrackLike.create(
    track_id: cloud_19_01.id,
    user_id: spidey.id
)

track_like5 = TrackLike.create(
    track_id: cloud_19_02.id,
    user_id: spidey.id
)

track_like6 = TrackLike.create(
    track_id: cloud_19_03.id,
    user_id: spidey.id
)

track_like7 = TrackLike.create(
    track_id: wolf_in_color_01.id,
    user_id: spidey.id
)

track_like8 = TrackLike.create(
    track_id: wolf_in_color_02.id,
    user_id: spidey.id
)

track_like9 = TrackLike.create(
    track_id: wolf_in_color_03.id,
    user_id: spidey.id
)

playlist1 = Playlist.create(
    title: 'Favorites',
    user_id: spidey.id
)

playlist2 = Playlist.create(
    title: 'New Songs',
    user_id: spidey.id
)

playlist_track1 = PlaylistTrack.create(
    playlist_id: playlist1.id,
    track_id: her_vol_1_01.id
)

playlist_track2 = PlaylistTrack.create(
    playlist_id: playlist1.id,
    track_id: cloud_19_01.id
)

playlist_track3 = PlaylistTrack.create(
    playlist_id: playlist1.id,
    track_id: wolf_in_color_01.id
)

playlist_track4 = PlaylistTrack.create(
    playlist_id: playlist2.id,
    track_id: her_vol_1_04.id
)

playlist_track5 = PlaylistTrack.create(
    playlist_id: playlist2.id,
    track_id: cloud_19_04.id
)

playlist_track6 = PlaylistTrack.create(
    playlist_id: playlist2.id,
    track_id: wolf_in_color_04.id
)