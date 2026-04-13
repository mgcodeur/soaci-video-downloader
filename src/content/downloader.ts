export async function forceDownload(
  btn: HTMLAnchorElement,
  video: HTMLVideoElement,
): Promise<void> {
  const src = video.currentSrc || video.src;
  if (!src) return;

  btn.classList.add("is-loading");

  try {
    const response = await fetch(src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const tmp = document.createElement("a");
    tmp.href = url;
    tmp.download = "video.mp4";
    tmp.click();

    setTimeout(() => URL.revokeObjectURL(url), 10_000);
  } catch (err) {
    console.error("[soaci-dl] Download failed:", err);
    window.open(src, "_blank");
  } finally {
    btn.classList.remove("is-loading");
  }
}
