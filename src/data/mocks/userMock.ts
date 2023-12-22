import User from '@/data/models/userModel';

const users:User[] = [
	{
		id: '1',
		avatar: 'https://images.unsplash.com/photo-1512288094938-363287817259?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Leslie',
		lastName: 'Foster',
		position: 'Co-Founder / CEO',
		onlineStatus: 'online',
		email: 'leslie.foster@flowforge.com'
	},
	{
		id: '2',
		avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Michael',
		lastName: 'Foster',
		position: 'Co-Founder / CTO',
		onlineStatus: '20 min.',
		email: 'michael.foster@flowforge.com'

	},
	{
		id: '3',
		avatar: 'https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Zhao',
		lastName: 'Huang',
		position: 'Sales Manager',
		onlineStatus: '5 min.',
		email: 'zhao.huang@flowforge.com'
	},
	{
		id: '4',
		avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Dries',
		lastName: 'Vincent',
		position: 'Project Manager',
		onlineStatus: 'online',
		email: 'dries.vincent@flowforge.com'
	},
	{
		id: '5',
		avatar: 'https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Amina',
		lastName: 'Adebayo',
		position: 'Project Manager',
		onlineStatus: 'online',
		email: 'amina.adebayo@flowforge.com'
	},
	{
		id: '6',
		avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Tom',
		lastName: 'Cook',
		position: 'UI/UX Designer',
		onlineStatus: 'online',
		email: 'tom.cook@flowforge.com'
	},
	{
		id: '7',
		avatar: 'https://images.unsplash.com/photo-1564805280186-5d7056d538ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Alba',
		lastName: 'Jimenez',
		position: 'DevOps Engineer',
		onlineStatus: 'online',
		email: 'alba.jimenez@flowforge.com'
	},
	{
		id: '8',
		avatar: 'https://images.unsplash.com/photo-1572631382901-cf1a0a6087cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Devon',
		lastName: 'Webb',
		position: 'QA Tester',
		onlineStatus: '15 min.',
		email: 'devon.webb@flowforge.com'
	},
	{
		id: '9',
		avatar: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Hellen',
		lastName: 'Schmidt',
		position: 'QA Tester',
		onlineStatus: 'online',
		email: 'hellen.schmidt@flowforge.com'
	},
	{
		id: '10',
		avatar: 'https://images.unsplash.com/photo-1600603477970-7152b8ea521b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Wade',
		lastName: 'Cooper',
		position: 'Full Stack Developer',
		onlineStatus: 'online',
		email: 'wade.cooper@flowforge.com'
	},
	{
		id: '11',
		avatar: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Arlene',
		lastName: 'Mccoy',
		position: 'iOS Developer',
		onlineStatus: 'online',
		email: 'arlene.mccoy@flowforge.com'
	},
	{
		id: '12',
		avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Zhang',
		lastName: 'Wei',
		position: 'Android Developer',
		onlineStatus: 'online',
		email: 'zhang.wei@flowforge.com'
	},
	{
		id: '13',
		avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Audrey',
		lastName: 'Williams',
		position: 'Backend Developer',
		onlineStatus: '3 min.',
		email: 'audrey.williams@flowforge.com'
	},
	{
		id: '14',
		avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Peter',
		lastName: 'Johnson',
		position: 'Backend Developer',
		onlineStatus: 'online',
		email: 'peter.johnson@flowforge.com'
	},
	{
		id: '15',
		avatar: 'https://images.unsplash.com/photo-1512849934327-1cf5bf8a5ccc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Emily',
		lastName: 'Myers',
		position: 'Backend Developer',
		onlineStatus: 'online',
		email: 'emily.myers@flowforge.com'
	},
	{
		id: '16',
		avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'John',
		lastName: 'Wilson',
		position: 'Backend Developer',
		onlineStatus: '4 min.',
		email: 'john.wilson@flowforge.com'
	},
	{
		id: '17',
		avatar: 'https://images.unsplash.com/photo-1519362909365-f8591adb630e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Sarah',
		lastName: 'Taylor',
		position: 'Frontend Developer',
		onlineStatus: 'online',
		email: 'sarah.taylor@flowforge.com'
	},
	{
		id: '18',
		avatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'David',
		lastName: 'Miller',
		position: 'Frontend Developer',
		onlineStatus: '20 min.',
		email: 'david.miller@flowforge.com'
	},
	{
		id: '19',
		avatar: 'https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Lisa',
		lastName: 'Smith',
		position: 'Frontend Developer',
		onlineStatus: '15 min.',
		email: 'lisa.smith@flowforge.com'
	},
	{
		id: '20',
		avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		firstName: 'Mark',
		lastName: 'Thomas',
		position: 'Frontend Developer',
		onlineStatus: 'online',
		email: 'mark.thomas@flowforge.com'
	}
];

export default users;
