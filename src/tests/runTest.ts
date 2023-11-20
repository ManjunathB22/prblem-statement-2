// src/tests/runTest.ts
import { WebDriver } from "../drivers/WebDriver";
import { AppDriver } from "../drivers/AppDriver";

export const runTest = (platform: string): void => {
    let driver;

    if (platform === "web") {
        driver = new WebDriver();
    } else if (platform === "mobile") {
        driver = new AppDriver();
    }

    if (driver) {
        driver.initialize();
        driver.runTests();
    } else {
        console.error("Invalid platform specified");
        process.exit(1);
    }
};
