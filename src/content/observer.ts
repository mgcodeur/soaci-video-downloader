import { VIDEO_SELECTOR } from "../shared/constants";

export function observeNewVideos(callback: (video: HTMLVideoElement) => void): MutationObserver {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        if (node.matches(VIDEO_SELECTOR)) {
          callback(node as HTMLVideoElement);
        }

        for (const video of node.querySelectorAll<HTMLVideoElement>(VIDEO_SELECTOR)) {
          callback(video);
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  return observer;
}
