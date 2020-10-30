export const getVisitLength = (start, end) => {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = (Math.floor(diff / 1000 / 60 / 60) * 2);
    return hours <= 2 ? hours : hours + 1;
}
