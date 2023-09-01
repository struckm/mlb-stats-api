'use strict';

class Attendance {
    getAttendance(args = {}) {
        const { params } = args;
        const url = new URL(`${this.apiHost}attendance`);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        return fetch(url);
    }
}

module.exports = Attendance;