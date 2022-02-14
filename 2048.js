let game = function () {
  let location = [
    [2, 4, 8, 16],
    [32, 64, 128, 256],
    [512, 1024, 2048, 4096],
    [8192, 0, 0, 0],
  ];
  let score = 0;
  let topscore = 0;
  let topscore1 = localStorage.getItem("topscore");
  if (topscore1 != null) {
    topscore = Number(topscore1);
  }

  function transposearr(arr) {
    const newlocation = [];
    for (let i = 0; i < 4; i++) {
      newlocation.push([]);
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newlocation[j].push(arr[i][j]);
      }
    }
    return newlocation;
  }

  function moveup() {
    location = transposearr(location);
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
          updscore(filter[0] * 2);
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

    const str1 = String(location);
    const str2 = String(newlocation);
    if (str1 != str2) {
      location = newlocation;
      randomcoordin();
    }
    location = transposearr(location);
  }

  function movedown() {
    location = transposearr(location);

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
          updscore(filter[0] * 2);
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

    const str1 = String(location);
    const str2 = String(newlocation);
    console.log(str1, str2);
    if (str1 != str2) {
      location = newlocation;
      randomcoordin();
    }
    location = transposearr(location);
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
          updscore(filter[0] * 2);
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
    const str1 = String(location);
    const str2 = String(newlocation);
    if (str1 != str2) {
      location = newlocation;
      randomcoordin();
    }
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
          updscore(filter[0] * 2);
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
    const str1 = String(location);
    const str2 = String(newlocation);
    if (str1 != str2) {
      location = newlocation;
      randomcoordin();
    }
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
      const arr2 = arr[arr1];
      const num = Math.random() > 0.9 ? 4 : 2;
      location[arr2[0]][arr2[1]] = num;
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
        restart();
      } else {
        text();
      }
    }
  };

  function restart() {
    location = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    score = 0;
    randomcoordin();
    randomcoordin();
    text();
  }

  function updscore(sc) {
    score += sc;
    if (score > topscore) {
      topscore = score;
      localStorage.setItem("topscore", topscore);
    }
  }

  function res() {
    localStorage.removeItem("topscore");
    topscore = 0;
    text();
  }

  document.querySelector(".restopscore").addEventListener("click", res);

  function text() {
    document.querySelector("#score1").innerHTML = score;
    document.querySelector("#score2").innerHTML = topscore;

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const textin = document.getElementById(i + "-" + j);
        if (location[i][j] == 0) {
          textin.innerHTML = " ";
          textin.className = "cell";
        } else {
          textin.innerHTML = location[i][j];
          textin.className = "cell n" + location[i][j];
        }
      }
    }
  }
  text();

  document.querySelector(".restart").addEventListener("click", restart);
};

game();
