import { Task } from "../../models/Task";
import TaskView from "./TaskView"

export default function DailyTasks({styles, tasks}){


    var tasksToDisplay: Task[] = [];
    tasks.forEach(task => {
        tasksToDisplay.push(<TaskView styles={styles} task={task} />);
    });

    // TODO add filtering for top tasks
    // TODO make this a scrollview of some sort

    return (
        <div className={styles.taskcon}>
            <p className={styles.taskconTitle}>Daily Tasks</p>
            <hr/>
            {tasksToDisplay}
        </div>
    )
}