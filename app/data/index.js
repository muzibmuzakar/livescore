export const League = [
  {
    id: 1,
    image: require("../../assets/logo/league/liga1.png"),
    title: "Liga 1",
    from: 'Indonesia'
  },
  {
    id: 2,
    image: require("../../assets/logo/league/liga2.png"),
    title: "Liga 2",
    from: 'Indonesia'
  },
  {
    id: 3,
    image: require("../../assets/logo/league/premierleague.png"),
    title: "Premier League",
    from: 'England'
  },
  {
    id: 4,
    image: require("../../assets/logo/league/laliga.png"),
    title: "La Liga",
    from: 'Spain'
  },
  {
    id: 5,
    image: require("../../assets/logo/league/seriea.png"),
    title: "Serie A",
    from: 'Italy'
  },
  {
    id: 6,
    image: require("../../assets/logo/league/aff.png"),
    title: "AFF 2023",
    from: 'Asean'
  },
];

export const Club = [
  {
    id: 1,
    name: 'Man United',
    logo: require("../../assets/logo/team/ManUtd.png"),
  },
  {
    id: 2,
    name: 'Man City',
    logo: require("../../assets/logo/team/ManCity.png"),
  },
  {
    id: 3,
    name: 'Arsenal',
    logo: require("../../assets/logo/team/Arsenal.png"),
  },
  {
    id: 4,
    name: 'Chelsea',
    logo: require("../../assets/logo/team/Chelsea.png"),
  },
  {
    id: 5,
    name: 'Liverpool',
    logo: require("../../assets/logo/team/Liverpool.png"),
  },
  {
    id: 6,
    name: 'Tottenham',
    logo: require("../../assets/logo/team/Tottenham.png"),
  },
  {
    id: 7,
    name: 'Barcelona',
    logo: require("../../assets/logo/team/Barca.png"),
  },
  {
    id: 8,
    name: 'Real Madrid',
    logo: require("../../assets/logo/team/Madrid.png"),
  },
  {
    id: 9,
    name: 'Atletico Madrid',
    logo: require("../../assets/logo/team/Atletico.png"),
  },
  {
    id: 10,
    name: 'Valencia',
    logo: require("../../assets/logo/team/Valencia.png"),
  },
  {
    id: 11,
    name: 'Bilbao',
    logo: require("../../assets/logo/team/Bilbao.png"),
  },
  {
    id: 12,
    name: 'Sevila',
    logo: require("../../assets/logo/team/Sevila.png"),
  }
];

export const Match = [
  {
    id: 1,
    home: Club[0].name,
    away: Club[1].name,
    homeLogo: Club[0].logo,
    awayLogo: Club[1].logo,
    scoreHome: 2,
    scoreAway: 0,
    league: League[2].image,
  },
  {
    id: 2,
    home: Club[2].name,
    away: Club[3].name,
    homeLogo: Club[2].logo,
    awayLogo: Club[3].logo,
    scoreHome: 1,
    scoreAway: 2,
    league: League[4].image,
  },
  {
    id: 3,
    home: Club[4].name,
    away: Club[5].name,
    homeLogo: Club[4].logo,
    awayLogo: Club[5].logo,
    scoreHome: 1,
    scoreAway: 1,
    league: League[3].image,
  },
];

export const Results = [
  {
    id: 1,
    league: League[2],
    match: [
      {
        id: 1,
        home: Club[0].name,
        away: Club[5].name,
        homeLogo: Club[0].logo,
        awayLogo: Club[5].logo,
        scoreHome: 2,
        scoreAway: 1,
      },
      {
        id: 2,
        home: Club[1].name,
        away: Club[4].name,
        homeLogo: Club[1].logo,
        awayLogo: Club[4].logo,
        scoreHome: 0,
        scoreAway: 1,
      },
      {
        id: 3,
        home: Club[2].name,
        away: Club[3].name,
        homeLogo: Club[2].logo,
        awayLogo: Club[3].logo,
        scoreHome: 3,
        scoreAway: 2,
      }
    ]
  },
  {
    id: 2,
    league: League[3],
    match: [
      {
        id: 1,
        home: Club[6].name,
        away: Club[11].name,
        homeLogo: Club[6].logo,
        awayLogo: Club[11].logo,
        scoreHome: 2,
        scoreAway: 1,
      },
      {
        id: 2,
        home: Club[7].name,
        away: Club[10].name,
        homeLogo: Club[7].logo,
        awayLogo: Club[10].logo,
        scoreHome: 0,
        scoreAway: 1,
      },
      {
        id: 3,
        home: Club[8].name,
        away: Club[9].name,
        homeLogo: Club[8].logo,
        awayLogo: Club[9].logo,
        scoreHome: 3,
        scoreAway: 2,
      }
    ]
  }
];

export const Schedule = [
  {
    id: 1,
    league: League[2],
    match: [
      {
        id: 1,
        home: Club[0],
        away: Club[5],
        date: '2023-07-06T12:00:00Z',
      },
      {
        id: 2,
        home: Club[1],
        away: Club[4],
        date: '2023-07-06T12:00:00Z',
      },
      {
        id: 3,
        home: Club[2],
        away: Club[3],
        date: '2023-07-06T12:00:00Z',
      }
    ]
  },
  {
    id: 2,
    league: League[3],
    match: [
      {
        id: 1,
        home: Club[6],
        away: Club[11],
        date: '2023-07-20T12:00:00Z',
      },
      {
        id: 2,
        home: Club[7],
        away: Club[10],
        date: '2023-07-20T12:00:00Z',
      },
      {
        id: 3,
        home: Club[8],
        away: Club[9],
        date: '2023-07-06T12:00:00Z',
      }
    ]
  }
];

export const statsData = [
  {
    home: {
      possesion: 53,
      shots: 6,
      onGoal: 3,
      pass: 234,
      passAcc: 80,
      intercept: 10,
      tackle: 19,
      fouls: 7,
      yellow: 3,
      red: 0,
      offside: 3,
      corner: 5
    },
    away: {
      possesion: 47,
      shots: 7,
      onGoal: 4,
      pass: 204,
      passAcc: 79,
      intercept: 9,
      tackle: 25,
      fouls: 5,
      yellow: 2,
      red: 0,
      offside: 2,
      corner: 3
    }
  }
];