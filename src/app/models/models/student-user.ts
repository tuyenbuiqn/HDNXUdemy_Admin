export class StudentUser {
    id?: string;
    name?: string;
    email?: string;
    password?: string | null | undefined;
    phone?: string;
    general?: number;
    pictureUrl?: string;
    publicId?: string;
    roleId?: number;
    typeLogin?: number
    isRequestTeacher?: boolean;
    totalCourseRegister?: number;
    status?: number;
}