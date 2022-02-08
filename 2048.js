let game = function () {
  let location = [
    [2, 8, 32, 16],
    [128, 64, 2, 8],
    [32, 16, 8, 4],
    [16, 4, 4, 2],
  ];

  function transposearr() {
    const newlocation = [];
    for (let i = 0; i < 4; i++) {
      newlocation.push([]);
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
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
        if (filter[0] == filter[1]) {
          res.push(filter[0] * 2);
          filter.splice(0, 2);
        } else {
          res.push(filter[0]);
          filter.splice(0, 1);
        }
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

    const newlocation = [];
    for (let arr of location) {
      const res = [];
      const filter = arr.reverse().filter(function (elem) {
        return elem != 0;
      });
      while (filter.length > 0) {
        if (filter.length == 1) {
          res.push(filter[0]);
          break;
        }

        if (filter[0] == filter[1]) {
          res.push(filter[0] * 2);
          filter.splice(0, 2);
        } else {
          res.push(filter[0]);
          filter.splice(0, 1);
        }
      }
      for (let i = 0; arr.length > res.length; i++) {
        res.push(0);
      }
      newlocation.push(res.reverse());
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

        if (filter[0] == filter[1]) {
          res.push(filter[0] * 2);
          filter.splice(0, 2);
        } else {
          res.push(filter[0]);
          filter.splice(0, 1);
        }
      }
      for (let i = 0; arr.length > res.length; i++) {
        res.push(0);
      }
      newlocation.push(res);
    }
    location = newlocation;
  }

  function moverigt() {
    const newlocation = [];
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
        if (filter[0] == filter[1]) {
          res.push(filter[0] * 2);
          filter.splice(0, 2);
        } else {
          res.push(filter[0]);
          filter.splice(0, 1);
        }
      }
      for (let i = 0; arr.length > res.length; i++) {
        res.push(0);
      }
      newlocation.push(res.reverse());
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
    const arr = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (location[i][j] == 0) {
          arr.push([i, j]);
        }
      }
    }
    if (arr.length > 0) {
      const arr1 = Math.floor(Math.random() * arr.length);
      const arr2 = arr[arr1]
      const num = Math.random() > 0.9 ? 4 : 2
      location[arr2[0]][arr2[1]]=num
    } 
  }

  document.onkeydown = function (event) {
    if (event.code == "ArrowLeft") {
      moveleft();
    } else if (event.code == "ArrowUp") {
      moveup();
    } else if (event.code == "ArrowRight") {
      moverigt();
    } else if (event.code == "ArrowDown") {
      movedown();
    }
    if (event.code.startsWith("Arrow")) {
      if (over()) {
        text();
        alert("проебано");
      } else {
        randomcoordin();
        text();
      }
    }
  };

  function text() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const textin = document.getElementById(i + "-" + j);
        if (location[i][j] == 0) {
          textin.innerHTML = " ";
        } else {
          textin.innerHTML = location[i][j];
        }
      }
    }
  }
  text();
};

game();
