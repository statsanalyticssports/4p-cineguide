# 4P CineGuide v1.7

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

## v1.7 highlights

- One DJI Mimo screenshot workflow.
- Mimo screenshot is rotated upright automatically.
- Scene analysis is limited to the actual live-view area instead of the surrounding Mimo UI.
- HUD OCR reads Manual exposure, shutter, ISO, EV, and supported resolution/frame-rate indicators.
- 5600K is treated as a known calibration WB anchor.
- Current ND, 108-degree Wide-Angle attachment, and Black Mist are confirmed manually because they are physical accessories.
- Exposure-preserving shutter/ISO conversion is shown separately from any intentional exposure correction.
- DJI EV is used as supporting evidence rather than an absolute light-meter command.
- Exposure, WB, and physical-setup confidence are separated.
- Second-pass verification can report **SETTINGS VERIFIED — SHOOT**.
- **Tesseract.js, its worker, WebAssembly cores, and English OCR language model are hosted inside the CineGuide repository and precached by the PWA. Mimo HUD OCR no longer depends on jsDelivr or another external CDN.**

## Normal workflow

1. Set 4P to 4K / 24 fps / High / D-Log 2 10-bit / Manual exposure.
2. Set WB to 5600K.
3. Keep histogram, zebras, and focus peaking off.
4. Frame the shot in DJI Mimo and take one screenshot with the normal HUD visible.
5. Upload it to CineGuide.
6. Confirm physical lens / ND / Black Mist state.
7. Tap the important subject if needed.
8. Apply CineGuide's prescription.
9. Take one verification screenshot and run **VERIFY CURRENT SETTINGS**.
10. Record after **SETTINGS VERIFIED — SHOOT**.

## Offline behavior

The PWA precaches the CineGuide application and local OCR dependencies. After the v1.7 assets have loaded successfully once, Mimo HUD OCR does not require a live connection to jsDelivr or another OCR CDN. The user's screenshot remains local to the browser during core analysis and OCR.

## Limitations

- A processed Mimo screenshot is not an absolute lux meter.
- Physical ND, Black Mist, and the 108-degree attachment still require confirmation.
- WB is estimated relative to the known 5600K calibration reference and should be visually verified.
- A still screenshot cannot reliably diagnose temporal LED/fluorescent flicker.
- OCR remains best-effort; manual camera-state confirmation remains available.
