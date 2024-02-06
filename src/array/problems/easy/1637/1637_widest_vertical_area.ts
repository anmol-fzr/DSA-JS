function maxWidthOfVerticalArea(points: number[][]): number {
  const sortedPoints = [];
  for (let i = 0; i < points.length; i++) {
    sortedPoints[i] = points[i][0];
  }

  sortedPoints.sort();
  let bigDiff = 0;

  for (let i = 0; i < sortedPoints.length - 1; i++) {
    const gap = sortedPoints[i + 1] - sortedPoints[i];
    if (gap > bigDiff) {
      bigDiff = gap;
    }
  }
  return bigDiff;
}

export default maxWidthOfVerticalArea;
