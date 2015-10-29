var stationService = require('../services/stationService');

module.exports = {
  // TODO: can convert this to a single page app.
  //       this function will return a simple view and
  //       will not retrieve stations here.
  getIndex: function (req, res) {
    stationService.get().then(function (stations) {
      return res.render('index', {
        title: 'Stations',
        stations: stations
      });
    });
  },

  // TODO: can remove this method after converting to SPA
  getStation: function (req, res) {
    stationService.get()
      .then(function (stations) {

        // TODO: add functionality to stationService to get a single station, or stations by tags

        var station = stations[req.params.id];

        console.log('station is', station);
        if(!station) {
          throw "Station not found";
        }

        return res.render('station', station);
      }).fail(function (err) {
        console.log('error getStation', err);

        return res.render('error', {
          title: 'Error getting station',
          url: req.url
        })
      });
  }
};