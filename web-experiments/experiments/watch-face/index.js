!(function () {
  const t = 100,
    e = 10,
    a = 3,
    l = 20,
    o = 3,
    s = 75,
    f = 5,
    r = 75,
    h = 5,
    n = 45,
    i = '#fff',
    c = '#d63031',
    d = '#2d3436',
    g = document.getElementById('watch-face'),
    w = g.getContext('2d');
  let y;
  const I = (t) => {
      w.save();
      const { x: e, y: a } = { x: 0, y: 0 };
      w.beginPath(),
        w.arc(e, a, t, 0, 2 * Math.PI),
        (w.strokeStyle = '#45aaf2'),
        (w.lineWidth = 2),
        w.stroke(),
        w.restore();
    },
    P = (t, e) => {
      w.beginPath(),
        w.save(),
        (w.fillStyle = t),
        (w.shadowColor = '#000'),
        (w.shadowBlur = 20),
        (w.shadowOffsetX = -2),
        (w.shadowOffsetY = -2),
        w.arc(0, 0, e, 0, 2 * Math.PI),
        w.clip(),
        w.fill(),
        w.restore();
    },
    v = ({ length: t, width: e, color: a, angle: l, offset: o, type: s }) => {
      w.save(),
        w.rotate(l),
        'fill' === s
          ? ((w.fillStyle = a), w.fillRect(-e / 2, -o, e, t + o))
          : ((w.strokeStyle = a), w.strokeRect(-e / 2, -o, e, t + o)),
        w.restore();
    },
    M = (t) => {
      ((t) => {
        t.putImageData(y, 0, 0);
      })(w);
      const e = t.getSeconds(),
        a = t.getMinutes() + e / 60,
        l = (60 * (t.getHours() + a / 60)) / 12;
      ((t, e, a) => {
        v({
          length: r,
          width: f,
          color: '#dfe6e9',
          angle: e,
          offset: 0,
          type: 'fill',
        }),
          v({
            length: n,
            width: h,
            color: '#dfe6e9',
            angle: a,
            offset: 0,
            type: 'fill',
          }),
          P(i, 6),
          v({
            length: s,
            width: o,
            color: '#d63031',
            angle: t,
            offset: 20,
            type: 'fill',
          }),
          P(c, 4),
          P(d, 2);
      })(k(e) + Math.PI, k(a) + Math.PI, k(l) + Math.PI);
    },
    k = (t) => (2 * Math.PI * t) / 60;
  (() => {
    w.translate(g.width / 2, g.height / 2),
      I(t),
      I(t - e),
      (() => {
        for (let o = 0; o < 12; o++) {
          w.save();
          const s = (o * Math.PI) / 6;
          w.rotate(s),
            w.save(),
            (w.strokeStyle = '#fff'),
            w.strokeRect(-a / 2, -(t - e - 10), a, l),
            w.restore(),
            w.restore();
        }
      })(),
      ((t) => {
        y = t.getImageData(0, 0, t.canvas.width, t.canvas.height);
      })(w);
    setInterval(() => M(new Date()), 1e3);
  })();
})();
