const CONFIG = {

  // ─────────────────────────────────────────────────────
  //  PERSONAL DETAILS
  // ─────────────────────────────────────────────────────
  name: "Sanch",                      // ← Her name.


  // ─────────────────────────────────────────────────────
  //  PAGE 1 — LANDING
  //  The first screen she sees when she opens the link.
  // ─────────────────────────────────────────────────────
  landing: {
    heading:    "Happy Birthday!",                   // Big heading
    subtext:    "A little surprise just for you 💕", // Smaller line below
    buttonText: "Open Your Surprise 💌",             // Button label
    background: "images/bg-gallery.jpg",             // Background image path
    secretCode: "020726",                            // ← 6-digit code
  },


  // ─────────────────────────────────────────────────────
  //  PAGE 2 — LETTER
  //  Shown after she clicks the button on page 1
  // ─────────────────────────────────────────────────────
  letter: {
    heading:    "A Letter For You 💌",    
    background: "images/bg-letter.jpg",  // Background image
    paragraphs: [
      // Each line here is one paragraph. Add as many as you want.
      
      "Write your first paragraph here. Maybe start with how you feel about her.",
      "Your second paragraph goes here. A memory, something you love about her, or a wish.",
      "Keep adding more paragraphs by copying the line above and editing the text.",
    ],
    sign:       "With all my love,",      // Sign-off line above your name
    yourName:   "Debabrata",              // Your name
  },


  // ─────────────────────────────────────────────────────
  //  PAGE 3 — GALLERY
  //  Birthday wish + all your photos together.
  // ─────────────────────────────────────────────────────
  gallery: {
    wish:       "Cheers to this special day!",                  // Big wish at top
    subwish:    "Here are some of my favourite moments of you 📸", // Smaller line
    background: "images/bg-landing.jpg",                           // Background image
    photos: [
      // Add as many photos as you want. Each entry = one card in the grid.
      // src: file path to image | caption: text shown below it
      { src: "images/gallery/photo1.JPG", caption: "little tina has been a rockstar since day one" },
      { src: "images/gallery/photo2.JPG", caption: "i hope you can ride a bicycle now 😂" },
      { src: "images/gallery/photo3.JPG", caption: "i swear the sun has always had a favourite, and it's you" },
      { src: "images/gallery/photo4.jpg", caption: "everytime i see this, all i hear is 'othaiyadi pathayila'... i guess it was written with you in mind" },
      { src: "images/gallery/photo5.png", caption: "how can someone simply exist while looking this effortlessly perfect? ahhh" },
      // { src: "images/gallery/photo4.jpg", caption: "Another memory 💕" },
    ],
  },


  // ─────────────────────────────────────────────────────
  //  ANIMATIONS
  //  Tweak these numbers to change how the site feels.
  // ─────────────────────────────────────────────────────
  animations: {
    backgroundOpacity: 0.85,    // Background image brightness:
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
