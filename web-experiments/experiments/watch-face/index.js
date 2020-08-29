const CANVAS_DIMENSIONS = {
  width: 225,
  height: 225,
};

const WATCH_DIMENSIONS = {
  radius: 100,
  dialWidth: 10,
  tickWidth: 3,
  tickLenght: 20,
  secHandWidth: 4,
  secHandLenght: 75,
  minHandWidth: 5,
  minHandLenght: 75,
  hourHandWidth: 5,
  hourHandLenght: 45,
};

const canvas = document.getElementById('watch-face');
const context = canvas.getContext('2d');

const getCanvasCenter = () => ({
  x: 0,
  y: 0,
});

const drawDial = (radius) => {
  context.save();

  const { x, y } = getCanvasCenter();
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);

  context.strokeStyle = '#45aaf2';
  context.lineWidth = 2;
  context.stroke();

  context.restore();
};

const drawTick = (angle) => {
  context.save();
  context.strokeStyle = '#fff';

  context.strokeRect(
    -WATCH_DIMENSIONS.tickWidth / 2,
    -(
      WATCH_DIMENSIONS.radius -
      WATCH_DIMENSIONS.dialWidth -
      // WATCH_DIMENSIONS.tickLenght -
      10
    ),
    WATCH_DIMENSIONS.tickWidth,
    WATCH_DIMENSIONS.tickLenght
  );

  context.restore();
};

const drawTicks = () => {
  for (let index = 0; index < 12; index++) {
    context.save();

    const angle = (index * Math.PI) / 6;
    context.rotate(angle);

    drawTick(index);

    context.restore();
  }
};

const drawHand = (length, width, color, angle, offset) => {
  context.save();

  context.rotate(angle);
  context.strokeStyle = color;

  context.strokeRect(-width / 2, -offset, width, length + offset);

  context.restore();
};

const drawWatchFace = () => {
  // translate context to center of canvas
  context.translate(canvas.width / 2, canvas.height / 2);

  drawDial(WATCH_DIMENSIONS.radius);
  drawDial(WATCH_DIMENSIONS.radius - WATCH_DIMENSIONS.dialWidth);

  drawTicks();

  drawHand(
    WATCH_DIMENSIONS.secHandLenght,
    WATCH_DIMENSIONS.secHandWidth,
    '#fa8231',
    -Math.PI / 6,
    20
  );
  drawHand(
    WATCH_DIMENSIONS.hourHandLenght,
    WATCH_DIMENSIONS.hourHandWidth,
    '#fff',
    -Math.PI / 2,
    15
  );
};

// BEGIN

drawWatchFace();
