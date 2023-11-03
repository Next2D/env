import { ObjectImpl } from "./interface/ObjectImpl";

export default function env (): ObjectImpl
{
    const object: ObjectImpl = {
        "environment": "local",
        "platform": "web"
    };

    const args: string[] = process.argv;
    for (let idx: number = 0; args.length > idx; ++idx) {

        switch (process.argv[idx]) {

            case "--env":
            case "env":
                object.environment = process.argv[++idx];
                break;

            case "--platform":
            case "platform":
                object.platform = process.argv[++idx].toLowerCase();
                break;

            default:
                break;

        }
    }

    return object;
}