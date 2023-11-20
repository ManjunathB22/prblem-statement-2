// // src/runner.ts
// import { runWebTest } from "./tests/web/SampleWebTest";
// import { runMobileTest } from "./tests/mobile/SampleMobileTest";
// import { WebDriver } from "./drivers/WebDriver";
// import { AppDriver } from "./drivers/AppDriver";
// import yargs from "yargs";

// const main = async () => {
//     const argv = await yargs.option("platform", {
//         alias: "p",
//         describe: "Specify the target platform (web/mobile)",
//         choices: ["web", "mobile"],
//         demandOption: true,
//         type: "string",
//     }).argv;

//     let driver;

//     if (argv.platform === "web") {
//         driver = new WebDriver();
//     } else if (argv.platform === "mobile") {
//         driver = new AppDriver();
//     } else {
//         console.error("Invalid platform specified");
//         process.exit(1);
//     }

//     if (argv.platform === "web") {
//         runWebTest(driver);
//     } else if (argv.platform === "mobile") {
//         runMobileTest(driver);
//     }
// };

// main();

// src/runner.ts
import { runTest } from "./tests/runTest";
import yargs from "yargs";

const main = async () => {
    const argv = await yargs.option("platform", {
        alias: "p",
        describe: "Specify the target platform (web/mobile)",
        choices: ["web", "mobile"],
        demandOption: true,
        type: "string",
    }).argv;

    if (argv.platform === "web" || argv.platform === "mobile") {
        runTest(argv.platform);
    } else {
        console.error("Invalid platform specified");
        process.exit(1);
    }
};

main();
