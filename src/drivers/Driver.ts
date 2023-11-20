// src/drivers/Driver.ts
export abstract class Driver {
    abstract initialize(): void;
    abstract runTests(): void;
}
