const env = require("../index");

describe("success", () =>
{
    test("success case1", () =>
    {
        process.argv[2] = "env=dev";
        expect(env()).toBe("dev");
    });

    test("success case2", () =>
    {
        process.argv[2] = "--env=dev";
        expect(env()).toBe("dev");
    });

    test("success case3", () =>
    {
        process.argv[2] = "env=stg";
        expect(env()).toBe("stg");
    });

    test("success case4", () =>
    {
        process.argv[2] = "--env=stg";
        expect(env()).toBe("stg");
    });

    test("success case5", () =>
    {
        process.argv[2] = "env=prd";
        expect(env()).toBe("prd");
    });

    test("success case6", () =>
    {
        process.argv[2] = "--env=prd";
        expect(env()).toBe("prd");
    });
});

describe("valid", () =>
{
    test("default case", () =>
    {
        process.argv[2] = "";
        expect(env()).toBe("local");
    });

    test("success case1", () =>
    {
        process.argv[2] = "env dev";
        expect(env()).toBe("local");
    });

    test("success case2", () =>
    {
        process.argv[2] = "--env dev";
        expect(env()).toBe("local");
    });

});