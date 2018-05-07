// Given a year, return the century it is in.

export const centuryFromYear = (year) => {
    return Math.floor((year-1)/100) + 1;
};
