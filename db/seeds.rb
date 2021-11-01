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

jonzamora = Artist.create(
    artist_name: 'Jon Zamora', 
    bio: ''
)

file001 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/drake.jpg')
drake.photo.attach(io: file001, filename: 'drake.jpg')

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

file012 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/jonzamora.jpg')
jonzamora.photo.attach(io: file012, filename: 'jonzamora.jpg')

in_case_we_die = Album.create(
    title: 'In Case We Die',
    artist_id: tinashe.id,
    category: 'LP',
    year: 2012,
    is_explicit: true
)

cover00 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/tinashe-in-case.jpg')
in_case_we_die.cover.attach(io: cover00, filename: 'tinashe-in-case.jpg')

reverie = Album.create(
    title: 'Reverie',
    artist_id: tinashe.id,
    category: 'LP',
    year: 2012,
    is_explicit: true
)

cover04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/tinashe-reverie.jpg')
reverie.cover.attach(io: cover04, filename: 'tinashe-reverie.jpg')

black_water = Album.create(
    title: 'Black Water',
    artist_id: tinashe.id,
    category: 'LP',
    year: 2013,
    is_explicit: true
)

cover05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/tinashe-blackwater.jpg')
black_water.cover.attach(io: cover05, filename: 'tinashe-blackwater.jpg')

sailing_souls = Album.create(
    title: 'Sailing Soul(s)',
    artist_id: jhene.id,
    category: 'LP',
    year: 2011,
    is_explicit: true
)

cover06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/jhene-sailing.jpg')
sailing_souls.cover.attach(io: cover06, filename: 'jhene-sailing.jpg')

house_of_balloons = Album.create(
    title: 'House Of Balloons',
    artist_id: weeknd.id,
    category: 'LP',
    year: 2011,
    is_explicit: true
)

cover08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/weeknd-house.jpg')
house_of_balloons.cover.attach(io: cover08, filename: 'weeknd-house.jpg')

thursday = Album.create(
    title: 'Thursday',
    artist_id: weeknd.id,
    category: 'LP',
    year: 2011,
    is_explicit: true
)

cover09 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/weeknd-thursday.png')
thursday.cover.attach(io: cover09, filename: 'weeknd-thursday.png')

echoes_of_silence = Album.create(
    title: 'Echoes Of Silence',
    artist_id: weeknd.id,
    category: 'LP',
    year: 2011,
    is_explicit: true
)

cover10 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/weeknd-echoes.png')
echoes_of_silence.cover.attach(io: cover10, filename: 'weeknd-echoes.png')

mischief = Album.create(
    title: 'Mischief: The Mixtape',
    artist_id: miguel.id,
    category: 'LP',
    year: 2008,
    is_explicit: true
)

cover11 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/miguel-mischief.jpg')
mischief.cover.attach(io: cover11, filename: 'miguel-mischief.jpg')

cloud_19 = Album.create(
    title: 'Cloud 19',
    artist_id: kehlani.id,
    category: 'LP',
    year: 2014,
    is_explicit: true
)

cover02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/kehlani-cloud.jpg')
cloud_19.cover.attach(io: cover02, filename: 'kehlani-cloud.jpg')

division = Album.create(
    title: 'Division',
    artist_id: jenevieve.id,
    category: 'LP',
    year: 2021,
    is_explicit: true
)

cover12 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/jenevieve-division.jpg')
division.cover.attach(io: cover12, filename: 'jenevieve-division.jpg')

wolf_in_color = Album.create(
    title: 'Wolf In Color',
    artist_id: wolftyla.id,
    category: 'LP',
    year: 2020,
    is_explicit: false
)

cover03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/wolftyla-wolf.jpg')
wolf_in_color.cover.attach(io: cover03, filename: 'wolftyla-wolf.jpg')

her_vol_1 = Album.create(
    title: 'H.E.R. Volume 1',
    artist_id: her.id,
    category: 'EP',
    year: 2016,
    is_explicit: false
)

cover01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/her-vol1.jpg')
her_vol_1.cover.attach(io: cover01, filename: 'her-vol1.jpg')

her_vol_2 = Album.create(
    title: 'H.E.R. Volume 2',
    artist_id: her.id,
    category: 'EP',
    year: 2017,
    is_explicit: false
)
    
cover13 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/her-vol2.jpg')
her_vol_2.cover.attach(io: cover13, filename: 'her-vol2.jpg')

friday_night_lights = Album.create(
    title: 'Friday Night Lights',
    artist_id: jcole.id,
    category: 'LP',
    year: 2010,
    is_explicit: true
)

cover15 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/jcole-friday.png')
friday_night_lights.cover.attach(io: cover15, filename: 'jcole-friday.png')

room_for_improvement = Album.create(
    title: 'Room For Improvement',
    artist_id: drake.id,
    category: 'LP',
    year: 2006,
    is_explicit: true
)

cover14 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/drake-room.jpg')
room_for_improvement.cover.attach(io: cover14, filename: 'drake-room.jpg')

rewind = Album.create(
    title: 'Rewind',
    artist_id: jonzamora.id,
    category: 'Mix',
    year: 2013,
    is_explicit: false
)

mix_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/jz-rewind.jpg')
rewind.cover.attach(io: mix_01, filename: 'jz-rewind.jpg')

summerchill = Album.create(
    title: 'A Summer Chill',
    artist_id: jonzamora.id,
    category: 'Mix',
    year: 2011,
    is_explicit: false
)

mix_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/jz-summerchill.jpg')
summerchill.cover.attach(io: mix_02, filename: 'jz-summerchill.jpg')

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

room_for_improvement_01 = Track.create(
    title: 'Intro',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 1,
    seconds: 52,
    is_interlude: true
)

room_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/01+Intro.mp3')
room_for_improvement_01.audiofile.attach(io: room_01, filename: '01+Intro.mp3')

room_for_improvement_02 = Track.create(
    title: 'Pianist Hands (Interlude)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 2,
    seconds: 71,
    is_interlude: true
)

room_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/02+Pianist+Hands+Skit+1.mp3')
room_for_improvement_02.audiofile.attach(io: room_02, filename: '02+Pianist+Hands+Skit+1.mp3')

room_for_improvement_03 = Track.create(
    title: 'Special (feat. Voyce)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 3,
    seconds: 292
)

room_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/03+Special+Feat+Voyce.mp3')
room_for_improvement_03.audiofile.attach(io: room_03, filename: '03+Special+Feat+Voyce.mp3')

room_for_improvement_04 = Track.create(
    title: 'Do What You Do',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 4,
    seconds: 228
)

room_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/04+Do+What+You+Do.mp3')
room_for_improvement_04.audiofile.attach(io: room_04, filename: '04+Do+What+You+Do.mp3')

room_for_improvement_05 = Track.create(
    title: 'Money (Remix)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 5,
    seconds: 145
)

room_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/05+Money+Remix+Featuring+Nickelus+F.mp3')
room_for_improvement_05.audiofile.attach(io: room_05, filename: '05+Money+Remix+Featuring+Nickelus+F.mp3')

room_for_improvement_06 = Track.create(
    title: 'AM 2 PM (feat. Nickelus F)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 6,
    seconds: 208
)

room_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/06+AM+2+PM+Feat+Nickelus+F.mp3')
room_for_improvement_06.audiofile.attach(io: room_06, filename: '06+AM+2+PM+Feat+Nickelus+F.mp3')

room_for_improvement_07 = Track.create(
    title: 'City Is Mine',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 7,
    seconds: 233
)

room_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/07+City+Is+Mine.mp3')
room_for_improvement_07.audiofile.attach(io: room_07, filename: '07+City+Is+Mine.mp3')

room_for_improvement_08 = Track.create(
    title: "Drake's Voicemail Box #1",
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 8,
    seconds: 72,
    is_interlude: true
)

room_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/08+Drakes+Voice+Skit+2.mp3')
room_for_improvement_08.audiofile.attach(io: room_08, filename: '08+Drakes+Voice+Skit+2.mp3')

room_for_improvement_09 = Track.create(
    title: 'Bad Meaning Good',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 9,
    seconds: 152
)

room_09 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/09+Bad+Meanin+Good+Feat+Slakah+the+Beatchild.mp3')
room_for_improvement_09.audiofile.attach(io: room_09, filename: '09+Bad+Meanin+Good+Feat+Slakah+the+Beatchild.mp3')

room_for_improvement_10 = Track.create(
    title: 'Thrill Is Gone',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 10,
    seconds: 182
)

room_10 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/10+Thrill+Is+Gone.mp3')
room_for_improvement_10.audiofile.attach(io: room_10, filename: '10+Thrill+Is+Gone.mp3')

room_for_improvement_11 = Track.create(
    title: 'Make Things Right',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 11,
    seconds: 161
)

room_11 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/11++Make+Things+Right.mp3')
room_for_improvement_11.audiofile.attach(io: room_11, filename: '11++Make+Things+Right.mp3')

room_for_improvement_12 = Track.create(
    title: 'Video Girl',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 12,
    seconds: 226
)

room_12 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/12+Video+Girl+Feat+Sean+G.mp3')
room_for_improvement_12.audiofile.attach(io: room_12, filename: '12+Video+Girl+Feat+Sean+G.mp3')

room_for_improvement_13 = Track.create(
    title: "Drake's Voicemail Box #2",
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 13,
    seconds: 16,
    is_interlude: true
)

room_13 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/13+Drakes+Voice+Skit+3.mp3')
room_for_improvement_13.audiofile.attach(io: room_13, filename: '13+Drakes+Voice+Skit+3.mp3')

room_for_improvement_14 = Track.create(
    title: 'Come Winter',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 14,
    seconds: 328
)

room_14 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/14+Come+Winter.mp3')
room_for_improvement_14.audiofile.attach(io: room_14, filename: '14+Come+Winter.mp3')

room_for_improvement_15 = Track.create(
    title: 'Extra Special',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 15,
    seconds: 178
)

room_15 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/15+Extra+Special.mp3')
room_for_improvement_15.audiofile.attach(io: room_15, filename: '15+Extra+Special.mp3')

room_for_improvement_16 = Track.create(
    title: 'About The Game (Freestyle)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 16,
    seconds: 105
)

room_16 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/16+About+The+Game+Remix+Feat+Trey+Songz.mp3')
room_for_improvement_16.audiofile.attach(io: room_16, filename: '16+About+The+Game+Remix+Feat+Trey+Songz.mp3')

room_for_improvement_17 = Track.create(
    title: 'All This Love (feat. Voyce)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 17,
    seconds: 200
)

room_17 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/17+All+This+Love+Feat+Voyce.mp3')
room_for_improvement_17.audiofile.attach(io: room_17, filename: '17+All+This+Love+Feat+Voyce.mp3')

room_for_improvement_18 = Track.create(
    title: "Drake's Voicemail Box #3",
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 18,
    seconds: 72,
    is_interlude: true
)

room_18 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/18+Drakes+Voice+Skit+4.mp3')
room_for_improvement_18.audiofile.attach(io: room_18, filename: '18+Drakes+Voice+Skit+4.mp3')

room_for_improvement_19 = Track.create(
    title: "A Scorpio's Mind",
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 19,
    seconds: 232
)

room_19 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/19+A+Scorpios+Mind+Feat+Nickelus+F.mp3')
room_for_improvement_19.audiofile.attach(io: room_19, filename: '19+A+Scorpios+Mind+Feat+Nickelus+F.mp3')

room_for_improvement_20 = Track.create(
    title: 'S.T.R.E.S.S.',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 20,
    seconds: 223
)

room_20 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/20+STRESS.mp3')
room_for_improvement_20.audiofile.attach(io: room_20, filename: '20+STRESS.mp3')

room_for_improvement_21 = Track.create(
    title: 'Try Harder',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 21,
    seconds: 142
)

room_21 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/21+Try+Harder.mp3')
room_for_improvement_21.audiofile.attach(io: room_21, filename: '21+Try+Harder.mp3')

room_for_improvement_22 = Track.create(
    title: 'Kick, Push (Remix)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 22,
    seconds: 284
)

room_22 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/22+Lupe+Fiasco+Ft.+Drake+-+Kick+Push+Remix.mp3')
room_for_improvement_22.audiofile.attach(io: room_22, filename: '22+Lupe+Fiasco+Ft.+Drake+-+Kick+Push+Remix.mp3')

room_for_improvement_23 = Track.create(
    title: 'U.P.A. (Outro)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 23,
    seconds: 134,
    is_interlude: true
)

room_23 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/drake-room/23+UPA+Outro.mp3')
room_for_improvement_23.audiofile.attach(io: room_23, filename: '23+UPA+Outro.mp3')

friday_night_lights_01 = Track.create(
    title: 'Friday Night Lights (Intro)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 1,
    seconds: 105,
    is_interlude: true
)

friday_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/01+Friday+Night+Lights+Intro.mp3')
friday_night_lights_01.audiofile.attach(io: friday_01, filename: '01+Friday+Night+Lights+Intro.mp3')

friday_night_lights_02 = Track.create(
    title: 'Too Deep For The Intro',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 2,
    seconds: 225
)

friday_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/02+Too+Deep+For+The+Intro.mp3')
friday_night_lights_02.audiofile.attach(io: friday_02, filename: '02+Too+Deep+For+The+Intro.mp3')

friday_night_lights_03 = Track.create(
    title: "Before I'm Gone",
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 3,
    seconds: 264
)

friday_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/03+Before+Im+Gone.mp3')
friday_night_lights_03.audiofile.attach(io: friday_03, filename: '03+Before+Im+Gone.mp3')

friday_night_lights_04 = Track.create(
    title: 'Back To The Topic (Freestyle)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 4,
    seconds: 180
)

friday_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/04+Back+To+The+Topic+Freestyle.mp3')
friday_night_lights_04.audiofile.attach(io: friday_04, filename: '04+Back+To+The+Topic+Freestyle.mp3')

friday_night_lights_05 = Track.create(
    title: 'You Got It (feat. Wale)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 5,
    seconds: 287
)

friday_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/05+You+Got+It.mp3')
friday_night_lights_05.audiofile.attach(io: friday_05, filename: '05+You+Got+It.mp3')

friday_night_lights_06 = Track.create(
    title: 'Villematic',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 6,
    seconds: 193
)

friday_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/06+Villematic.mp3')
friday_night_lights_06.audiofile.attach(io: friday_06, filename: '06+Villematic.mp3')

friday_night_lights_07 = Track.create(
    title: 'Enchanted (feat. Omen)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 7,
    seconds: 251
)

friday_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/07+Enchanted.mp3')
friday_night_lights_07.audiofile.attach(io: friday_07, filename: '07+Enchanted.mp3')

friday_night_lights_08 = Track.create(
    title: 'Blow Up',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 8,
    seconds: 300
)

friday_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/08+Blow+Up.mp3')
friday_night_lights_08.audiofile.attach(io: friday_08, filename: '08+Blow+Up.mp3')

friday_night_lights_09 = Track.create(
    title: 'Higher',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 9,
    seconds: 229
)

friday_09 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/09+Higher.mp3')
friday_night_lights_09.audiofile.attach(io: friday_09, filename: '09+Higher.mp3')

friday_night_lights_10 = Track.create(
    title: 'In The Morning (feat. Drake)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 10,
    seconds: 234
)

friday_10 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/10+In+The+Morning.mp3')
friday_night_lights_10.audiofile.attach(io: friday_10, filename: '10+In+The+Morning.mp3')

friday_night_lights_11 = Track.create(
    title: '2Face',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 11,
    seconds: 286
)

friday_11 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/11+2Face.mp3')
friday_night_lights_11.audiofile.attach(io: friday_11, filename: '11+2Face.mp3')

friday_night_lights_12 = Track.create(
    title: 'The Autograph',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 12,
    seconds: 223
)

friday_12 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/12+The+Autograph.mp3')
friday_night_lights_12.audiofile.attach(io: friday_12, filename: '12+The+Autograph.mp3')

friday_night_lights_13 = Track.create(
    title: 'Best Friend',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 13,
    seconds: 205
)

friday_13 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/13+Best+Friend.mp3')
friday_night_lights_13.audiofile.attach(io: friday_13, filename: '13+Best+Friend.mp3')

friday_night_lights_14 = Track.create(
    title: 'Cost Me A Lot',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 14,
    seconds: 198
)

friday_14 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/14+Cost+Me+A+Lot.mp3')
friday_night_lights_14.audiofile.attach(io: friday_14, filename: '14+Cost+Me+A+Lot.mp3')

friday_night_lights_15 = Track.create(
    title: 'Premeditated Murder',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 15,
    seconds: 234
)

friday_15 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/15+Premeditated+Murder.mp3')
friday_night_lights_15.audiofile.attach(io: friday_15, filename: '15+Premeditated+Murder.mp3')

friday_night_lights_16 = Track.create(
    title: 'Home For The Holidays',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 16,
    seconds: 235
)

friday_16 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/16+Home+For+The+Holidays.mp3')
friday_night_lights_16.audiofile.attach(io: friday_16, filename: '16+Home+For+The+Holidays.mp3')

friday_night_lights_17 = Track.create(
    title: 'Love Me Not',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 17,
    seconds: 211
)

friday_17 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/17+Love+Me+Not.mp3')
friday_night_lights_17.audiofile.attach(io: friday_17, filename: '17+Love+Me+Not.mp3')

friday_night_lights_18 = Track.create(
    title: 'See World',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 18,
    seconds: 254
)

friday_18 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/18+See+World.mp3')
friday_night_lights_18.audiofile.attach(io: friday_18, filename: '18+See+World.mp3')

friday_night_lights_19 = Track.create(
    title: 'Farewell',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 19,
    seconds: 212
)

friday_19 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/19+Farewell.mp3')
friday_night_lights_19.audiofile.attach(io: friday_19, filename: '19+Farewell.mp3')

friday_night_lights_20 = Track.create(
    title: 'Looking For Trouble (Bonus Track)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 20,
    seconds: 335
)

friday_20 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jcole-friday/20+Looking+For+Trouble+Bonus.mp3')
friday_night_lights_20.audiofile.attach(io: friday_20, filename: '20+Looking+For+Trouble+Bonus.mp3')

division_01 = Track.create(
    title: 'Medallion',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 1,
    seconds: 147
)

div_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/01+Medallion.mp3')
division_01.audiofile.attach(io: div_01, filename: '01+Medallion.mp3')

division_02 = Track.create(
    title: 'Nxwhere',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 2,
    seconds: 197
)

div_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/02+Nxwhere.mp3')
division_02.audiofile.attach(io: div_02, filename: '02+Nxwhere.mp3')

division_03 = Track.create(
    title: 'Eternal',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 3,
    seconds: 159
)

div_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/03+Eternal.mp3')
division_03.audiofile.attach(io: div_03, filename: '03+Eternal.mp3')

division_04 = Track.create(
    title: 'Midnight Charm',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 4,
    seconds: 178
)

div_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/04+Midnight+Charm.mp3')
division_04.audiofile.attach(io: div_04, filename: '04+Midnight+Charm.mp3')

division_05 = Track.create(
    title: 'Blameless',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 5,
    seconds: 186
)

div_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/05+Blameless.mp3')
division_05.audiofile.attach(io: div_05, filename: '05+Blameless.mp3')

division_06 = Track.create(
    title: 'No Sympathy',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 6,
    seconds: 187
)

div_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/06+No+Sympathy.mp3')
division_06.audiofile.attach(io: div_06, filename: '06+No+Sympathy.mp3')

division_07 = Track.create(
    title: 'Baby Powder',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 7,
    seconds: 177
)

div_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/07+Baby+Powder.mp3')
division_07.audiofile.attach(io: div_07, filename: '07+Baby+Powder.mp3')

division_08 = Track.create(
    title: 'Resume',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 8,
    seconds: 180
)

div_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/08+Resume.mp3')
division_08.audiofile.attach(io: div_08, filename: '08+Resume.mp3')

division_09 = Track.create(
    title: 'Mellow Eyes',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 9,
    seconds: 183
)

div_09 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/09+Mellow+Eyes.mp3')
division_09.audiofile.attach(io: div_09, filename: '09+Mellow+Eyes.mp3')

division_10 = Track.create(
    title: 'Division',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 10,
    seconds: 172
)

div_10 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/10+Division.mp3')
division_10.audiofile.attach(io: div_10, filename: '10+Division.mp3')

division_11 = Track.create(
    title: 'Exit Wounds',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 11,
    seconds: 186
)

div_11 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/11+Exit+Wounds.mp3')
division_11.audiofile.attach(io: div_11, filename: '11+Exit+Wounds.mp3')

division_12 = Track.create(
    title: 'Crybaby',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 12,
    seconds: 235
)

div_12 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jenevieve-division/12+Crybaby.mp3')
division_12.audiofile.attach(io: div_12, filename: '12+Crybaby.mp3')

sailing_souls_01 = Track.create(
    title: 'The Beginning',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 1,
    seconds: 9,
    is_interlude: true
)

sailing_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/01+the+beginning.mp3')
sailing_souls_01.audiofile.attach(io: sailing_01, filename: '01+the+beginning.mp3')

sailing_souls_02 = Track.create(
    title: 'Stranger',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 2,
    seconds: 215
)

sailing_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/02+stranger.mp3')
sailing_souls_02.audiofile.attach(io: sailing_02, filename: '02+stranger.mp3')

sailing_souls_03 = Track.create(
    title: 'Hoe (feat. Miguel, Gucci Mane)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 3,
    seconds: 218
)

sailing_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/03+hoe+feat+Miguel.mp3')
sailing_souls_03.audiofile.attach(io: sailing_03, filename: '03+hoe+feat+Miguel.mp3')

sailing_souls_04 = Track.create(
    title: 'July (feat. Drake)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 4,
    seconds: 239
)

sailing_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/04+july+feat+Drake.mp3')
sailing_souls_04.audiofile.attach(io: sailing_04, filename: '04+july+feat+Drake.mp3')

sailing_souls_05 = Track.create(
    title: 'My Mine',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 5,
    seconds: 242
)

sailing_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/05+my+mine.mp3')
sailing_souls_05.audiofile.attach(io: sailing_05, filename: '05+my+mine.mp3')

sailing_souls_06 = Track.create(
    title: 'Popular',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 6,
    seconds: 178
)

sailing_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/06+popular.mp3')
sailing_souls_06.audiofile.attach(io: sailing_06, filename: '06+popular.mp3')

sailing_souls_07 = Track.create(
    title: 'Real Now (feat. Dominik, HOPE, K. Roosevelt)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 7,
    seconds: 261
)

sailing_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/07+real+now+feat+Lite+HOPE+Roosevelt.mp3')
sailing_souls_07.audiofile.attach(io: sailing_07, filename: '07+real+now+feat+Lite+HOPE+Roosevelt.mp3')

sailing_souls_08 = Track.create(
    title: 'Sailing Not Selling (feat. Kanye West)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 8,
    seconds: 181
)

sailing_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/08+sailing+NOT+selling+feat+Kanye.mp3')
sailing_souls_08.audiofile.attach(io: sailing_08, filename: '08+sailing+NOT+selling+feat+Kanye.mp3')

sailing_souls_09 = Track.create(
    title: 'Do Better Blues (feat. HOPE)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 9,
    seconds: 254
)

sailing_09 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/09+do+better+blues+with+HOPE.mp3')
sailing_souls_09.audiofile.attach(io: sailing_09, filename: '09+do+better+blues+with+HOPE.mp3')

sailing_souls_10 = Track.create(
    title: 'Higher',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 10,
    seconds: 232
)

sailing_10 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/10+higher.mp3')
sailing_souls_10.audiofile.attach(io: sailing_10, filename: '10+higher.mp3')

sailing_souls_11 = Track.create(
    title: 'You vs Them',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 11,
    seconds: 205
)

sailing_11 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/11+you+vs+them.mp3')
sailing_souls_11.audiofile.attach(io: sailing_11, filename: '11+you+vs+them.mp3')

sailing_souls_12 = Track.create(
    title: 'Space Jam',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 12,
    seconds: 179
)

sailing_12 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/12+space+jam.mp3')
sailing_souls_12.audiofile.attach(io: sailing_12, filename: '12+space+jam.mp3')

sailing_souls_13 = Track.create(
    title: 'Growing Apart Too (feat. Kendrick Lamar, HOPE)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 13,
    seconds: 204
)

sailing_13 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jhene-sailing/13+growing+apart+too+feat+Kendrick+Lamar+HOPE.mp3')
sailing_souls_13.audiofile.attach(io: sailing_13, filename: '13+growing+apart+too+feat+Kendrick+Lamar+HOPE.mp3')

mischief_01 = Track.create(
    title: 'Intro',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 1,
    seconds: 73,
    is_interlude: true
)

misc_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/miguel-mischief/01+1-+Intro.mp3')
mischief_01.audiofile.attach(io: misc_01, filename: '01+1-+Intro.mp3')

mischief_02 = Track.create(
    title: 'Ooh Ahh!',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 2,
    seconds: 154
)

misc_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/miguel-mischief/02+2-+Ooh+Ahh!.mp3')
mischief_02.audiofile.attach(io: misc_02, filename: '02+2-+Ooh+Ahh!.mp3')

mischief_03 = Track.create(
    title: 'All Night Long',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 3,
    seconds: 172
)

misc_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/miguel-mischief/03+3-+All+Night+Long.mp3')
mischief_03.audiofile.attach(io: misc_03, filename: '03+3-+All+Night+Long.mp3')

mischief_04 = Track.create(
    title: 'Strawberry Amazing',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 4,
    seconds: 207
)

misc_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/miguel-mischief/04+4-+Strawberry+Amazing.mp3')
mischief_04.audiofile.attach(io: misc_04, filename: '04+4-+Strawberry+Amazing.mp3')

mischief_05 = Track.create(
    title: 'Dig',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 5,
    seconds: 157
)

misc_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/miguel-mischief/05+5-+Dig.mp3')
mischief_05.audiofile.attach(io: misc_05, filename: '05+5-+Dig.mp3')

mischief_06 = Track.create(
    title: 'Overload',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 6,
    seconds: 182
)

misc_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/miguel-mischief/06+6-+Overload.mp3')
mischief_06.audiofile.attach(io: misc_06, filename: '06+6-+Overload.mp3')

mischief_07 = Track.create(
    title: 'Pick Up The Pace',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 7,
    seconds: 135
)

misc_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/miguel-mischief/07+7-+Pick+Up+The+Pace.mp3')
mischief_07.audiofile.attach(io: misc_07, filename: '07+7-+Pick+Up+The+Pace.mp3')

mischief_08 = Track.create(
    title: 'Super(natural)',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 8,
    seconds: 239
)

misc_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/miguel-mischief/08+8-+Supernatural.mp3')
mischief_08.audiofile.attach(io: misc_08, filename: '08+8-+Supernatural.mp3')

black_water_01 = Track.create(
    title: 'Black Water',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 1,
    seconds: 176
)

black_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/01+Black+Water.mp3')
black_water_01.audiofile.attach(io: black_01, filename: '01+Black+Water.mp3')

black_water_02 = Track.create(
    title: 'Before The Storm (Interlude)',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 2,
    seconds: 23,
    is_interlude: true
)

black_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/02+Before+the+Storm.mp3')
black_water_02.audiofile.attach(io: black_02, filename: '02+Before+the+Storm.mp3')

black_water_03 = Track.create(
    title: 'Vulnerable (feat. Travis Scott)',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 3,
    seconds: 206
)

black_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/03+Vulnerable.MP3')
black_water_03.audiofile.attach(io: black_03, filename: '03+Vulnerable.MP3')

black_water_04 = Track.create(
    title: 'Secret Weapon',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 4,
    seconds: 190
)

black_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/04+Secret+Weapon.mp3')
black_water_04.audiofile.attach(io: black_04, filename: '04+Secret+Weapon.mp3')

black_water_05 = Track.create(
    title: 'Video Tapes (Interlude)',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 5,
    seconds: 39,
    is_interlude: true
)

black_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/05+Video+Tapes.mp3')
black_water_05.audiofile.attach(io: black_05, filename: '05+Video+Tapes.mp3')

black_water_06 = Track.create(
    title: 'Midnight Sun',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 6,
    seconds: 272
)

black_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/06+Midnight+Sun.mp3')
black_water_06.audiofile.attach(io: black_06, filename: '06+Midnight+Sun.mp3')

black_water_07 = Track.create(
    title: '1 For Me',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 7,
    seconds: 208
)

black_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/07+1+for+Me.mp3')
black_water_07.audiofile.attach(io: black_07, filename: '07+1+for+Me.mp3')

black_water_08 = Track.create(
    title: 'Daybreak (Interlude)',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 8,
    seconds: 34,
    is_interlude: true
)

black_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/08+Daybreak.mp3')
black_water_08.audiofile.attach(io: black_08, filename: '08+Daybreak.mp3')

black_water_09 = Track.create(
    title: 'Fugitive',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 9,
    seconds: 134
)

black_09 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/09+Fugitive.mp3')
black_water_09.audiofile.attach(io: black_09, filename: '09+Fugitive.mp3')

black_water_10 = Track.create(
    title: 'Stunt',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 10,
    seconds: 215
)

black_10 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/10+Stunt.mp3')
black_water_10.audiofile.attach(io: black_10, filename: '10+Stunt.mp3')

black_water_11 = Track.create(
    title: 'Just A Taste',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 11,
    seconds: 197
)

black_11 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/11+Just+A+Taste.mp3')
black_water_11.audiofile.attach(io: black_11, filename: '11+Just+A+Taste.mp3')

black_water_12 = Track.create(
    title: 'Middle Of Nowhere',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 12,
    seconds: 192
)

black_12 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/12+Middle+of+Nowhere.mp3')
black_water_12.audiofile.attach(io: black_12, filename: '12+Middle+of+Nowhere.mp3')

black_water_13 = Track.create(
    title: "Ain't Ready...",
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 13,
    seconds: 92
)

black_13 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-blackwater/13+Aint+Ready.mp3')
black_water_13.audiofile.attach(io: black_13, filename: '13+Aint+Ready.mp3')

in_case_we_die_01 = Track.create(
    title: 'The Last Night On Earth',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 1,
    seconds: 278
)

case_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/01+The+Last+Night+On+Earth.mp3')
in_case_we_die_01.audiofile.attach(io: case_01, filename: '01+The+Last+Night+On+Earth.mp3')

in_case_we_die_02 = Track.create(
    title: 'My High',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 2,
    seconds: 269
)

case_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/02+My+High.mp3')
in_case_we_die_02.audiofile.attach(io: case_02, filename: '02+My+High.mp3')

in_case_we_die_03 = Track.create(
    title: 'Let You Love Me',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 3,
    seconds: 252
)

case_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/03+Let+You+Love+Me.mp3')
in_case_we_die_03.audiofile.attach(io: case_03, filename: '03+Let+You+Love+Me.mp3')

in_case_we_die_04 = Track.create(
    title: 'That',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 4,
    seconds: 344
)

case_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/04+That.mp3')
in_case_we_die_04.audiofile.attach(io: case_04, filename: '04+That.mp3')

in_case_we_die_05 = Track.create(
    title: 'The Will To Survive (Interlude)',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 5,
    seconds: 37,
    is_interlude: true
)

case_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/05+The+Will+to+Survive.mp3')
in_case_we_die_05.audiofile.attach(io: case_05, filename: '05+The+Will+to+Survive.mp3')

in_case_we_die_06 = Track.create(
    title: 'Boss',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 6,
    seconds: 221
)

case_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/06+Boss.mp3')
in_case_we_die_06.audiofile.attach(io: case_06, filename: '06+Boss.mp3')

in_case_we_die_07 = Track.create(
    title: 'I Tried',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 7,
    seconds: 275
)

case_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/07+I+Tried.mp3')
in_case_we_die_07.audiofile.attach(io: case_07, filename: '07+I+Tried.mp3')

in_case_we_die_08 = Track.create(
    title: 'Another Season',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 8,
    seconds: 247
)

case_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/08+Another+Season.mp3')
in_case_we_die_08.audiofile.attach(io: case_08, filename: '08+Another+Season.mp3')

in_case_we_die_09 = Track.create(
    title: 'This Feeling',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 9,
    seconds: 201
)

case_09 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/09+This+Feeling.mp3')
in_case_we_die_09.audiofile.attach(io: case_09, filename: '09+This+Feeling.mp3')

in_case_we_die_10 = Track.create(
    title: 'Stumble',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 10,
    seconds: 405
)

case_10 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/10+Stumble.mp3')
in_case_we_die_10.audiofile.attach(io: case_10, filename: '10+Stumble.mp3')

in_case_we_die_11 = Track.create(
    title: 'Crossing The Cosmo',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 11,
    seconds: 227
)

case_11 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/11+Crossing+The+Cosmo.mp3')
in_case_we_die_11.audiofile.attach(io: case_11, filename: '11+Crossing+The+Cosmo.mp3')

in_case_we_die_12 = Track.create(
    title: 'Fading (Interlude)',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 12,
    seconds: 86,
    is_interlude: true
)

case_12 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/12+Fading.mp3')
in_case_we_die_12.audiofile.attach(io: case_12, filename: '12+Fading.mp3')

in_case_we_die_13 = Track.create(
    title: 'Biding My Time',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 13,
    seconds: 165
)

case_13 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/13+Biding+My+Time.mp3')
in_case_we_die_13.audiofile.attach(io: case_13, filename: '13+Biding+My+Time.mp3')

in_case_we_die_14 = Track.create(
    title: 'Heaven (Interlude)',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 14,
    seconds: 129,
    is_interlude: true
)

case_14 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/14+Heaven.mp3')
in_case_we_die_14.audiofile.attach(io: case_14, filename: '14+Heaven.mp3')

in_case_we_die_15 = Track.create(
    title: 'Chainless (Bonus Track)',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 15,
    seconds: 191
)

case_15 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-in-case/15+Chainless+Bonus+Track.mp3')
in_case_we_die_15.audiofile.attach(io: case_15, filename: '15+Chainless+Bonus+Track.mp3')

reverie_01 = Track.create(
    title: 'Fear Not',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 1,
    seconds: 153
)

rev_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/01+Fear+Not.mp3')
reverie_01.audiofile.attach(io: rev_01, filename: '01+Fear+Not.mp3')

reverie_02 = Track.create(
    title: 'Stargazing',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 2,
    seconds: 225
)

rev_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/02+Stargazing.mp3')
reverie_02.audiofile.attach(io: rev_02, filename: '02+Stargazing.mp3')

reverie_03 = Track.create(
    title: 'Yours',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 3,
    seconds: 277
)

rev_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/03+Yours.mp3')
reverie_03.audiofile.attach(io: rev_03, filename: '03+Yours.mp3')

reverie_04 = Track.create(
    title: 'Slow',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 4,
    seconds: 268
)

rev_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/04+Slow.mp3')
reverie_04.audiofile.attach(io: rev_04, filename: '04+Slow.mp3')

reverie_05 = Track.create(
    title: 'Another Me',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 5,
    seconds: 249
)

rev_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/05+Another+Me.mp3')
reverie_05.audiofile.attach(io: rev_05, filename: '05+Another+Me.mp3')

reverie_06 = Track.create(
    title: 'Come When I Call',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 6,
    seconds: 274
)

rev_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/06+Come+When+I+Call.mp3')
reverie_06.audiofile.attach(io: rev_06, filename: '06+Come+When+I+Call.mp3')

reverie_07 = Track.create(
    title: 'Illusions (Interlude)',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 7,
    seconds: 45,
    is_interlude: true
)

rev_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/07+Illusions.mp3')
reverie_07.audiofile.attach(io: rev_07, filename: '07+Illusions.mp3')

reverie_08 = Track.create(
    title: 'Reverie',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 8,
    seconds: 237
)

rev_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/08+Reverie.mp3')
reverie_08.audiofile.attach(io: rev_08, filename: '08+Reverie.mp3')

reverie_09 = Track.create(
    title: "I'm Selfish",
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 9,
    seconds: 162
)

rev_09 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/09+I_m+Selfish.mp3')
reverie_09.audiofile.attach(io: rev_09, filename: '09+I_m+Selfish.mp3')

reverie_10 = Track.create(
    title: 'Ecstasy',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 10,
    seconds: 203
)

rev_10 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/10+Ecstasy.mp3')
reverie_10.audiofile.attach(io: rev_10, filename: '10+Ecstasy.mp3')

reverie_11 = Track.create(
    title: 'Who Am I Working For?',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 11,
    seconds: 227
)

rev_11 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/11+Who+Am+I+Working+For_.mp3')
reverie_11.audiofile.attach(io: rev_11, filename: '11+Who+Am+I+Working+For_.mp3')

reverie_12 = Track.create(
    title: 'Let You Love Me (XXYYXX Remix)',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 12,
    seconds: 228
)

rev_12 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/tinashe-reverie/12+Let+You+Love+Me+Xxyyxx+Remix.mp3')
reverie_12.audiofile.attach(io: rev_12, filename: '12+Let+You+Love+Me+Xxyyxx+Remix.mp3')

echoes_of_silence_01 = Track.create(
    title: 'D.D.',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 1,
    seconds: 275
)

echoes_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-echoes/01+DD.mp3')
echoes_of_silence_01.audiofile.attach(io: echoes_01, filename: '01+DD.mp3')

echoes_of_silence_02 = Track.create(
    title: 'Montreal',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 2,
    seconds: 250
)

echoes_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-echoes/02+Montreal.mp3')
echoes_of_silence_02.audiofile.attach(io: echoes_02, filename: '02+Montreal.mp3')

echoes_of_silence_03 = Track.create(
    title: 'Outside',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 3,
    seconds: 260
)

echoes_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-echoes/03+Outside.mp3')
echoes_of_silence_03.audiofile.attach(io: echoes_03, filename: '03+Outside.mp3')

echoes_of_silence_04 = Track.create(
    title: 'XO / The Host',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 4,
    seconds: 443
)

echoes_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-echoes/04+XO+_+The+Host.mp3')
echoes_of_silence_04.audiofile.attach(io: echoes_04, filename: '04+XO+_+The+Host.mp3')

echoes_of_silence_05 = Track.create(
    title: 'Initiation',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 5,
    seconds: 260
)

echoes_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-echoes/05+Initiation.mp3')
echoes_of_silence_05.audiofile.attach(io: echoes_05, filename: '05+Initiation.mp3')

echoes_of_silence_06 = Track.create(
    title: 'Same Old Song (feat. Juicy J)',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 6,
    seconds: 312
)

echoes_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-echoes/06+Same+Old+Song.mp3')
echoes_of_silence_06.audiofile.attach(io: echoes_06, filename: '06+Same+Old+Song.mp3')

echoes_of_silence_07 = Track.create(
    title: 'The Fall',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 7,
    seconds: 345
)

echoes_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-echoes/07+The+Fall.mp3')
echoes_of_silence_07.audiofile.attach(io: echoes_07, filename: '07+The+Fall.mp3')

echoes_of_silence_08 = Track.create(
    title: 'Next',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 8,
    seconds: 360
)

echoes_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-echoes/08+Next.mp3')
echoes_of_silence_08.audiofile.attach(io: echoes_08, filename: '08+Next.mp3')

echoes_of_silence_09 = Track.create(
    title: 'Echoes Of Silence',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 9,
    seconds: 242
)

echoes_09 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-echoes/09+Echoes+Of+Silence.mp3')
echoes_of_silence_09.audiofile.attach(io: echoes_09, filename: '/09+Echoes+Of+Silence.mp3')

house_of_balloons_01 = Track.create(
    title: 'High For This',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 1,
    seconds: 247
)

balloons_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-house/01+High+For+This.mp3')
house_of_balloons_01.audiofile.attach(io: balloons_01, filename: '01+High+For+This.mp3')

house_of_balloons_02 = Track.create(
    title: 'What You Need',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 2,
    seconds: 206
)

balloons_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-house/02+What+You+Need.mp3')
house_of_balloons_02.audiofile.attach(io: balloons_02, filename: '02+What+You+Need.mp3')

house_of_balloons_03 = Track.create(
    title: 'House Of Balloons / Glass Table Girls',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 3,
    seconds: 407
)

balloons_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-house/03+House+Of+Balloons+-+Glass+Table+Girls.mp3')
house_of_balloons_03.audiofile.attach(io: balloons_03, filename: '03+House+Of+Balloons+-+Glass+Table+Girls.mp3')

house_of_balloons_04 = Track.create(
    title: 'The Morning',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 4,
    seconds: 315
)

balloons_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-house/04+The+Morning.mp3')
house_of_balloons_04.audiofile.attach(io: balloons_04, filename: '04+The+Morning.mp3')

house_of_balloons_05 = Track.create(
    title: 'Wicked Games',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 5,
    seconds: 325
)

balloons_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-house/05+Wicked+Games.mp3')
house_of_balloons_05.audiofile.attach(io: balloons_05, filename: '05+Wicked+Games.mp3')

house_of_balloons_06 = Track.create(
    title: 'The Party & The After Party',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 6,
    seconds: 459
)

balloons_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-house/06+The+Party+_+The+After+Party.mp3')
house_of_balloons_06.audiofile.attach(io: balloons_06, filename: '06+The+Party+_+The+After+Party.mp3')

house_of_balloons_07 = Track.create(
    title: 'Coming Down',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 7,
    seconds: 295
)

balloons_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-house/07+Coming+Down.mp3')
house_of_balloons_07.audiofile.attach(io: balloons_07, filename: '07+Coming+Down.mp3')

house_of_balloons_08 = Track.create(
    title: 'Loft Music',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 8,
    seconds: 364
)

balloons_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-house/08+Loft+Music.mp3')
house_of_balloons_08.audiofile.attach(io: balloons_08, filename: '08+Loft+Music.mp3')

house_of_balloons_09 = Track.create(
    title: 'The Knowing',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 9,
    seconds: 341
)

balloons_09 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-house/09+The+Knowing.mp3')
house_of_balloons_09.audiofile.attach(io: balloons_09, filename: '09+The+Knowing.mp3')

thursday_01 = Track.create(
    title: 'Lonely Star',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 1,
    seconds: 349
)

thurs_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-thursday/01+Lonely+Star.mp3')
thursday_01.audiofile.attach(io: thurs_01, filename: '01+Lonely+Star.mp3')

thursday_02 = Track.create(
    title: 'Life Of The Party',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 2,
    seconds: 297
)

thurs_02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-thursday/02+Life+Of+The+Party.mp3')
thursday_02.audiofile.attach(io: thurs_02, filename: '02+Life+Of+The+Party.mp3')

thursday_03 = Track.create(
    title: 'Thursday',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 3,
    seconds: 319
)

thurs_03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-thursday/03+Thursday.mp3')
thursday_03.audiofile.attach(io: thurs_03, filename: '03+Thursday.mp3')

thursday_04 = Track.create(
    title: 'The Zone (feat. Drake)',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 4,
    seconds: 418
)

thurs_04 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-thursday/04+The+Zone.mp3')
thursday_04.audiofile.attach(io: thurs_04, filename: '04+The+Zone.mp3')

thursday_05 = Track.create(
    title: 'The Birds, Pt. 1',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 5,
    seconds: 214
)

thurs_05 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-thursday/05+The+Birds+Part+1.mp3')
thursday_05.audiofile.attach(io: thurs_05, filename: '05+The+Birds+Part+1.mp3')

thursday_06 = Track.create(
    title: 'The Birds, Pt. 2',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 6,
    seconds: 350
)

thurs_06 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-thursday/06+The+Birds+Part+2.mp3')
thursday_06.audiofile.attach(io: thurs_06, filename: '06+The+Birds+Part+2.mp3')

thursday_07 = Track.create(
    title: 'Rolling Stone',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 8,
    seconds: 230
)

thurs_07 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-thursday/07+Rolling+Stone.mp3')
thursday_07.audiofile.attach(io: thurs_07, filename: '07+Rolling+Stone.mp3')

thursday_08 = Track.create(
    title: 'Gone',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 7,
    seconds: 487
)

thurs_08 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-thursday/08+Gone.mp3')
thursday_08.audiofile.attach(io: thurs_08, filename: '08+Gone.mp3')

thursday_09 = Track.create(
    title: 'Heaven Or Las Vegas',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 9,
    seconds: 353
)

thurs_09 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/weeknd-thursday/09+Heaven+Or+Las+Vegas.mp3')
thursday_09.audiofile.attach(io: thurs_09, filename: '09+Heaven+Or+Las+Vegas.mp3')

rewind_01 = Track.create(
    title: 'Rewind',
    artist_id: jonzamora.id,
    album_id: rewind.id,
    num: 1,
    seconds: 3759
)

rew_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jz-mixes/Rewind.mp3')
rewind_01.audiofile.attach(io: rew_01, filename: 'Rewind.mp3')

summer_chill_01 = Track.create(
    title: 'A Summer Chill',
    artist_id: jonzamora.id,
    album_id: summerchill.id,
    num: 1,
    seconds: 3572
)

chill_01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/jz-mixes/A+Summer+Chill.mp3')
summer_chill_01.audiofile.attach(io: chill_01, filename: 'A+Summer+Chill.mp3')

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