import { WebDriver } from "./drivers/WebDriver";
import { AppDriver } from "./drivers/AppDriver";
import yargs from "yargs";
import { runTest } from "./tests/SampleTest";

const main = async () => {
    const argv = await yargs.option("platform", {
        alias: "p",
        describe: "Specify the target platform (web/mobile)",
        choices: ["web", "mobile"],
        demandOption: true,
        type: "string",
    }).argv;

    let driver;

    if (argv.platform === "web") {
        driver = new WebDriver();
    } else if (argv.platform === "mobile") {
        driver = new AppDriver();
    } else {
        console.error("Invalid platform specified");
        process.exit(1);
    }

    // if (argv.platform === "web") {
    //     runWebTest(driver);
    // } else if (argv.platform === "mobile") {
    //     runMobileTest(driver);
    // }

    runTest(driver);
};

main();
