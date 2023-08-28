export enum TaskStatus {
  EN_COURS = 'en cours',
  A_FAIRE = 'a faire',
  TERMINEE = 'terminée'
}

export class Task {
  constructor(
    public title: string,
    public description: string,
    public status: TaskStatus,
    public date: Date
  ) {}
}
