export class Activity {
  public statusColor: string;
  constructor(public name: string, public priority: PrioritiesEnum, public status: StatusEnum) {
    this.statusColor = statusColorMap.get(status);
  }
}

export const enum PrioritiesEnum {
  major = 'Major',
  critical = 'Critical',
  blocker = 'Blocker',
  minor = 'Minor',
  trivial = 'Trivial'
}

export const enum StatusEnum {
  inprogress = 'In Progress',
  open = 'Open',
  inreview = 'In Review',
  done = 'Done'
}

const statusColorMap = new Map();
statusColorMap.set(StatusEnum.open, 'orange');
statusColorMap.set(StatusEnum.inreview, 'yellow');
statusColorMap.set(StatusEnum.inprogress, 'blue');
statusColorMap.set(StatusEnum.done, 'green');
