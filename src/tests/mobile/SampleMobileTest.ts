// src/tests/mobile/SampleMobileTest.ts
import { Driver } from "../../drivers/Driver";

export function runMobileTest(driver: Driver): void {
    driver.initialize();
    driver.runTests();
}
