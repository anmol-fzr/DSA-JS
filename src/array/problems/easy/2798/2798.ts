function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  let emps: number = 0;
  for (const hour of hours) {
    if (hour >= target) emps++;
  }
  return emps;
}

export default numberOfEmployeesWhoMetTarget;
