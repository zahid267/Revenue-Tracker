const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Owner = require('./Owner');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { Owner, User, Gallery, Painting };
