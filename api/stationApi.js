var stationService = require('../services/stationService.js');

module.exports = {
  create: function (req, res) {
    var station = req.body.station;

    if (!station) {
      return res.bad({
        message: 'invalid request to create station'
      });
    }

    stationService.add(station)
      .then(function () {
        return res.ok({
          message: 'Created'
        });
      }).fail(function (err) {
        console.log('Error creating station', err);
        return res.ise();
      });
  },
  get: function (req, res) {
    var id = req.params.id;
    var tags = req.params.tags;

    // TODO: if tags are present, return stations that contain ALL of those tags

    // TODO: if no tags, but id is present, return that station

    // TODO: if no tags and no id, return all stations

    stationService.get().then(function (stations) {
      res.ok(stations);
    }).fail(function (err) {
      console.log('Error getting stations', err);
      res.ise();
    });
  }
};