var cache = require('./cacheService'),
  uuid = require('node-uuid');

var stationKey = 'stations';
cache.set(stationKey, {});

module.exports = {
  get: function () {
    return cache.get(stationKey)
      .fail(function (err) {
        console.log('Error fetching from cache', err);
      });
  },
  add: function (station) {
    station.id = uuid.v4();

    return cache.get(stationKey)
      .then(function (stations) {
        if (!stations) {
          throw "ERROR: Stations not in cache";
        }

        stations[station.id] = station;

        return cache.set(stationKey, stations);
      }).fail(function (err) {
        console.log('Error with from cache', err);
      });
  },
  stationKey: stationKey
};