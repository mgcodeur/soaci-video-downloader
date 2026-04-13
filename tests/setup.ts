import { vi } from "vitest";

Object.defineProperty(globalThis, "URL", {
  value: {
    ...globalThis.URL,
    createObjectURL: vi.fn(() => "blob:mock-url"),
    revokeObjectURL: vi.fn(),
  },
  writable: true,
});
