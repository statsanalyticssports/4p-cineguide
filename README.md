# 4P CineGuide v2.0

Phone-first cinematic Pro-settings assistant for the DJI Osmo Pocket 4P.

## Fixed production profile

CineGuide v2.0 is tuned to the user's normal Pocket 4P workflow:

- 4K 16:9
- 24 fps
- High bitrate
- D-Log 2 10-bit
- Color Recovery OFF for the calibration screenshot
- Manual exposure (M)
- Manual WB = **5600K before the calibration screenshot**
- Histogram OFF
- Zebras / overexposure warning OFF
- Focus peaking OFF

## Owned optical accessories encoded in the solver

### DJI Osmo Pocket 4P ND Filter Set
- None — 0 stops
- ND16 — 4 stops
- ND64 — 6 stops
- ND256 — 8 stops

### Lens / diffusion
- Native 1× lens — default
- DJI Osmo Pocket 4P Wide-Angle Lens — 108° FOV
- DJI Black Mist — default OFF; treated as a creative look, not exposure control

Physical accessory controls default to **None / Off**.

## Manual exposure model

v2.0 separates two concepts that can look similar in DJI Mimo:

- **EV compensation** is an adjustable control when automatic exposure behavior is being used.
- In CineGuide's fixed **Manual (M)** workflow, the displayed EV value is treated as the **camera's exposure-meter reference**. CineGuide changes shutter, ISO and physical ND to move that meter toward a scene-appropriate reference; it does not treat EV as a fourth independent manual exposure variable.

The current EV field remains editable so an OCR miss can be corrected manually.

## Pocket 4P D-Log 2 ISO values used

CineGuide recommends only the ISO choices confirmed on the user's Pocket 4P in this workflow:

- ISO 100
- ISO 200
- ISO 400
- ISO 800
- ISO 1600
- ISO 3200

It will never recommend intermediate values such as ISO 160, 250, 320 or 640.

## Shutter strategy

For 24 fps, **1/50 is the preferred cinematic shutter**.

v2.0 first solves exposure at 1/50 using the real ISO choices and the owned ND set. It remains at 1/50 whenever that grid can land within roughly half a stop. A faster shutter is only considered as an exposure-control fallback when the available ISO/ND range cannot get close enough at 1/50.

This prevents small numerical exposure differences from unnecessarily overriding the preferred 24p motion cadence.

## One-screenshot workflow

1. Set the Pocket 4P to the fixed production profile above.
2. Set manual WB to **5600K**.
3. Confirm which physical accessories are installed; defaults are None / Off.
4. Frame the scene in DJI Mimo.
5. Take one screenshot with the normal HUD visible.
6. Upload it to CineGuide.
7. CineGuide rotates the Mimo view upright, isolates the live-view image, and reads Manual mode / shutter / ISO / EV where possible.
8. Tap the important subject if exposure should be weighted there.
9. Apply the prescription: lens suggestion, shutter, ISO, ND, WB, target EV-meter reference, focus and Black Mist guidance.
10. Take one verification screenshot and tap **VERIFY CURRENT SETTINGS**.
11. Record after **SETTINGS VERIFIED — SHOOT**.

## What v2.0 analyzes

- The actual Mimo live-view region, rather than the full phone screenshot UI
- Highlight clipping and shadow clipping
- Tonal percentiles and contrast spread
- User-selected subject luminance
- Scene color relative to the known 5600K calibration WB
- Current shutter / ISO / EV meter from the Mimo HUD
- Current physical ND state
- Available Pocket 4P ISO steps
- Available DJI ND filters
- Scene-appropriate EV-meter reference

## Lens and Black Mist recommendations

The 108° Wide-Angle Lens is a **framing recommendation**, not an exposure requirement. CineGuide may suggest it for appropriate establishing/interior coverage, while preferring native 1× for people or specific subjects where more natural perspective is desirable.

Black Mist is treated as a **creative diffusion option**. It does not block exposure verification.

## DJI Fill Light

For dark scenes, CineGuide can suggest adding light before accepting unnecessarily high ISO. For a nearby person in low light it can specifically suggest considering the DJI Fill Light, then re-running CineGuide after the lighting change.

## Offline OCR

The repository workflow vendors a pinned local Tesseract.js OCR runtime, worker, English language data and WebAssembly cores under `vendor/tesseract/`. The PWA service worker precaches those resources. Once installed/cached, Mimo HUD OCR does not depend on an external OCR CDN.

## Important limitations

- A processed Mimo screenshot is not an absolute lux meter.
- The Mimo EV number is used as supporting meter evidence; scene pixels and highlight protection remain primary.
- One still screenshot cannot reliably diagnose temporal LED/fluorescent flicker.
- WB is estimated relative to the known 5600K calibration frame and should still be judged visually on critical work.
- Lens choice is ultimately compositional; CineGuide's 108° recommendation is advisory.
- OCR is best-effort and all recognized exposure values can be corrected manually.

## Release notes

See [RELEASE_NOTES.md](./RELEASE_NOTES.md).
