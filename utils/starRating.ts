export function starRating(rating : string):number
{
    const numberRating = parseFloat(rating);
    if(numberRating < 2)
        return 0;
    else if(numberRating < 4)
        return 1;
    else if(numberRating < 6)
        return 2;
    else if(numberRating < 8)
        return 3;
    else
        return 4;
}
