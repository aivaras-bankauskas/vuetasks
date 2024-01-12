import { faker } from '@faker-js/faker';
import TaskStatusEnum from '@/enums/taskStatusEnum';
import TaskPriorityEnum from '@/enums/taskPriorityEnum';
import ProjectStatusEnum from '@/enums/projectStatusEnum';
import Project from '@/data/models/projectModel';
import Task from '@/data/models/taskModel';
import projects from '@/data/mocks/projectMock';

const descriptionTemplates = [
	`Develop a new ${faker.hacker.adjective()} feature for ${faker.hacker.noun()}.`,
	`Improve ${faker.hacker.verb()} process by implementing ${faker.hacker.ingverb()} methods.`,
	`Analyze the ${faker.hacker.noun()} data for better ${faker.hacker.verb()} efficiency.`,
	`Enhance the ${faker.hacker.adjective()} ${faker.hacker.noun()} with ${faker.hacker.ingverb()} techniques.`,
	`Refactor the ${faker.hacker.noun()} system to ${faker.hacker.verb()} ${faker.hacker.adjective()} performance.`,
	`Conduct a ${faker.hacker.adjective()} analysis on the ${faker.hacker.noun()} to identify key ${faker.hacker.verb()} areas.`,
	`Design a ${faker.hacker.adjective()} ${faker.hacker.noun()} interface to simplify ${faker.hacker.ingverb()} tasks.`,
	`Integrate ${faker.hacker.adjective()} ${faker.hacker.noun()} solutions into the existing ${faker.hacker.ingverb()} framework.`
];

const createAutoIncrementIdGenerator = (): (() => number) => {
	let currentId = 0;

	return () => currentId += 1;
};

const generateId = createAutoIncrementIdGenerator();

const generateTasksForProject = (numOfTasks: number, project: Project): Task[] => {
	return Array.from({ length: numOfTasks }, () => ({
		id: generateId().toString(),
		name: `${project.key}-${faker.datatype.number({ min: 100, max: 999 })}`,
		description: faker.helpers.arrayElement(descriptionTemplates),
		project: project.name,
		status: getTaskStatusBasedOnProjectStatus(project.status),
		priority: getTaskPriorityBasedOnProjectStatus(project.status),
		createdAt: faker.date.past().toISOString(),
		updatedAt: faker.date.recent().toISOString()
	}));
};

const getTaskStatusBasedOnProjectStatus = (projectStatus: string): string => {
	switch (projectStatus) {
	case ProjectStatusEnum.Active:
		return faker.helpers.arrayElement(Object.values(TaskStatusEnum));
	case ProjectStatusEnum.Overdue:
		return TaskStatusEnum.InProgress;
	case ProjectStatusEnum.OnHold:
		return TaskStatusEnum.OnHold;
	default:
		return TaskStatusEnum.BackLog;
	}
};

const getTaskPriorityBasedOnProjectStatus = (projectStatus: string): string => {
	switch (projectStatus) {
	case ProjectStatusEnum.Active:
		return faker.helpers.arrayElement(Object.values(TaskPriorityEnum));
	case ProjectStatusEnum.Overdue:
		return TaskPriorityEnum.High;
	default:
		return TaskPriorityEnum.Low;
	}
};

const getNumberOfTasksBasedOnStatus = (status: string): number => {
	switch (status) {
	case ProjectStatusEnum.NotStarted:
		return faker.datatype.number({ min: 30, max: 40 });
	case ProjectStatusEnum.Active:
		return faker.datatype.number({ min: 20, max: 30 });
	case ProjectStatusEnum.Overdue:
		return faker.datatype.number({ min: 5, max: 10 });
	case ProjectStatusEnum.OnHold:
		return faker.datatype.number({ min: 1, max: 3 });
	default:
		return 0;
	}
};

const generateTasks = (): Task[] => {
	const allTasks: Task[] = [];

	projects.forEach(project => {
		const randomNumOfTasks = getNumberOfTasksBasedOnStatus(project.status);
		const tasksForProject = generateTasksForProject(randomNumOfTasks, project);
		allTasks.push(...tasksForProject);
	});

	return allTasks;
};

const tasks = generateTasks();

console.log('tasks', tasks);

export default tasks;
