import { BUTTON_CLASS, DATA_ATTR } from "../shared/constants";
import { forceDownload } from "./downloader";

const ICON_SVG = `
  <svg class="${BUTTON_CLASS}__icon" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2.2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v13"/>
    <path d="M7 11l5 5 5-5"/>
    <path d="M5 20h14"/>
  </svg>
  <div class="${BUTTON_CLASS}__ring"></div>
`;

export function ensureRelativePosition(el: HTMLElement): void {
  const pos = window.getComputedStyle(el).position;
  if (pos === "static" || pos === "") {
    el.style.position = "relative";
  }
}

export function createDownloadButton(video: HTMLVideoElement): HTMLAnchorElement {
  const btn = document.createElement("a");
  btn.className = BUTTON_CLASS;
  btn.href = "#";
  btn.title = "Télécharger la vidéo";
  btn.innerHTML = ICON_SVG;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    forceDownload(btn, video);
  });

  return btn;
}

export function injectDownloadButton(video: HTMLVideoElement): void {
  const parent = video.parentElement;
  if (!parent || video.hasAttribute(DATA_ATTR)) return;

  video.setAttribute(DATA_ATTR, "true");
  ensureRelativePosition(parent);
  parent.appendChild(createDownloadButton(video));
}
