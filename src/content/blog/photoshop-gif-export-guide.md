---
title: "How to Export GIF from Photoshop: Complete Guide (And a 10-Second Alternative)"
description: "Step-by-step Photoshop GIF export tutorial for photographers. Plus a faster alternative that skips Photoshop entirely."
date: 2026-04-07
image: "/assets/images/blog/lightroom-burst-dialog.jpg"
imageAlt: "Creating a GIF from photo sequence in Photoshop timeline"
tags: ["photoshop", "gif", "tutorial", "lightroom"]
draft: false
---

You shot a beautiful burst sequence at a wedding — the confetti toss, the first dance spin, the bouquet throw. The photos look great individually. But turn them into a looping GIF and suddenly your clients are sharing it everywhere.

The problem? Getting from "photos in Lightroom" to "animated GIF" is way more painful than it should be. Photoshop can do it, but the workflow involves 12 steps, two applications, and roughly 15-20 minutes of clicking through menus.

I've made hundreds of GIFs from burst photos over 200+ weddings. This guide covers the full Photoshop method step by step — every click, every menu, every gotcha. And at the end, I'll show you how I got that same process down to 10 seconds.

## Why Photographers Need GIFs

Before we get into the how, let's talk about the why. Animated GIFs from photo sequences do three things that static images can't.

**Client galleries come alive.** A burst of the ring exchange, animated into a smooth loop, makes the gallery feel cinematic. Clients don't just look at it — they watch it. And they share it.

**Social media stops the scroll.** An auto-playing GIF on Instagram or Facebook catches attention in a way that a single frame never will. Wedding planners and venues love reposting these.

**It shows your range.** Other photographers deliver photos. You deliver photos AND animations. That's a differentiator worth talking about, especially at the $4,000+ booking level.

The demand is real. The question is how to create them efficiently when you're processing 15 weddings a month.

## The Full Photoshop Workflow: Step by Step

Here's the complete process for turning a series of photos into an animated GIF using Adobe Photoshop. I'm assuming your photos are already in Lightroom Classic — which is where most of us start.

### Step 1: Edit Your Photos in Lightroom

Start in the Develop module. Pick the first frame of your burst sequence and dial in your look — exposure, white balance, tone curve, whatever your style requires.

Then select all photos in the burst, click "Sync Settings," and apply everything across the sequence. This ensures consistent color and exposure across every frame. You want the animation to look smooth, not like a strobe light.

A typical burst might be 10-40 frames. For a good GIF, 15-30 frames is the sweet spot. Too few and it looks choppy. Too many and the file size explodes.

### Step 2: Export JPEGs from Lightroom

Select your burst photos in the Library module. Go to **File > Export**. Configure these settings:

- **Location:** Create a dedicated folder (e.g., "confetti-toss-gif")
- **File naming:** Sequence numbering (photo-001, photo-002, etc.) so they sort correctly
- **Format:** JPEG, quality 85%
- **Resolution:** 300 PPI (you can downsize in Photoshop later)
- **Resize:** Consider exporting at your target GIF width already (e.g., 800px wide) to save processing time

Hit Export. Wait for Lightroom to render all the files. For 20 photos, this takes maybe 30-60 seconds depending on your machine.

**Important:** This is where you lose your non-destructive workflow. Those JPEGs are baked — if you want to change the edit later, you need to re-export everything and start over.

### Step 3: Open Photoshop

Launch Photoshop. Yes, you need a separate application. No, Lightroom cannot do this part. Lightroom has zero native support for GIF creation or photo animation.

If you don't have Photoshop, you're looking at a Creative Cloud subscription — $54.99/month for the Photography plan (as of 2026). That's $660 a year just to access this GIF workflow.

### Step 4: Load Files into Stack

In Photoshop, go to **File > Scripts > Load Files into Stack**. This is Photoshop's way of importing multiple images as layers in a single document.

A dialog box appears. Click "Browse" and navigate to the folder where you exported your JPEGs.

### Step 5: Select All Your JPEGs

In the file browser, select all the exported JPEG files. If you named them with sequence numbers, they should be in the correct order.

Click OK. Photoshop will load each image as a separate layer. For 20 high-res photos, this can take 30-90 seconds and will eat 2-4 GB of RAM.

**Pro tip:** Leave "Attempt to Automatically Align Source Images" unchecked unless your burst was shot handheld with significant movement. Alignment adds processing time and can introduce unwanted cropping.

### Step 6: Open the Timeline Panel

Go to **Window > Timeline**. The Timeline panel appears at the bottom of your workspace. This is Photoshop's animation tool — it's been there since CS6, but it's well hidden.

You'll see a button in the center of the panel. Make sure it says "Create Frame Animation" (not "Create Video Timeline"). If it says something else, click the small dropdown arrow next to it and switch to Frame Animation.

### Step 7: Create Frame Animation

Click the **"Create Frame Animation"** button. Photoshop creates a single frame showing your top layer. That's just the starting point — we need to convert all layers into individual frames.

### Step 8: Make Frames from Layers

This is the step most tutorials skip or gloss over. Click the **hamburger menu** (three horizontal lines) in the top-right corner of the Timeline panel. From the dropdown, select **"Make Frames from Layers."**

Photoshop now converts each layer into its own animation frame. You should see a row of thumbnails in the Timeline, one for each photo in your burst.

### Step 9: Set Frame Delay (Timing)

By default, Photoshop sets each frame to 0 seconds — which means "as fast as possible." That's too fast and inconsistent.

Click on one frame, then **Select All Frames** (Ctrl+A / Cmd+A in the Timeline). Click the delay time shown below any frame (it says "0 sec.") and set it to **0.1s** for 10 frames per second.

**Frame rate guide for burst photos:**
- **0.07s (≈14 fps):** Very smooth, close to video. Good for fast action.
- **0.1s (10 fps):** The sweet spot for most burst GIFs. Smooth but clearly "animated photos."
- **0.15s (≈7 fps):** Slightly stylized, good for slower movements.
- **0.2s (5 fps):** Deliberate, slideshow-like. Good for only 5-8 frames.

For most burst sequences shot at 10-20 fps on the camera, 0.1s per frame gives a natural feel.

### Step 10: Set Loop Count

At the bottom-left of the Timeline panel, you'll see a dropdown that says "Once." Click it and change to **"Forever."**

Nobody wants a GIF that plays once and stops. The whole point of a GIF is the infinite loop.

### Step 11: Check Frame Order

Here's a common gotcha: **Photoshop stacks layers bottom-to-top, but your file names sort top-to-bottom.** This means your animation might play in reverse.

Hit the Play button in the Timeline to preview. If the motion runs backwards, go back to the hamburger menu and select **"Reverse Frames."**

This is one of those things that wastes 5 minutes every time because you forget which direction Photoshop stacks the layers.

### Step 12: Export as GIF

Finally. Go to **File > Export > Save for Web (Legacy)**. Yes, it says "Legacy" — Adobe has been threatening to remove this dialog for years but it's still the only way to export animated GIFs.

In the Save for Web dialog, configure:

- **Format:** GIF (top-right dropdown)
- **Colors:** 256 (maximum for GIF format)
- **Dither:** Diffusion, 88%
- **Image Size:** Set your target width (800px is good for web, 600px for email)
- **Looping Options:** Forever (should match your Timeline setting)

Click "Save" and choose your output location.

**File size reality check:** A 20-frame GIF at 800px wide will be 5-15 MB. At full resolution (say 6000px wide), it could be 80-200 MB — completely unusable for web. Always resize.

### Bonus: Exporting as MP4 Instead

If you want video instead of GIF (and honestly, you usually should — more on that later), go to **File > Export > Render Video** instead of Save for Web.

Set format to H.264, quality to High, and choose your resolution. MP4 files from the same sequence will be 80-90% smaller than the equivalent GIF with dramatically better quality.

## Common Problems with the Photoshop GIF Workflow

After doing this hundreds of times, here are the issues I ran into constantly.

### Huge File Sizes

GIF is a 40-year-old format limited to 256 colors per frame. To make a photo sequence look acceptable, Photoshop has to aggressively dither the image. The result: big files that still look grainy.

A 20-frame burst at 800px wide = 8-15 MB as a GIF. The same sequence as MP4 = 500 KB to 1 MB. That's not a typo.

### Wrong Layer Order

Every. Single. Time. You load the files, make frames from layers, hit play, and the animation runs backwards. Then you reverse it, re-check, and it's fine. This should be automatic but it isn't.

### JPEG Roundtrip Degrades Quality

When you export from Lightroom as JPEG and then re-import into Photoshop, you lose quality. JPEG compression is lossy. Even at 85% quality, you're throwing away data that you carefully preserved in your RAW workflow.

If you decide to change the edit — different white balance, different crop — you have to re-export all the JPEGs and repeat the entire Photoshop process from scratch. Your Lightroom edits and the GIF are completely disconnected.

### It's Slow

Let's be honest about the time. From selecting photos in Lightroom to having a finished GIF file:

- Export JPEGs: 1-2 minutes
- Load into Photoshop: 1-2 minutes
- Set up animation: 3-5 minutes
- Export GIF: 2-5 minutes
- **Total: 15-20 minutes per GIF**

If you want to make 15 GIFs from a wedding (confetti, first dance, exit, bouquet toss, etc.), that's **4-5 hours** of repetitive Photoshop work. Per wedding. Every week.

### No Auto-Import Back to Lightroom

The finished GIF lives in some random folder. It's not in your Lightroom catalog. It doesn't have the correct capture time. If you want it alongside your wedding photos, you have to manually import it and manually adjust the metadata so it sorts in the right place.

## The 10-Second Alternative: Burst2GIF

After spending years doing the Photoshop dance, I built a Lightroom Classic plugin that does the entire process in 3 steps and 10 seconds. No Photoshop needed.

Here's the workflow:

**Step 1:** Select your burst photos in Lightroom's Library module.

**Step 2:** Go to **Library > Plug-in Extras > Burst2GIF**. A dialog opens with a live preview of your animation.

**Step 3:** Choose your settings (GIF or MP4, FPS, resolution) and click Export.

That's it. The plugin reads Lightroom's rendered previews — meaning all your Develop edits (exposure, color grading, crop, everything) are preserved. No JPEG export needed. No separate application.

The finished file auto-imports back into your Lightroom catalog right next to the original burst photos, with the correct capture time so it sorts chronologically.

**15 GIFs from a wedding = about 2.5 minutes** instead of 4 hours.

## Photoshop vs Burst2GIF: Side-by-Side Comparison

| Feature | Photoshop | Burst2GIF |
|---|---|---|
| Steps required | 12 | 3 |
| Time per GIF | 15-20 minutes | 10 seconds |
| Requires Photoshop | Yes | No |
| Preserves LR edits | No (JPEG roundtrip) | Yes (reads LR previews) |
| Auto-imports to LR | No | Yes |
| Correct capture time | Manual metadata edit | Automatic |
| GIF + MP4 support | Yes (separate workflows) | Yes (one click toggle) |
| Cost | Adobe CC subscription ($55/mo) | $39 lifetime |
| Batch workflow | One at a time | One at a time (fast enough) |

## When Photoshop Still Makes Sense

Photoshop isn't going anywhere, and there are legitimate reasons to use it for animation:

**Cinemagraphs.** If you want to freeze part of the image and animate only a specific area (like flowing hair while the face stays still), you need Photoshop's layer masking on the Timeline.

**Advanced timeline editing.** If you need different frame durations, cross-dissolve transitions between frames, or text overlays timed to specific frames, Photoshop's Timeline gives you that control.

**Compositing.** If you want to combine elements from different photos into a single animated sequence, Photoshop's layer tools are essential.

For 95% of photographers making GIFs from rapid-fire shots, though, these advanced features aren't needed. You want the burst animated, looping, and delivered to the client. That's exactly what Burst2GIF does.

## Quick Recap

The Photoshop workflow works. It's reliable, it's well-documented, and it produces good results. But it's slow, it requires a separate application and subscription, and it breaks your Lightroom editing workflow by forcing a JPEG roundtrip.

If you make GIFs from photo sequences occasionally — once every few shoots — the Photoshop method is fine. Learn it, bookmark this guide, and you're set.

If you make them regularly — multiple GIFs per wedding, every wedding, every week — the time adds up fast. 15 GIFs per wedding × 4 weddings per month × 12 months = 720 GIFs per year. At 15 minutes each in Photoshop, that's **180 hours per year** spent on a repetitive export task.

[Burst2GIF](https://burst2gif.com) costs $39 once and gets those 180 hours down to about 2. There's a free version with 10 exports if you want to test it first.

## What to Read Next

- [The complete guide to turning burst photos into GIFs](/blog/burst-photos-to-gif-guide) — covers the full workflow from shooting technique to delivery
- [GIF vs MP4 for photographers](/blog/gif-vs-mp4-photography) — why MP4 might be the better choice for your client galleries
- [How to make a GIF in Lightroom](/blog/lightroom-gif-how-to) — all the methods for creating GIFs without leaving Lightroom
