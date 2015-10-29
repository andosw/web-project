var stationService = require('../services/stationService');

module.exports = function () {
  stationService.add({
    name: 'Alice FM',
    imgUrl: 'http://cdn-radiotime-logos.tunein.com/s33778q.png',
    streamUrl: 'http://8343.live.streamtheworld.com/KLLCFM_SC',
    tags: ['modern-rock', 'san-francisco', 'music']
  })
    .then(function () {
      return stationService.add({
        name: 'CBS Sports Radio',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s188593q.png',
        streamUrl: 'http://8303.live.streamtheworld.com:443/CBSSPORTS_SC',
        tags: ['sports', 'san-francisco', 'talk']
      });
    })
    .then(function () {
      return stationService.add({
        name: 'KRTY Country',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s35159q.png',
        streamUrl: 'http://icy3.abacast.com/empirebroadcasting-krtyfmmp3-64',
        tags: ['country', 'san-jose', 'music']
      });
    })
    .then(stationService.get)
    .then(function (data) {
      console.log('Stations', data);
    });

  console.log('Adding Default Stations');
};
