
/**
 * Models a task with a title, completion state and completion date
 */
export class Task {
    title: string;
    completion: boolean;
    dateCompleted?: Date;
    
    constructor(title: string, completion?: boolean, dateCompleted?: Date) {
        this.title = title;
        this.completion = (completion == undefined) ? false : completion;
        this.dateCompleted = undefined;
    }

    completeTask() {
        this.completion = true;
        this.dateCompleted = new Date();
    }
}