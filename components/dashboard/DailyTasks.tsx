import Task from "./Task"

export default function DailyTasks({styles, tasks}){


    var tasksToDisplay = [];
    tasks.forEach(task => {
        tasksToDisplay.push(<Task styles={styles} task={task} />);
    });

    // TODO add filtering for top tasks
    // TODO make this a scrollview of some sort


    return (
        <div className={styles.taskcon}>
            <p className={styles.taskconTitle}>Daily Tasks</p>
            {tasksToDisplay}
        </div>
    )
}