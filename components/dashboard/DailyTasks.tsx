import Task from "./Task"

export default function DailyTasks({styles, tasks}){

    

    return (
        <div className={styles.taskcon}>
            <p>Daily Tasks</p>
            <Task styles={styles} tasks={tasks.t1} />
            <Task styles={styles} tasks={tasks.t2} />
            <Task styles={styles} tasks={tasks.t3} />
            <Task styles={styles} tasks={tasks.t4} />
            <Task styles={styles} tasks={tasks.t5} />

        </div>
    )
}