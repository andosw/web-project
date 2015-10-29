var TuneIn = {
  station: {
    name: 'Alice @ 97.3',
    description: 'Alice @ 97.3 is a local radio station in the San Francisco Bay Area. We\'re known for our music, our outrageous Morning Show and reckless abandon for art, film and all things that inspire. ',
    imageUrl: 'http://cdn-radiotime-logos.tunein.com/s33778q.png',
    streams: [
      //reliability's value will always be between 0 and 100, 100 being most reliable
      {
        url: 'http://7279.live.streamtheworld.com:3690/KLLCFM_SC',
        mediaType: 'windows',
        reliability: 75
      },
      {
        url: 'http://8343.live.streamtheworld.com/KLLCFM_SC',
        mediaType: 'mp3',
        reliability: 40
      },
      {
        url: 'http://9313.live.streamtheworld.com/KLLCFMAAC_SC',
        mediaType: 'aac',
        reliability: 60
      },
      {
        url: 'http://2463.live.streamtheworld.com:3690/KLLCFMDIALU',
        mediaType: 'mp3',
        reliability: 0
      },
      {
        url: 'http://2463.live.streamtheworld.com/KLLCFMDIALUP_SC',
        mediaType: 'flash',
        reliability: 15
      }
    ]
  },

  play: function (stream) {
    if (this.acceptedMediaTypes.indexOf(stream.mediaType) > -1) {
      return Math.random() * 100 < stream.reliability;
    }
    return false;
  }
};

TuneIn.players = {
  html5Player: {
    acceptedMediaTypes: ['mp3', 'aac', 'ogg'],
    play: TuneIn.play
  },
  flashPlayer: {
    acceptedMediaTypes: ['mp3', 'flash'],
    play: TuneIn.play
  }
};