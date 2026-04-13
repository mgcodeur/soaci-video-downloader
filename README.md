# Soaci Video Downloader

Chrome extension that adds a download button on every `<video>` element on [soaci.mg](https://soaci.mg/).

## Setup

```bash
npm install
```

## Dev

```bash
npm run dev        # watch mode — rebuilds on change
npm run build      # production build → dist/
npm test           # run tests
npm run format     # prettier
```

## Load in Chrome

1. `npm run build`
2. Go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked** → select the `dist/` folder

## Stack

- TypeScript
- Vue 3 (popup only)
- Vite + vite-plugin-web-extension
- Vitest + jsdom

## Project structure

```
src/
├── content/          # Content script (injected on soaci.mg)
│   ├── index.ts      # Entry point
│   ├── styles.ts     # Button CSS injection
│   ├── download-button.ts
│   ├── downloader.ts # Fetch blob + trigger download
│   └── observer.ts   # MutationObserver for dynamic videos
├── popup/            # Extension popup (Vue)
└── shared/           # Shared constants
```

## Disclaimer

The author is not responsible for how this extension is used. Respect copyright and terms of service.

## License

[MIT](LICENSE)
