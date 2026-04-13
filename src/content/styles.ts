import { STYLE_ID, BUTTON_CLASS } from "../shared/constants";

export const BUTTON_CSS = `
  @keyframes __soaci-dl-spin {
    to { transform: rotate(360deg); }
  }

  .${BUTTON_CLASS} {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.45);
    border: 1.5px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    z-index: 9999;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s, opacity 0.2s;
    opacity: 0;
  }

  .${BUTTON_CLASS}:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.1);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  .${BUTTON_CLASS}:active {
    transform: scale(0.94);
  }

  .${BUTTON_CLASS}__ring {
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #fff;
    border-right-color: rgba(255, 255, 255, 0.3);
    animation: __soaci-dl-spin 0.7s linear infinite;
    display: none;
  }

  .${BUTTON_CLASS}.is-loading .${BUTTON_CLASS}__icon { display: none; }
  .${BUTTON_CLASS}.is-loading .${BUTTON_CLASS}__ring { display: block; }
  .${BUTTON_CLASS}.is-loading { pointer-events: none; opacity: 0.75 !important; }

  *:hover > .${BUTTON_CLASS},
  .${BUTTON_CLASS}:hover,
  .${BUTTON_CLASS}:focus {
    opacity: 1;
  }
`;

export function injectStyles(): void {
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = BUTTON_CSS;
  document.head.appendChild(style);
}
