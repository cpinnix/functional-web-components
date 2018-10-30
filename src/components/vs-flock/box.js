import point from "./point/point";
import lte from "./point/lte";
import gte from "./point/gte";

const contains = (a, b, p) => lte(a, p) && gte(b, p);

const overlaps = (a, b) =>
  contains(a.low, a.high, b.low) ||
  contains(a.low, a.high, b.high) ||
  contains(b.low, b.high, a.low) ||
  contains(b.low, b.high, a.high);

const split = (low, high) => {
  const result = [];
  result.push(new Box(low, point((low.x + high.x) / 2, (low.y + high.y) / 2)));
  result.push(
    new Box(
      point((low.x + high.x) / 2, low.y),
      point(high.x, (low.y + high.y) / 2)
    )
  );
  result.push(new Box(point((low.x + high.x) / 2, (low.y + high.y) / 2), high));
  result.push(
    new Box(
      point(low.x, (low.y + high.y) / 2),
      point((low.x + high.x) / 2, high.y)
    )
  );
  return result;
};

export default class Box {
  constructor(least, greatest) {
    this.low = least;
    this.high = greatest;
  }

  contains(p) {
    return contains(this.low, this.high, p);
  }

  overlaps(box) {
    return overlaps(this, box);
  }

  split() {
    return split(this.low, this.high);
  }
}
