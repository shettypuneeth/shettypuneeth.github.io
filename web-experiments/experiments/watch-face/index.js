!(function () {
  const t = 225,
    e = 225,
    a = {
      radius: 100,
      dialWidth: 10,
      tickWidth: 3,
      tickLenght: 20,
      secHandWidth: 3,
      secHandLenght: 75,
      minHandWidth: 5,
      minHandLenght: 75,
      hourHandWidth: 5,
      hourHandLenght: 45,
      dialColors: ['#45aaf2', '#2ecc71', '#f1c40f', '#1abc9c', '#F97F51'],
      basePivotColor: '#fff',
      topPivotColor: '#d63031',
      screwColor: '#2d3436',
    },
    o = document.getElementById('watch-face'),
    l = o.getContext('2d');
  let n;
  const i = (t) => (2 * Math.PI * t) / 60,
    h = (t, e = '#45aaf2') => {
      l.save();
      const { x: a, y: o } = { x: 0, y: 0 };
      l.beginPath(),
        l.arc(a, o, t, 0, 2 * Math.PI),
        (l.strokeStyle = e),
        (l.lineWidth = 2),
        l.stroke(),
        l.restore();
    },
    s = (t, e) => {
      l.beginPath(),
        l.save(),
        (l.fillStyle = t),
        (l.shadowColor = '#000'),
        (l.shadowBlur = 20),
        (l.shadowOffsetX = -2),
        (l.shadowOffsetY = -2),
        l.arc(0, 0, e, 0, 2 * Math.PI),
        l.clip(),
        l.fill(),
        l.restore();
    },
    d = ({ length: t, width: e, color: a, angle: o, offset: n, type: i }) => {
      l.save(),
        l.rotate(o),
        'fill' === i
          ? ((l.fillStyle = a), l.fillRect(-e / 2, -n, e, t + n))
          : ((l.strokeStyle = a), l.strokeRect(-e / 2, -n, e, t + n)),
        l.restore();
    },
    r = (t) => {
      ((t) => {
        t.putImageData(n, 0, 0);
      })(l);
      const e = t.getSeconds(),
        o = t.getMinutes() + e / 60,
        h = (60 * (t.getHours() + o / 60)) / 12;
      ((t, e, o) => {
        d({
          length: a.minHandLenght,
          width: a.minHandWidth,
          color: '#dfe6e9',
          angle: e,
          offset: 0,
          type: 'fill',
        }),
          d({
            length: a.hourHandLenght,
            width: a.hourHandWidth,
            color: '#dfe6e9',
            angle: o,
            offset: 0,
            type: 'fill',
          }),
          s(a.basePivotColor, 6),
          d({
            length: a.secHandLenght,
            width: a.secHandWidth,
            color: '#d63031',
            angle: t,
            offset: 20,
            type: 'fill',
          }),
          s(a.topPivotColor, 4),
          s(a.screwColor, 2);
      })(i(e) + Math.PI, i(o) + Math.PI, i(h) + Math.PI);
    };
  let c,
    f = !1;
  const g = () => {
      const t = ((t, e = 0) => (
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1) - e)
        ))(a.dialColors.length - 1),
        e = a.dialColors[t];
      h(a.radius, e), h(a.radius - a.dialWidth, e);
    },
    u = () => {
      f
        ? l.clearRect(-t / 2, -e / 2, t, e)
        : l.translate(o.width / 2, o.height / 2),
        g(),
        (() => {
          for (let t = 0; t < 12; t++) {
            l.save();
            const e = (t * Math.PI) / 6;
            l.rotate(e),
              l.save(),
              (l.strokeStyle = '#fff'),
              l.strokeRect(
                -a.tickWidth / 2,
                -(a.radius - a.dialWidth - 10),
                a.tickWidth,
                a.tickLenght
              ),
              l.restore(),
              l.restore();
          }
        })(),
        ((t) => {
          n = t.getImageData(0, 0, t.canvas.width, t.canvas.height);
        })(l),
        c && clearInterval(c),
        (c = setInterval(() => r(new Date()), 1e3));
    };
  (l.canvas.onmousedown = u), u(), (f = !0);
})();
