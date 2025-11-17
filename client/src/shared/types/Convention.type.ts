export interface ConventionType {
    id: string,
    title: string,
    category: string,
    description: string,
    slug: string,
    likes?: [],
    contentMd: string,
    authorId: string,
    author?: {
        id: string,
        username:string,
    },
    createdAt: string,
    updatedAt: string
}