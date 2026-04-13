import { describe, it, expect, beforeEach } from "vitest";
import { injectStyles, BUTTON_CSS } from "../../src/content/styles";
import { STYLE_ID } from "../../src/shared/constants";

describe("injectStyles", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
  });

  it("should inject a style element into document.head", () => {
    injectStyles();

    const style = document.getElementById(STYLE_ID);
    expect(style).not.toBeNull();
    expect(style?.tagName).toBe("STYLE");
  });

  it("should contain button class styles", () => {
    injectStyles();

    const style = document.getElementById(STYLE_ID) as HTMLStyleElement;
    expect(style.textContent).toContain("soaci-dl-btn");
    expect(style.textContent).toContain("@keyframes");
  });

  it("should be idempotent — no duplicate styles", () => {
    injectStyles();
    injectStyles();

    const styles = document.head.querySelectorAll(`#${STYLE_ID}`);
    expect(styles.length).toBe(1);
  });
});

describe("BUTTON_CSS", () => {
  it("should contain required CSS rules", () => {
    expect(BUTTON_CSS).toContain("soaci-dl-btn");
    expect(BUTTON_CSS).toContain("is-loading");
    expect(BUTTON_CSS).toContain("__soaci-dl-spin");
  });
});
