import User from '@/data/models/userModel';

type Project = {
    id: string;
    name: string;
    key: string;
    category: string;
    tasks:number;
    users: User[];
    status: string;
    createdAt?: string;
    updatedAt?: string;
};

export default Project;
