"use strict";

module.exports = () =>
{
    const args = process.argv.slice(2);
    for (let idx = 0; args.length > idx; ++idx) {

        const value = args[idx];
        if (value.indexOf("env") === -1) {
            continue;
        }

        return value.split("=")[1] || "local";
    }

    return "local";
};