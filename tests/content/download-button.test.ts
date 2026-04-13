import { describe, it, expect, beforeEach } from "vitest";
import {
  ensureRelativePosition,
  createDownloadButton,
  injectDownloadButton,
} from "../../src/content/download-button";
import { BUTTON_CLASS, DATA_ATTR } from "../../src/shared/constants";

describe("ensureRelativePosition", () => {
  it("should set position to relative when static", () => {
    const el = document.createElement("div");
    document.body.appendChild(el);

    ensureRelativePosition(el);
    expect(el.style.position).toBe("relative");

    el.remove();
  });

  it("should not change position when already non-static", () => {
    const el = document.createElement("div");
    el.style.position = "absolute";
    document.body.appendChild(el);

    ensureRelativePosition(el);
    expect(el.style.position).toBe("absolute");

    el.remove();
  });
});

describe("createDownloadButton", () => {
  it("should return an anchor element with the correct class", () => {
    const video = document.createElement("video");
    const btn = createDownloadButton(video);

    expect(btn.tagName).toBe("A");
    expect(btn.className).toBe(BUTTON_CLASS);
  });

  it("should contain an SVG icon", () => {
    const video = document.createElement("video");
    const btn = createDownloadButton(video);

    expect(btn.querySelector("svg")).not.toBeNull();
  });

  it("should contain a spinner ring", () => {
    const video = document.createElement("video");
    const btn = createDownloadButton(video);

    const ring = btn.querySelector(`.${BUTTON_CLASS}__ring`);
    expect(ring).not.toBeNull();
  });

  it("should have a download title", () => {
    const video = document.createElement("video");
    const btn = createDownloadButton(video);

    expect(btn.title).toBe("Télécharger la vidéo");
  });
});

describe("injectDownloadButton", () => {
  let container: HTMLDivElement;
  let video: HTMLVideoElement;

  beforeEach(() => {
    container = document.createElement("div");
    video = document.createElement("video");
    container.appendChild(video);
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it("should inject a button into the video parent", () => {
    injectDownloadButton(video);

    const btn = container.querySelector(`.${BUTTON_CLASS}`);
    expect(btn).not.toBeNull();
  });

  it("should mark the video with data attribute", () => {
    injectDownloadButton(video);

    expect(video.hasAttribute(DATA_ATTR)).toBe(true);
  });

  it("should not inject twice on the same video", () => {
    injectDownloadButton(video);
    injectDownloadButton(video);

    const buttons = container.querySelectorAll(`.${BUTTON_CLASS}`);
    expect(buttons.length).toBe(1);
  });

  it("should skip video without parent", () => {
    const orphan = document.createElement("video");
    injectDownloadButton(orphan);

    expect(orphan.hasAttribute(DATA_ATTR)).toBe(false);
  });
});
