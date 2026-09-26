# 4P CineGuide v1.8

Phone-first cinematic Pro-settings assistant for the DJI Osmo Pocket 4P.

## Fixed shooting profile

CineGuide is tuned to this normal production setup:

- 4K
- 24 fps
- High bitrate
- D-Log 2 10-bit
- Manual exposure
- Manual WB = **5600K before the calibration screenshot**
- Histogram / zebras / focus peaking off for the calibration screenshot

## v1.8 highlights

- Lens attachment now defaults to **None — 1× native**.
- ND now defaults to **None**.
- Black Mist now defaults to **None / Off**.
- Previous blank/unknown physical-state values stored on the iPhone are normalized back to these None defaults.
- Exposure Mode now defaults to **M** because Manual exposure is part of the fixed CineGuide capture profile.
- Added a dedicated high-resolution EV OCR crop so the Mimo HUD EV value is read independently from shutter/ISO.
- The EV reader is tuned to preserve the tiny minus sign in values such as **-2.7**.
- If the EV number genuinely cannot be read, Current Camera State now says **Not read** instead of an ambiguous dash.
- All v1.7 one-screenshot, calibrated-WB, live-view-only analysis, transparent exposure math, confidence, verification, and local OCR behavior are retained.

## Physical setup defaults

CineGuide starts each installation with:

- Lens attachment: **None — 1× native**
- ND: **None**
- Black Mist: **None / Off**

Change a value only when that physical accessory is installed. CineGuide remembers later selections on that iPhone.

## Normal workflow

1. Set 4P to 4K / 24 fps / High / D-Log 2 10-bit / Manual exposure.
2. Set WB to 5600K.
3. Keep histogram, zebras, and focus peaking off.
4. Frame the shot in DJI Mimo and take one screenshot with the normal HUD visible.
5. Upload it to CineGuide.
6. Change Lens / ND / Black Mist only if an accessory is actually installed.
7. Tap the important subject if needed.
8. Apply CineGuide's prescription.
9. Take one verification screenshot and run **VERIFY CURRENT SETTINGS**.
10. Record after **SETTINGS VERIFIED — SHOOT**.

## Offline behavior

The PWA precaches the CineGuide application and local OCR dependencies. Once the vendored OCR assets are present in the repository and cached, Mimo HUD OCR does not need an external CDN. Screenshot analysis and OCR remain local to the browser.

## Limitations

- A processed Mimo screenshot is not an absolute lux meter.
- Physical ND, Black Mist, and the 108-degree attachment cannot be reliably inferred from the HUD, so CineGuide uses the user-selected physical state.
- WB is estimated relative to the known 5600K calibration reference and should be visually verified.
- A still screenshot cannot reliably diagnose temporal LED/fluorescent flicker.
- OCR remains best-effort; shutter/ISO can always be corrected manually.

## Release notes

See [RELEASE_NOTES.md](./RELEASE_NOTES.md).
