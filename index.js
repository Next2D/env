"use strict";

module.exports = () =>
{
    const object = {
        "environment": "local",
        "platform": "web"
    };

    const args = process.argv;
    for (let idx = 0; args.length > idx; ++idx) {

        switch (process.argv[idx]) {

            case "--env":
                object.environment = process.argv[++idx];
                break;

            case "--platform":
                object.platform = process.argv[++idx].toLowerCase();
                break;

            default:
                break;

        }
    }

    return object;
};