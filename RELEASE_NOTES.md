# 4P CineGuide Release Notes

## v1.8 — Physical Defaults + Reliable Camera State
**Released: September 26, 2026**

### Changed
- Lens Attachment now defaults to **None — 1× native**.
- ND now defaults to **None**.
- Black Mist now defaults to **None / Off**.
- Stored blank/unknown physical-state values from earlier builds are normalized to the None defaults.
- Exposure Mode now defaults to **M**, matching the fixed CineGuide capture profile.

### Fixed
- Added a dedicated, tightly cropped EV OCR pass independent of the broader exposure strip.
- Increased EV crop scale and threshold tuning to preserve small minus signs and decimal values such as **-2.7**.
- Current Camera State now reports **Not read** instead of `—` when EV cannot be confidently extracted.
- Exposure Mode no longer drops back to `—` when the tiny M badge is missed by OCR; it remains **M** unless Auto is explicitly detected.

### Carried forward
- One-screenshot 5600K calibrated workflow.
- Fixed 4K / 24 fps / High bitrate / D-Log 2 10-bit profile.
- Upright Mimo preview and live-view-only scene analysis.
- Automatic shutter / ISO / EV read.
- Transparent shutter/ISO exposure math.
- DJI EV used as corroborating evidence.
- Separate exposure / WB / physical-setup confidence.
- True second-pass **SETTINGS VERIFIED — SHOOT** verification.
- Local/offline OCR asset workflow from v1.7.

---

## v1.7 — Fully Local Mimo OCR
**Released: September 26, 2026**

### Added
- Bundled Tesseract.js directly with CineGuide.
- Bundled the Tesseract worker, English OCR language data, and all required WebAssembly core variants.
- Updated the PWA service worker to precache the OCR runtime and language model for field use.
- Removed the runtime dependency on the jsDelivr Tesseract CDN.

### Result
- After the v1.7 PWA assets are installed/cached, Mimo HUD OCR can run locally even when the iPhone's connectivity is tied up by the Pocket 4P/Mimo connection.
- Screenshot pixel analysis and OCR remain on-device in the browser.

### v1.6 features carried forward
- One-screenshot calibrated workflow.
- Fixed 4K / 24 fps / High bitrate / D-Log 2 10-bit production profile.
- 5600K calibration white-balance anchor.
- Upright Mimo preview and live-view-only scene analysis.
- Automatic Mimo HUD read for Manual exposure, shutter, ISO and EV.
- Transparent shutter/ISO stop math.
- DJI EV used as corroborating evidence rather than a blind correction command.
- Manual physical confirmation for ND, DJI 108-degree Wide-Angle attachment and Black Mist.
- Separate exposure / WB / physical-setup confidence.
- True second-pass verification with **SETTINGS VERIFIED — SHOOT**.

### Known limitations
- Physical accessories cannot be reliably inferred from the Mimo HUD.
- WB is still a scene-derived recommendation relative to the known 5600K anchor.
- A single still cannot reliably detect temporal lighting flicker.
- OCR is best-effort and can always be manually overridden.

---

## v1.6 — One-Screenshot Calibrated Workflow
**Released: September 26, 2026**

- Reworked CineGuide around one DJI Mimo screenshot.
- Locked the normal profile to 4K, 24 fps, High bitrate, and D-Log 2 10-bit.
- Added the 5600K manual WB calibration anchor.
- Rotated portrait iPhone Mimo screenshots correctly for analysis.
- Restricted image analysis to the actual live-view area.
- Added transparent exposure-preserving shutter/ISO conversion.
- Added secondary use of the DJI EV meter.
- Added separate confidence handling and true second-pass verification.

## v1.5 — Full Mimo HUD Read
**Released: September 26, 2026**

- Improved OCR of the Mimo exposure strip.
- Correctly read the test frame as Manual, 1/80, ISO 400, EV -2.7.
- Improved ISO extraction and EV minus-sign recognition.

## v1.4 — Mimo HUD Auto-Read
**Released: September 26, 2026**

- Added automatic Mimo HUD OCR after screenshot upload.
- Added HUD-specific crops and camera-state auto-population.

## v1.3 — Auto Analyze
- Automatically analyzed uploaded screenshots and showed the first-pass prescription.

## v1.2 — iOS Native Picker
- Added a native iOS file picker for screenshots from Photos.

## v1.0 / v1.1
- Initial cinematic recommendation engine and iPhone upload fixes.
