import { faker } from '@faker-js/faker';
import TaskStatusEnum from '@/enums/taskStatusEnum';
import TaskPriorityEnum from '@/enums/taskPriorityEnum';
import ProjectStatusEnum from '@/enums/projectStatusEnum';
import Project from '@/data/models/projectModel';
import Task from '@/data/models/taskModel';
import projects from '@/data/mocks/projectMock';

const taskStatusValues = Object.values(TaskStatusEnum);
const taskPriorityValues = Object.values(TaskPriorityEnum);

const createAutoIncrement = (start: number = 0): (() => number) => {
	let count = start;

	return () => {
		count += 1;

		return count;
	};
};

const generateDescription = (): string => faker.helpers.arrayElement([
	`Develop a new ${faker.hacker.adjective()} feature for ${faker.hacker.noun()}.`,
	`Improve ${faker.hacker.verb()} process by implementing ${faker.hacker.ingverb()} methods.`,
	`Analyze the ${faker.hacker.noun()} data for better ${faker.hacker.verb()} efficiency.`,
	`Enhance the ${faker.hacker.adjective()} ${faker.hacker.noun()} with ${faker.hacker.ingverb()} techniques.`,
	`Refactor the ${faker.hacker.noun()} system to ${faker.hacker.verb()} ${faker.hacker.adjective()} performance.`,
	`Conduct a ${faker.hacker.adjective()} analysis on the ${faker.hacker.noun()} to identify key ${faker.hacker.verb()} areas.`,
	`Design a ${faker.hacker.adjective()} ${faker.hacker.noun()} interface to simplify ${faker.hacker.ingverb()} tasks.`,
	`Integrate ${faker.hacker.adjective()} ${faker.hacker.noun()} solutions into the existing ${faker.hacker.ingverb()} framework.`
]);

const getTaskStatusBasedOnProjectStatus = (projectStatus: string): string => {
	switch (projectStatus) {
	case ProjectStatusEnum.Active:
		return faker.helpers.arrayElement(taskStatusValues);
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
		return faker.helpers.arrayElement(taskPriorityValues);
	case ProjectStatusEnum.Overdue:
		return TaskPriorityEnum.High;
	default:
		return TaskPriorityEnum.Low;
	}
};

const generateTasksForProject = (project: Project, taskIdGen: () => number, taskNumberGen: () => number): Task[] => {
	return Array.from({ length: project.tasks }, () => ({
		id: taskIdGen().toString(),
		name: `${project.key}-${taskNumberGen()}`,
		description: generateDescription(),
		project: project.name,
		status: getTaskStatusBasedOnProjectStatus(project.status),
		priority: getTaskPriorityBasedOnProjectStatus(project.status),
		createdAt: faker.date.past().toISOString(),
		updatedAt: faker.date.recent().toISOString()
	}));
};

const generateTasks = (): Task[] => {
	const allTasks: Task[] = [];
	const taskIdGen = createAutoIncrement();

	projects.forEach(project => {
		const taskNumberGen = createAutoIncrement();
		const tasksForProject = generateTasksForProject(project, taskIdGen, taskNumberGen);
		allTasks.push(...tasksForProject);
	});

	return allTasks;
};

const tasks = generateTasks();

export default tasks;
