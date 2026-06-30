════════════════════════════════════════════════════════
   BIRTHDAY WEBSITE — IMAGE PLACEMENT GUIDE
════════════════════════════════════════════════════════

Place your images in the folders described below.
The names here match what's set in config.js.
If you rename a file, just update the path in config.js too.

────────────────────────────────────────────────────────
BACKGROUND IMAGES  (full-screen, shown faded behind text)
────────────────────────────────────────────────────────

  images/bg-landing.jpg    →  Page 1: Landing screen
  images/bg-letter.jpg     →  Page 2: Letter page
  images/bg-gallery.jpg    →  Page 3: Gallery page

  Tips:
  • You can use the same photo for all three, or different ones.
  • Portraits work best (subject centered, not too busy).
  • Recommended size: at least 1200 × 800 px.
  • The fade intensity is set by `backgroundOpacity` in config.js.
    Increase `overlayAlpha` in config.js if text feels hard to read.

────────────────────────────────────────────────────────
GALLERY PHOTOS  (shown in the photo grid on Page 3)
────────────────────────────────────────────────────────

Place these inside the gallery/ subfolder:

  images/gallery/photo1.jpg
  images/gallery/photo2.jpg
  images/gallery/photo3.jpg
  images/gallery/photo4.jpg   ← add as many as you need
  ...

Then update config.js → gallery.photos to match:

  { src: "images/gallery/photo4.jpg", caption: "Your caption" },

  Tips:
  • Any aspect ratio works — images are cropped to a fixed height.
  • Keep each file under ~2 MB for fast loading on mobile.
  • JPG and PNG both work fine.

────────────────────────────────────────────────────────
HOW TO UPLOAD TO GITHUB
────────────────────────────────────────────────────────

Option A — GitHub website (easiest):
  1. Open your repo on github.com
  2. Click "Add file" → "Upload files"
  3. Drag and drop your images
  4. Click "Commit changes"

Option B — Terminal:
  git add images/
  git commit -m "add photos"
  git push

════════════════════════════════════════════════════════
