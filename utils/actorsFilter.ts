export function actorsFilter(actors : string):string[]
{
    return actors.split(',').map(item => item.trim());
}