module.exports = {
    format_date: date => {
        return `${new Date(date).getUTCMonth() + 1}/${new Date(date).getUTCDate()}/${new Date(date).getUTCFullYear()} @ ${new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'PST', timeZoneName: 'short' })}`;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
        return word;
    }
}