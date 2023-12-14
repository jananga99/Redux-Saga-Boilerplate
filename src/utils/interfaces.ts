export interface IData {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface IGetDataOutput {
    success: boolean,
    data?: IData | null,
    errorMessage?: string | null
}