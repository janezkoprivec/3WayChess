// these are points that make a hexagon with a side length of 1

export const HexagonPoints = [
  {
    x: 0.5,
    y: 0
  },
  {
    x: 1.5,
    y: 0
  },
  {
    x: 2,
    y: 0.8660254037844386
  },
  {
    x: 1.5,
    y: 1.7320508075688772
  },
  {
    x: 0.5,
    y: 1.7320508075688772
  },
  {
    x: 0,
    y: 0.8660254037844386
  }
]

export const HexagonPointsUpscaled = [
  {
    x: 0.49,
    y: 0
  },
  {
    x: 1.51,
    y: 0
  },
  {
    x: 2.01,
    y: 0.8660254037844386
  },
  {
    x: 1.51,
    y: 1.74
  },
  {
    x: 0.49,
    y: 1.74
  },
  {
    x: 0,
    y: 0.8660254037844386
  }
]

export const HexagonPointsUpscaled1 = [
  {
    x: 0.5,
    y: 0
  },
  {
    x: 1.51,
    y: 0
  },
  {
    x: 2.01,
    y: 0.8660254037844386
  },
  {
    x: 1.5,
    y: 1.7320508075688772
  },
  {
    x: 0.49,
    y: 1.7320508075688772
  },
  {
    x: -0.01,
    y: 0.8660254037844386
  }
]

export const HexagonPointsUpscaled2 = [
  {
    x: 0.49,
    y: 0
  },
  {
    x: 1.5,
    y: 0
  },
  {
    x: 2.01,
    y: 0.8660254037844386
  },
  {
    x: 1.51,
    y: 1.7320508075688772
  },
  {
    x: 0.5,
    y: 1.7320508075688772
  },
  {
    x: -0.01,
    y: 0.8660254037844386
  }
]

export const HexagonPointsUpscaled3 = [
  {
    x: 0.5,
    y: -0.01
  },
  {
    x: 1.5,
    y: -0.01
  },
  {
    x: 2,
    y: 0.8660254037844386
  },
  {
    x: 1.5,
    y: 1.742
  },
  {
    x: 0.5,
    y: 1.742
  },
  {
    x: 0,
    y: 0.8660254037844386
  }
]




/*
points string can be constructed like so: 
const pointsString = points.map(point => `${point.x*100},${point.y*100}`).join(' ');

and used like so: 
<Svg width={200} height={2*100*Math.sin(Math.PI/3)} >
  <Polygon points={pointsString} fill="black" />
</Svg>

*/