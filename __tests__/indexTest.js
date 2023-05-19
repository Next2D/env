const env = require("../index");

describe("success", () =>
{
    test("default case", () =>
    {
        const object = env();
        expect(object.environment).toBe("local");
        expect(object.platform).toBe("web");
    });

    test("success case1", () =>
    {
        process.argv[2] = "--env";
        process.argv[3] = "dev";
        process.argv[4] = "--platform";
        process.argv[5] = "macOC";

        const object = env();
        expect(object.environment).toBe("dev");
        expect(object.platform).toBe("macoc");
    });

    test("success case2", () =>
    {
        process.argv[2] = "--env";
        process.argv[3] = "stg";
        process.argv[4] = "--platform";
        process.argv[5] = "Web";

        const object = env();
        expect(object.environment).toBe("stg");
        expect(object.platform).toBe("web");
    });

    test("success case3", () =>
    {
        process.argv[2] = "--env";
        process.argv[3] = "prd";
        process.argv[4] = "--platform";
        process.argv[5] = "Windows";

        const object = env();
        expect(object.environment).toBe("prd");
        expect(object.platform).toBe("windows");
    });

    test("success case4", () =>
    {
        process.argv[2] = "--env";
        process.argv[3] = "local";
        process.argv[4] = "--platform";
        process.argv[5] = "iOS";

        const object = env();
        expect(object.environment).toBe("local");
        expect(object.platform).toBe("ios");
    });

    test("success case5", () =>
    {
        process.argv[2] = "--env";
        process.argv[3] = "prod";
        process.argv[4] = "--platform";
        process.argv[5] = "Android";

        const object = env();
        expect(object.environment).toBe("prod");
        expect(object.platform).toBe("android");
    });

    test("success case6", () =>
    {
        process.argv[2] = "env";
        process.argv[3] = "prod";
        process.argv[4] = "platform";
        process.argv[5] = "Android";

        const object = env();
        expect(object.environment).toBe("prod");
        expect(object.platform).toBe("android");
    });
});