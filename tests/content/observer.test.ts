import { describe, it, expect, vi, afterEach } from "vitest";
import { observeNewVideos } from "../../src/content/observer";

describe("observeNewVideos", () => {
  let observer: MutationObserver;

  afterEach(() => {
    observer?.disconnect();
  });

  it("should call callback when a video is added to the DOM", async () => {
    const callback = vi.fn();
    observer = observeNewVideos(callback);

    const video = document.createElement("video");
    document.body.appendChild(video);

    // MutationObserver is async — wait for microtask
    await new Promise((r) => setTimeout(r, 0));

    expect(callback).toHaveBeenCalledWith(video);

    video.remove();
  });

  it("should find nested videos inside added containers", async () => {
    const callback = vi.fn();
    observer = observeNewVideos(callback);

    const div = document.createElement("div");
    const video = document.createElement("video");
    div.appendChild(video);
    document.body.appendChild(div);

    await new Promise((r) => setTimeout(r, 0));

    expect(callback).toHaveBeenCalledWith(video);

    div.remove();
  });

  it("should return a MutationObserver instance", () => {
    const callback = vi.fn();
    observer = observeNewVideos(callback);

    expect(observer).toBeInstanceOf(MutationObserver);
  });
});
