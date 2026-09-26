# 4P CineGuide v1.9

Phone-first cinematic Pro-settings assistant for the DJI Osmo Pocket 4P.

## Fixed shooting profile

CineGuide is tuned to the user's normal production profile:

- **4K**
- **24 fps**
- **High bitrate**
- **D-Log 2 10-bit**
- **Color Recovery OFF** for the calibration screenshot
- **Manual exposure (M)**
- **1/50 target shutter**
- Manual WB = **5600K before the calibration screenshot**
- Histogram / zebras / focus peaking off for the calibration screenshot

## v1.9 highlights

- Uses only the Pocket 4P D-Log 2 manual ISO choices confirmed from the camera UI: **100, 200, 400, 800, 1600, 3200**.
- Recommends one of the user's actual DJI ND choices: **None, ND16, ND64, ND256**.
- Recommends **Native 1×** or the official **DJI 108° Wide-Angle Lens** using scene/subject heuristics.
- Recommends a **scene-specific Target HUD EV** and clearly distinguishes it from Exposure Compensation.
- In the fixed full-Manual workflow, **Exposure Compensation = N/A**; the HUD EV value is the meter/reference CineGuide wants the final settings to approach.
- Shows **Expected HUD EV** after the recommended shutter/ISO/ND move when current EV was read.
- Explains the exposure-preserving ISO at 1/50, then shows why the nearest real 4P ISO step was chosen.
- Includes lens and Black Mist actions in the final prescription and verification.
- Second-pass verification checks shutter, ISO, ND, lens, exposure image quality, and HUD EV target.
- Retains local/offline Tesseract HUD OCR from v1.7/v1.8.

## Physical accessories CineGuide knows about

- DJI Osmo Pocket 4P Wide-Angle Lens — **108° FOV**
- DJI Osmo Pocket 4P ND Filter Set:
  - **ND16 — 4 stops**
  - **ND64 — 6 stops**
  - **ND256 — 8 stops**
- DJI Black Mist Filter

Physical setup fields default to **None / Off** and can be changed when an accessory is installed.

## Normal workflow

1. Set 4P to 4K / 24 fps / High / D-Log 2 10-bit / Color Recovery OFF / Manual exposure.
2. Set WB to **5600K**.
3. Keep histogram, zebras, and focus peaking off.
4. Take one normal DJI Mimo live-view screenshot.
5. Upload it to CineGuide.
6. Confirm what physical accessories are currently installed (defaults are None).
7. Tap the important subject when useful.
8. Apply CineGuide's complete prescription: lens, ND, shutter, ISO, WB, target HUD EV, focus, Black Mist.
9. Take one verification screenshot and run **VERIFY CURRENT SETTINGS**.
10. Record after **SETTINGS VERIFIED — SHOOT**.

## EV terminology

CineGuide shows:

- **Current HUD EV** — what Mimo meters for the uploaded manual-exposure frame.
- **Target HUD EV** — CineGuide's scene-specific meter target/reference.
- **Expected HUD EV** — estimate after the recommended exposure changes, when current EV is known.
- **Exposure Compensation** — **N/A in Manual (M)**. CineGuide does not tell the user to dial a separate compensation value in the fixed manual workflow.

## Offline behavior

The PWA precaches the application and vendored Tesseract OCR dependencies. Once the OCR assets have been populated by the included GitHub workflow and cached, Mimo HUD OCR does not require an external CDN.

## Release notes

See [RELEASE_NOTES.md](./RELEASE_NOTES.md).
