export class Course {
    id: number;
    title: string;
    shortDescription: string;
    idAuthor?: number;
    totalStudentRegister?: number;
    totalChapter?: number;
    duration?: string;
    priceOfCourse?: number;
    isDiscount?: boolean;
    percentDiscount?: number;
    isFree: boolean;
    typeOfCourse?: string;
    introduce: string;
    idCategory: number;
    levelCourse: string;
    languages: string;
    description: string;
    publicId: string;
    pictureUrl: string;
    keyVideoUpload: string;
    fileUrl: string;
    totalVoteOfCourse?: number;
    categoryName?: string;
    userName?: string;
    processCourseName?: string;
    processCourse: number;
}