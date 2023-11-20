import { Driver } from "../drivers/Driver";

export function runTest(driver: Driver): void {
    driver.initialize();
    driver.runTests();
}
