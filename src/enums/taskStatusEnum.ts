enum TaskStatusEnum {
    BackLog = 'Backlog',
    ToDo = 'To Do',
    OnHold = 'On Hold',
    InProgress = 'In Progress',
    InReview = 'In Review',
    ReadyForDeployment = 'Ready for Deployment',
    DeployedToServer = 'Deployed to Server',
    Testing = 'Testing',
    Returned = 'Returned',
    Completed = 'completed',
    closed = 'closed'
}

export default TaskStatusEnum;
