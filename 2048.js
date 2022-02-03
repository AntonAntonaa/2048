let game = function () {
  let location = [
    [2, 0, 0, 0],
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  function transposearr() {
    const newlocation = [];
    for (let i = 0; i < 4; i++) {
      newlocation.push([]);
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; i++) {
        newlocation[j].push(location[i][j]);
      }
    }
    location = newlocation;
  }

  function moveup() {
    transposearr();
    const newlocation = [];
    for (let arr of location) {
      const res = [];
      const filter = arr.filter(function (elem) {
        return elem != 0;
      });
      while (filter.length > 0) {
        if (filter.length == 1) {
          res.push(filter[0]);
          break;
        }
      }
      if (filter.length[0] == filter.length[1]) {
        res.push(filter[0] * 2);
        res.splice(0, 2);
      } else {
        res.push(filter[0]);
        res.splice(0, 1);
      }
      for (let i = 0; arr.length > res.length; i++) {
        res.push(0);
      }
      newlocation.push(res);
    }
    location = newlocation;
    transposearr();
  }

  function movedown() {
    transposearr();
    for (let arr of location) {
      const res = [];
      const filter = arr
        .filter(function (elem) {
          return elem != 0;
        })
        .reverse();
      while (filter.length > 0) {
        if (filter.length == 1) {
          res.push(filter[0]);
          break;
        }
      }
      if (filter.length[0] == filter.length[1]) {
        res.push(filter[0] * 2);
        res.splice(0, 2);
      } else {
        res.push(filter[0]);
        res.splice(0, 1);
      }
      for (let i = 0; arr.length > res.length; i++) {
        res.push(0);
      }
      newlocation.push(res);
    }
    location = newlocation;
    transposearr();
  }

  function moveleft() {
    const newlocation = [];
    for (let arr of location) {
      const res = [];
      const filter = arr.filter(function (elem) {
        return elem != 0;
      });
      while (filter.length > 0) {
        if (filter.length == 1) {
          res.push(filter[0]);
          break;
        }
      }
      if (filter.length[0] == filter.length[1]) {
        res.push(filter[0] * 2);
        res.splice(0, 2);
      } else {
        res.push(filter[0]);
        res.splice(0, 1);
      }
      for (let i = 0; arr.length > res.length; i++) {
        res.push(0);
      }
      newlocation.push(res);
    }
    location = newlocation;
  }

  function moverigt() {
    for (let arr of location) {
      const res = [];
      const filter = arr
        .filter(function (elem) {
          return elem != 0;
        })
        .reverse();
      while (filter.length > 0) {
        if (filter.length == 1) {
          res.push(filter[0]);
          break;
        }
      }
      if (filter.length[0] == filter.length[1]) {
        res.push(filter[0] * 2);
        res.splice(0, 2);
      } else {
        res.push(filter[0]);
        res.splice(0, 1);
      }
      for (let i = 0; arr.length > res.length; i++) {
        res.push(0);
      }
      newlocation.push(res);
    }
    location = newlocation;
  }

  function over() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (location[i][j] == 0) {
          return false;
        }
        if (i < 3) {
          if (location[i][j] == location[i + 1][j]) {
            return false;
          }
        }
        if (j < 3) {
          if (location[i][j] == location[i][j + 1]) {
            return false;
          }
        }
      }
    }
    return true;
  }

  function randomcoordin() {
    while (true) {
      const i = Math.floor(Math.random() * 4);
      const j = Math.floor(Math.random() * 4);
      if (location[i][j] == 0) {
        const num = Math.random() > 0.9 ? 4 : 2;
        location[i][j] = num;
        break;
      }
    }
  }
};

game();