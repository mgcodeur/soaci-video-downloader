import { VIDEO_SELECTOR } from "../shared/constants";
import { injectStyles } from "./styles";
import { injectDownloadButton } from "./download-button";
import { observeNewVideos } from "./observer";

injectStyles();

document.querySelectorAll<HTMLVideoElement>(VIDEO_SELECTOR).forEach(injectDownloadButton);

observeNewVideos(injectDownloadButton);
