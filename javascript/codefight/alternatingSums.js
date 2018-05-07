// Return an array of two integers, where the first element is the total weight of team 1

export const alternatingSums = (a) => {
    let weightTeam1 = 0;
    let weightTeam2 = 0;
    let team1 = [];
    let team2 = [];

    for (let i = 0; i < a.length; i++) {
      if(i % 2 === 0) {
          team1[team1.length] = a[i];
      } else {
          team2[team2.length] = a[i];
      }
    }

    for (let i = 0; i < team1.length; i++) {
        weightTeam1 += team1[i];
    }

    for (let i = 0; i < team2.length; i++) {
        weightTeam2 += team2[i];
    }

    return [weightTeam1, weightTeam2];
};
