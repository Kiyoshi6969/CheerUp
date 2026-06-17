# For My Love 💛

A small, soothing one-page website made to cheer up someone you love — built with React + Vite.

It includes:
- A soft, fairy-light hero section
- A "letter" section with a heartfelt note that reveals itself as you scroll
- A memory gallery using your 4 photos — tap each photo to flip it and reveal a little note
- A guided breathing exercise for a calm moment
- A closing "tap for a hug" button that sends floating hearts across the screen

## 1. Install Node.js (one-time setup)

You need Node.js installed to run this project.

1. Go to https://nodejs.org
2. Download and install the **LTS** version for your operating system
3. To confirm it installed, open a terminal/command prompt and run:
   ```
   node -v
   ```
   You should see a version number (e.g. `v20.x.x`).

## 2. Open the project in VS Code

1. Unzip this folder somewhere on your computer (e.g. Desktop).
2. Open VS Code.
3. Go to **File > Open Folder...** and select the unzipped `cheer-up-website` folder.

## 3. Install dependencies

1. In VS Code, open the terminal: **Terminal > New Terminal** (or `` Ctrl+` ``).
2. Run:
   ```
   npm install
   ```
   This downloads React, Vite, and everything the project needs. It only needs to be done once.

## 4. Run the website

In the same terminal, run:
```
npm run dev
```

You'll see something like:
```
  VITE v5.x.x  ready in 300 ms
  ➜  Local:   http://localhost:5173/
```

Hold `Ctrl` (or `Cmd` on Mac) and click that link, or copy it into your browser. The website will open there.

To stop the server later, click into the terminal and press `Ctrl+C`.

## 5. Want to send it to her without running anything locally?

If you'd rather host it somewhere so you can just send a link:
1. Run `npm run build` — this creates a `dist` folder with the finished website.
2. Drag that `dist` folder into a free static host like **Netlify Drop** (https://app.netlify.com/drop) or **Vercel** — both let you drag-and-drop a folder and get a shareable link in seconds, no account strictly required for Netlify Drop.

## Project structure

```
cheer-up-website/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/        ← her photos live here
└── src/
    ├── main.jsx
    ├── App.jsx          ← assembles all sections
    ├── App.css          ← all styling
    ├── index.css        ← global resets/colors
    ├── hooks/
    │   └── useInView.js
    └── components/
        ├── Hero.jsx
        ├── FairyLights.jsx
        ├── Letter.jsx       ← the heartfelt note text lives here
        ├── MemoryGallery.jsx ← photo captions/notes live here
        ├── BreathingCorner.jsx
        └── Closing.jsx
```

## Easy things to customize

- **The letter text**: edit the `PARAGRAPHS` array near the top of `src/components/Letter.jsx`.
- **Photo captions**: edit the `MEMORIES` array near the top of `src/components/MemoryGallery.jsx`.
- **Swap or add photos**: drop new images into `public/images/`, then reference them as `/images/yourfile.jpg` in `MemoryGallery.jsx`.
- **Colors**: all the colors are defined as variables at the top of `src/index.css` (look for `:root`).

Made with love. 💛
