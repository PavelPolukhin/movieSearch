export const getTimeFromMinutes = (minutes) => {
    if (minutes) {
        const hours = Math.trunc(minutes/60);
        const editMinutes = minutes % 60;
        return hours + 'ч. ' + editMinutes + 'м.';
    }
    return '—'
}
