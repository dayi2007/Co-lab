# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

@admin = User.create!(username: 'Dayi', picture: 'https://www.pexels.com/photo/accessories-apparel-beach-eyewear-871062/', email: 'dayi@email.com', password: '123456')

puts "#{User.count} users created"

Post.create!(message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel lobortis arcu, ac dapibus arcu. Morbi sit amet nisl massa. Quisque scelerisque molestie metus, a elementum ipsum. Curabitur elementum nec nisl sit amet tincidunt. Etiam mauris ligula, posuere non hendrerit vitae, interdum a nunc. Donec risus lectus, maximus at dolor vel, luctus blandit sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus mi diam, vehicula mollis dui porttitor, egestas placerat sem. Quisque varius erat odio, a tempor purus ullamcorper varius. Nam id metus nulla. Mauris ac augue ante. In ut dictum lacus, in semper mauris. Etiam sed accumsan diam.', picture: "https://www.pexels.com/photo/accessories-apparel-beach-eyewear-871062/", user: @admin)

Post.create!(message: 'In tristique sapien nisi, eu tempus mauris mollis vel. Aliquam nec massa diam. Curabitur ut augue ac mauris egestas ullamcorper ac quis neque. Integer sit amet magna et metus iaculis tempus. Etiam pulvinar feugiat elit, id dignissim nisi convallis in. Mauris aliquet ex a eleifend vestibulum. Mauris dictum vel risus lobortis feugiat.', user: @admin)

Post.create!(message: 'Aliquam erat volutpat. Sed eu justo nibh. Vivamus orci nisl, facilisis maximus lacinia euismod, pellentesque a risus. Nulla ornare mauris ut varius posuere. Etiam in dignissim mi, ut facilisis nunc. Vivamus sapien libero, pretium sed posuere at, vestibulum nec risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc lacus lacus, ornare eget bibendum eu, ornare vel massa. Suspendisse vehicula leo ipsum, at semper lorem aliquam ac. Quisque condimentum hendrerit maximus. Donec id malesuada purus, eget sagittis diam. Donec dapibus mauris ac urna rutrum tempor. Sed consequat ipsum lectus, vel hendrerit ligula ultricies cursus. Aliquam vitae mollis felis. Nam posuere purus purus.', user: @admin)

Post.create!(message: 'Aliquam erat volutpat. Sed eu justo nibh. Vivamus orci nisl, facilisis maximus lacinia euismod, pellentesque a risus. Nulla ornare mauris ut varius posuere. Etiam in dignissim mi, ut facilisis nunc. Vivamus sapien libero, pretium sed posuere at, vestibulum nec risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc lacus lacus, ornare eget bibendum eu, ornare vel massa. Suspendisse vehicula leo ipsum, at semper lorem aliquam ac. Quisque condimentum hendrerit maximus. Donec id malesuada purus, eget sagittis diam. Donec dapibus mauris ac urna rutrum tempor. Sed consequat ipsum lectus, vel hendrerit ligula ultricies cursus. Aliquam vitae mollis felis. Nam posuere purus purus.', user: @admin)

puts "#{Post.count} users created"