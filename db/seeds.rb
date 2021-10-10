# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

require 'open-uri'

spidey = User.create(username: 'spidey', email: 'spidey@marvel.com', password: 'parker')
miles = User.create(username: 'miles', email: 'miles@marvel.com', password: 'morales')
gwen = User.create(username: 'gwen', email: 'gwen@marvel.com', password: 'gstacy')