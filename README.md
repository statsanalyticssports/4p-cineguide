# 4P CineGuide v1.3

Phone-first cinematic Pro-settings assistant for the DJI Osmo Pocket 4P.

## What it does

- Accepts a DJI Mimo live-view screenshot, a Pocket 4P frame/photo, or an iPhone/Galaxy photo.
- Analyzes luminance distribution, highlight/shadow clipping, tonal spread, approximate neutral-color bias, and an optional user-selected subject area.
- Uses the camera's current shutter / ISO / ND state as a relative exposure anchor.
- Preserves a 180-degree-style cinematic shutter target (24 fps -> 1/50 by default).
- Selects from the user's actual ND kit: no ND, ND16, ND64, ND256.
- Supports the native 1x wide camera, the DJI 108-degree Wide-Angle attachment, and the native 3x med-tele camera.
- Recommends ISO, manual Kelvin WB, focus mode, Log profile, ND and Black Mist guidance.
- Includes a second-pass VERIFY mode.
- Core pixel analysis runs locally in the browser. Images are not uploaded by the core analyzer.

## Important accuracy rule

A screenshot is already processed/tone-mapped. CineGuide therefore does **not** pretend pixel brightness is an absolute light meter. Recommendations are strongest when the current camera settings shown in DJI Mimo are supplied. Use a second Mimo screenshot to verify before an important take.

## Phone installation

### Android / Galaxy Z Fold

1. Put this folder on any HTTPS static host (GitHub Pages, Netlify, Cloudflare Pages, a private web server, etc.).
2. Open `index.html` through that HTTPS site in Chrome.
3. Use **Install app** / **Add to Home screen**.

### iPhone

1. Open the HTTPS-hosted site in Safari.
2. Tap **Share**.
3. Choose **Add to Home Screen**.

A service worker caches the core files after the first hosted load. OCR and EXIF helper libraries are fetched from jsDelivr only when those buttons are used; manual entry always remains available.

## Typical workflow

1. Connect the Pocket 4P to DJI Mimo and point the camera at the real scene.
2. Take a screenshot with the Mimo exposure values visible.
3. Upload it to CineGuide.
4. Tap the important face/subject in the preview.
5. Confirm current FPS, shutter, ISO, WB and physical ND. Optionally try **Read Mimo text (beta)**.
6. CineGuide automatically analyzes the upload; use **ANALYZE FOR POCKET 4P** if you change inputs/settings and want to recalculate.
7. Enter the recommended settings on the camera.
8. Take a second Mimo screenshot and upload it.
9. Confirm the camera-state values and tap **VERIFY CURRENT SETTINGS**.
10. When it reports **Settings verified. Shoot.**, record.

## Cinematic baseline used by v1

- 4K 16:9 by default (3K 9:16 selectable)
- 24 fps default
- 1/50 second target for 24 fps
- D-Log 2 10-bit on the 1x camera
- Standard D-Log on the 3x camera because D-Log 2 is limited to 1x
- Low ISO prioritized
- Manual Kelvin white balance
- Physical ND preferred over raising shutter speed in bright conditions
- Focus: AFS for static shots, AFC for moving/unknown subjects, Subject Lock for portraits when useful

## v1 limitations

- It cannot derive absolute illuminance (lux) from a tone-mapped screenshot.
- It cannot reliably detect flicker from one still image.
- Phone photos often have auto HDR/exposure/WB, so they are intentionally lower-confidence inputs.
- White-balance estimation from arbitrary scene content is approximate unless the image includes neutral surfaces and the current WB is known.
- OCR is best-effort and must be confirmed by the user.
- Black Mist is a creative choice, not an exposure-control substitute.

