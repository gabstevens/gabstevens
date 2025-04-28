# gabstevens.dev
Gabriele Stefani's personal website.

## Requirements
* Intro page (full screen size):
  * Heading: "Hello World, I'm Gabriele and I'm a Software Engineer!" (possibly with rotating translations)
  * Paragraph: Short personal description
  * Top: show planet surface with rocket ready to depart.
* Scrollable content: timeline of projects (4/5 projects), each of them has a planet next to it
* Parallax effect with 4/5 layers:
  1. Deep Background (Stars, Nebulae):
    * Movement: Almost static or moves very slowly upwards as you scroll down (parallax rate close to 0). This creates the deepest layer of depth.
    * Animation: Subtle twinkling stars (can be done with CSS).
  2. Mid-Ground (Distant Small Planets, Asteroid Fields):
    * Movement: Moves upwards slower than the content scroll speed, but faster than the deep background (e.g., parallax rate 0.2-0.4). They drift by gently.
    * Animation: Maybe slow, subtle rotation on their own axis. Could fade in/out gently at the edges of the screen.
  3. Content-Level Planets (Associated with your paragraphs):
    * Movement: These appear alongside your text content. They should move upwards at a speed close to the natural scroll speed, but slightly slower (parallax rate 0.6-0.8). This makes them feel anchored near the content but still part of the background depth.
    * Placement: Position them strategically near the relevant text block (left, right, maybe slightly behind a semi-transparent content background).
    * Animation:
  4. Gentle Bobbing: Slow up-and-down or side-to-side floating motion (CSS animation) independent of scroll.
    * Self-Rotation: Slow rotation adds life.
    * Entry/Exit: Could slide in from the side or fade in as the relevant content section scrolls into view (use Intersection Observer).
  5. Foreground Elements (Optional: Close Asteroids, Space Debris):
    * Movement: Moves upwards faster than the natural scroll speed (parallax rate > 1, e.g., 1.2-1.5). These zip by quickly, creating a strong sense of foreground depth.
    * Animation: Could be fast-moving blurs or quickly rotating small objects. Use sparingly to avoid clutter.
* End with footer and contact options/links


## Roadmap
0. ⚪ - Design website (figma?)
1. 🟢 - Scaffold package:
  * 🟢 - Replace gatsby with next.js (replace current features like gtag)
  * 🟢 - Make repo public
  * 🟢 - Setup CI/CD with GitHub Pages
2. 🟠 - Draft content:
  * 🟢 - Short personal description
  * ⚪ - Create timeline:
    * ⚪ - List 4/5 projects (personal and work):
    * ⚪ - Write short descriptoin
3. ⚪ - Create assets:
  * ⚪ - Deep space background
  * ⚪ - 3 distant small planets and 3 asteroid fields for mid-ground layer
  * ⚪ - 4/5 planets (one for each project in the timeline)
  * ⚪ - 2 close asteroids and 2 space derbis for foreground layer (optional)
  * ⚪ - Starting planet surface
  * ⚪ - Rocketship
4. ⚪ - Add content:
  * ⚪ - Add full screen intro with heading in the center
  * ⚪ - Add small short descriptoin below the fold
  * ⚪ - Add timeline with planets under short description
  * ⚪ - Add footer with contact options
5. ⚪ - Add layers and parallax effect to scroll:
  * ⚪ - Create layers and add content to each
  * ⚪ - Animate scrolling using GSAP
6. ⚪ - Add planet surface with rocket to intro page
7. ⚪ - Animate rocket:
  * ⚪ - Rocket departs from planet surface as soon as scroll starts
    * ⚪ - (Optional) Animate flying sequence
  * ⚪ - Rocket flys down through the planets while scrolling down (bind to scroll event or trigger animation using IntersectionObserver API)
  * ⚪ - Rocket lands on footer (should footer be a planet or space station?)
  * ⚪ - (Optional) Add sign to scroll down to start rocket
  * ⚪ - (Optional) Add sound to rocket
8. Final config:
  * ⚪ - Link `gabstevens.dev` to GitHub Pages
  * ⚪ - Add metadata
  * ⚪ - Add translations for the website
9. ⚪ - Tune performance and a11y
10. ⚪ - Optionals
  * ⚪ - (Optional) Add rotating heading with different translations
  * ⚪ - (Optional) Add option to invert scrolling experience (intro on the bottom and scroll up to see content) so that rocket goes up:
    * ⚪ - Button with tooltip to invert scrolling
    * ⚪ - Animate changing order

## Development
* Use `npm install` to install dependencies
* Use `npm run dev` to start dev environment