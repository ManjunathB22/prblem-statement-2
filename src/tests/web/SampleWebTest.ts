// src/tests/web/SampleWebTest.ts
import { Driver } from "../../drivers/Driver";

export function runWebTest(driver: Driver): void {
    driver.initialize();
    driver.runTests();
}
