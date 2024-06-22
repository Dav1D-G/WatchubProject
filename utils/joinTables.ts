export function joinTables(images : string[], ids : string[]):{ image : string , id : string }[]
{
    const newTable = images.map((el , index)=>{
        return { image : el , id : ids[index] }
    })
    return newTable
}