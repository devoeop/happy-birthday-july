/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║            BIRTHDAY WEBSITE — CONFIGURATION FILE            ║
 * ║                                                              ║
 * ║  ✏️  EDIT THIS FILE TO CUSTOMIZE EVERYTHING ON THE WEBSITE   ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * HOW TO USE:
 *  1. Fill in all the fields below with your own content
 *  2. Add your images to the /images/ folder (see images/IMAGES_README.txt)
 *  3. Make sure image filenames below match what you named your files
 *  4. Push changes:  git add . && git commit -m "update" && git push
 */

const CONFIG = {

  // ─────────────────────────────────────────────────────
  //  PERSONAL DETAILS
  // ─────────────────────────────────────────────────────
  name: "Her Name",                      // ← Her name. Appears in browser tab.


  // ─────────────────────────────────────────────────────
  //  PAGE 1 — LANDING
  //  The first screen she sees when she opens the link.
  // ─────────────────────────────────────────────────────
  landing: {
    heading:    "Happy Birthday! 🎂",               // Big heading
    subtext:    "A little surprise just for you 💕", // Smaller line below
    buttonText: "Open Your Surprise 💌",             // Button label
    background: "images/bg-landing.jpg",            // Background image path
  },


  // ─────────────────────────────────────────────────────
  //  PAGE 2 — LETTER
  //  Shown after she clicks the button on page 1.
  //  Looks like a handwritten letter.
  // ─────────────────────────────────────────────────────
  letter: {
    heading:    "A Letter For You 💌",    // Letter page heading
    background: "images/bg-letter.jpg",  // Background image (can be same or different)
    paragraphs: [
      // Each line here is one paragraph. Add as many as you want.
      // Just copy the format below and paste a new line.
      "Write your first paragraph here. Maybe start with how you feel about her.",
      "Your second paragraph goes here. A memory, something you love about her, or a wish.",
      "Keep adding more paragraphs by copying the line above and editing the text.",
    ],
    sign:       "With all my love,",      // Sign-off line above your name
    yourName:   "Your Name",              // Your name at the end of the letter
  },


  // ─────────────────────────────────────────────────────
  //  PAGE 3 — GALLERY
  //  Birthday wish + all your photos together.
  // ─────────────────────────────────────────────────────
  gallery: {
    wish:       "Happy Birthday! 🎉",                              // Big wish at top
    subwish:    "Here are some of my favourite moments with you 📸", // Smaller line
    background: "images/bg-gallery.jpg",                           // Background image
    photos: [
      // Add as many photos as you want. Each entry = one card in the grid.
      // src: file path to image | caption: text shown below it
      { src: "images/gallery/photo1.JPG", caption: "Write a caption here" },
      { src: "images/gallery/photo2.JPG", caption: "Write a caption here" },
      { src: "images/gallery/photo3.JPG", caption: "Write a caption here" },
      { src: "images/gallery/photo4.jpg", caption: "Write a caption here" },
      { src: "images/gallery/photo5.png", caption: "Write a caption here" },
      // To add more, copy the line above, paste it below, change filename + caption.
      // { src: "images/gallery/photo4.jpg", caption: "Another memory 💕" },
    ],
  },


  // ─────────────────────────────────────────────────────
  //  ANIMATIONS
  //  Tweak these numbers to change how the site feels.
  // ─────────────────────────────────────────────────────
  animations: {
    backgroundOpacity: 0.05,    // Background image brightness:
                                //   0.05 = almost invisible (very dark)
                                //   0.30 = softly visible (recommended)
                                //   0.80 = mostly visible (very bright)

    fadeInDuration:    1.0,     // Seconds for each page to fade in on load.
                                //   0.5 = quick   |   2.0 = slow & dramatic

    floatingHearts:    true,    // Show floating hearts?  true  or  false
    heartCount:        10,      // How many hearts float around (5–25 recommended)

    sparkles:          true,    // Show sparkle particles?  true  or  false

    cardHoverLift:     true,    // Gallery cards lift on hover?  true  or  false

    animationSpeed:   "slow", // Overall feel:  "slow"  |  "normal"  |  "fast"
  },


  // ─────────────────────────────────────────────────────
  //  COLOURS
  //  Change any hex value to repaint that part of the site.
  //  Use a color picker: https://htmlcolorcodes.com/color-picker/
  // ─────────────────────────────────────────────────────
  colors: {
    primary:      "#ff69b4",   // Main accent: headings, buttons, hearts
    secondary:    "#da70d6",   // Secondary accent: gradients, hover states
    textLight:    "#ffffff",   // Text on dark backgrounds
    overlayDark:  "#000000",   // Overlay color behind image (keep black)
    overlayAlpha: 0.55,        // Overlay darkness:  0.0 (none) → 0.9 (very dark)
                               // Increase this if text is hard to read.
  },

};
