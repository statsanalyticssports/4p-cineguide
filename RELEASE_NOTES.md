# 4P CineGuide Release Notes

## v2.0 — Manual Exposure Audit + Cinematic Solver
**Released: September 26, 2026**

v2.0 is a full audit of the exposure model rather than a cosmetic version bump.

### Corrected EV behavior
- Distinguished **EV compensation** from the **EV meter shown during the fixed Manual (M) CineGuide workflow**.
- Current EV remains OCR-readable and manually editable.
- CineGuide now presents a **scene-appropriate EV meter reference/target**, not a fictitious fourth independent Manual exposure control.
- EV-meter evidence is blended conservatively with live-view pixel analysis and cannot force brightening into clipped highlights.
- Verification checks whether the new Mimo meter is reasonably close to the recommended reference.

### Corrected ISO model
- Removed generic photographic 1/3-stop ISO values.
- Pocket 4P D-Log 2 recommendations are now restricted to:
  **100 / 200 / 400 / 800 / 1600 / 3200**.

### Rebuilt shutter solver
- 1/50 remains the preferred 24 fps cinematic shutter.
- CineGuide first solves the scene at 1/50 using the actual Pocket 4P ISO choices plus None / ND16 / ND64 / ND256.
- A faster shutter is used only as a fallback when the available ISO/ND range cannot get close enough at 1/50.
- Small numerical exposure advantages no longer override cinematic motion cadence.

### ND filter prescription
- Integrated the user's official DJI ND set:
  - None — 0 stops
  - ND16 — 4 stops
  - ND64 — 6 stops
  - ND256 — 8 stops
- Prescription explicitly tells the user which physical filter to install/remove.

### Lens prescription
- Added Native 1× vs DJI 108° Wide-Angle framing recommendation.
- Native 1× is preferred for people/specific subjects where perspective matters.
- 108° may be suggested for suitable establishing/interior coverage.
- Lens choice is explicitly advisory and does not block exposure verification.

### Black Mist and light handling
- Black Mist defaults to OFF and is treated as a creative diffusion option, not an exposure requirement.
- Added DJI Fill Light guidance for low-light/person scenarios.

### Camera-state and screenshot analysis
- Physical Lens / ND / Black Mist controls default to None / Off.
- Manual exposure defaults to M.
- Current EV is editable if OCR misses or misreads the HUD.
- Live-view pixel analysis excludes the surrounding Mimo UI.
- Mimo screenshots are rotated upright automatically for subject selection and analysis.
- Dedicated OCR passes remain optimized for shutter, ISO, frame-rate and signed EV values.

### Verification
- Second-pass verification checks the real exposure core: shutter, ISO, ND, EV-meter proximity, live-view exposure and highlight control.
- Lens and Black Mist remain framing/look decisions and no longer prevent **SETTINGS VERIFIED — SHOOT**.

### Offline operation
- Retains local Tesseract.js OCR vendoring and PWA precaching.
- Core image analysis and HUD OCR remain on-device after assets are cached.

---

## v1.9 — Complete Lens / ND / EV Prescription
**Released: September 26, 2026**

- Added ND16 / ND64 / ND256 and 108° lens prescription.
- Added EV-reference output.
- This version was superseded by v2.0's Manual-exposure audit and ISO/shutter corrections.

## v1.8 — Physical Defaults + Camera State
**Released: September 26, 2026**

- Physical accessories defaulted to None / Off.
- Improved Manual mode and EV OCR handling.

## v1.7 — Fully Local Mimo OCR
**Released: September 26, 2026**

- Added repository-local Tesseract.js, worker, English model and WebAssembly core vendoring.
- Removed runtime dependency on an external Tesseract CDN after assets are installed.

## v1.6 — One-Screenshot Calibrated Workflow
**Released: September 26, 2026**

- Standardized the 5600K calibration screenshot workflow.
- Added upright Mimo preview and live-view-only analysis.
- Added transparent exposure math and true second-pass verification.

## v1.5 — Full Mimo HUD Read
- Improved shutter / ISO / signed EV recognition.

## v1.4 — Mimo HUD Auto-Read
- Added HUD-specific OCR and camera-state auto-population.

## v1.3 — Auto Analyze
- Automatically analyzed an uploaded screenshot.

## v1.2 — iOS Native Picker
- Added the native iOS screenshot/photo picker.

## v1.0 / v1.1
- Initial cinematic recommendation engine and iPhone upload fixes.
