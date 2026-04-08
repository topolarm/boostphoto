---
title: "How to Make a GIF in Lightroom (Yes, It's Actually Possible Now)"
description: "Lightroom can't export GIFs natively. Here are 3 workarounds — including one that does it in 10 seconds without leaving Lightroom."
date: 2026-04-05
image: "/assets/images/blog/lightroom-burst-dialog.jpg"
imageAlt: "Burst2GIF plugin interface inside Lightroom Classic"
tags: ["lightroom", "gif", "workflow", "tutorial"]
draft: false
---

Every few months, someone on a photography forum asks: "How do I make a GIF in Lightroom?" The answers are always some variation of "you can't." And until recently, that was true.

Lightroom Classic is an incredible tool for organizing and editing photos. It handles RAW processing, batch editing, metadata, keywording, and export to every common image format. But animated GIFs? Not a chance. Adobe never built that feature, and after 17 years of Lightroom, it's safe to say they're not planning to.

That doesn't mean you're stuck. There are three ways to get from "burst photos in Lightroom" to "finished GIF" — and the newest one actually keeps you inside Lightroom the entire time.

## Can Lightroom Export GIF?

No. Let's get this out of the way clearly.

Lightroom Classic cannot export GIF files. Not animated GIFs, not even static GIFs. The export dialog offers JPEG, TIFF, PSD, PNG, DNG, and the original format. That's it.

Lightroom also cannot create any kind of frame animation or photo sequence animation. There is no timeline, no frame editor, no animation preview. The Slideshow module can create a video, but it's designed for client presentations with transitions and music — not frame-by-frame animation from burst photos.

This is the core frustration. You have 20 burst photos sitting right there in Lightroom, edited perfectly. You can see them as thumbnails. You can flip through them in the filmstrip and they practically animate themselves. But there's no button that says "make this a GIF."

Thousands of photographers hit this wall every month. Here are the three ways around it.

## Method 1: The Photoshop Route

This is the traditional answer, and it works — but it's a grind.

The short version: export your photos as JPEGs from Lightroom, open Photoshop, use File > Scripts > Load Files into Stack to load them as layers, open the Timeline panel, create a frame animation, make frames from layers, set timing and looping, then export via Save for Web.

The long version involves 12 distinct steps and takes 15-20 minutes per GIF. I wrote a [complete step-by-step guide to the Photoshop GIF workflow](/blog/photoshop-gif-export-guide) if you want the full walkthrough.

**The biggest problem isn't the time — it's the JPEG roundtrip.** When you export from Lightroom as JPEG, you bake in all your edits at a fixed quality level. If you later adjust the white balance or change your color grade, you need to re-export all the JPEGs and redo the entire Photoshop process.

Your Lightroom edits and your GIF are completely disconnected. Change one, and the other is instantly out of date.

**You also need Photoshop.** That's an Adobe Creative Cloud subscription on top of Lightroom — $54.99/month for the Photography plan. If you only need Photoshop for GIFs, that's an expensive GIF maker.

## Method 2: Online Tools (ezgif, giphy, etc.)

If you don't have Photoshop, online GIF makers are the next option. Sites like ezgif.com, giphy.com, and imgflip.com let you upload photos and create animated GIFs in the browser.

**The workflow:**

1. Export JPEGs from Lightroom (same as Method 1)
2. Go to ezgif.com > GIF Maker
3. Upload your JPEG files (usually limited to 2000 files total, 100 MB max)
4. Set frame delay (100ms = 10 fps)
5. Click "Make a GIF"
6. Download the result

**It's faster than Photoshop** — maybe 5 minutes instead of 15-20. And it's free.

**But the downsides are real:**

- **Same JPEG roundtrip problem.** You still lose your non-destructive workflow.
- **File size limits.** Most free tools cap uploads at 50-100 MB total. A burst of 20 high-res JPEGs can easily exceed that.
- **No auto-import.** The GIF downloads to your browser's download folder. It's not in your Lightroom catalog. You have to manually import it and fix the metadata.
- **Limited control.** Basic timing and size options only. No preview before committing.
- **Privacy.** You're uploading client photos to a third-party server. For wedding photographers handling intimate moments, that's worth considering.
- **Quality ceiling.** These tools optimize for speed, not quality. The dithering algorithms are basic and the output often looks noticeably worse than Photoshop's.

For a quick one-off GIF, online tools work fine. For a regular production workflow, they create more problems than they solve.

## Method 3: Burst2GIF Plugin (Inside Lightroom)

This is the method that actually keeps you in Lightroom. [Burst2GIF](https://burst2gif.com) is a Lightroom Classic plugin that creates GIFs and MP4 videos directly from your photo library — no export, no external app, no browser upload.

Here's exactly how it works:

### Step 1: Select Your Photos

In Lightroom's Library module, select the burst photos you want to animate. They can be RAW files, JPEGs, TIFFs — anything Lightroom can display. The plugin reads Lightroom's rendered previews, so all your Develop module edits are included automatically.

### Step 2: Launch Burst2GIF

Go to **Library > Plug-in Extras > Burst2GIF**. The plugin dialog opens with a live preview of your animation. You can see exactly what the GIF will look like before you export anything.

### Step 3: Configure and Export

Set your options:

- **Format:** GIF or MP4
- **FPS:** Auto-detect from EXIF or manual override
- **Resolution:** Multiple presets or custom dimensions

Click Export. Done. The file appears right next to your original photos in the Lightroom catalog, with the correct capture time so it sorts chronologically.

**Total time: about 10 seconds.** Not 15 minutes. Not 5 minutes. Ten seconds from selecting photos to having the finished file in your catalog.

## Burst2GIF Settings Explained

The plugin is straightforward, but a few settings deserve explanation.

### Auto-Detect FPS from EXIF

Modern cameras record the sub-second timing of each photo in the EXIF data (the SubSecTimeOriginal field). Burst2GIF reads this data and calculates the actual shooting speed automatically.

If you shot at 10 fps, the animation plays at 10 fps. If you shot at 20 fps, it plays at 20 fps. The motion looks natural because it matches the real-world timing.

### Manual FPS Override

Sometimes you want to speed up or slow down the animation. Set a custom FPS to override the auto-detected value. Lower FPS (5-7) for a dreamy, deliberate look. Higher FPS (12-15) for smooth, almost-video motion.

### GIF vs MP4

GIF is the universal format — it works everywhere, loops automatically, and every browser supports it. But GIF is limited to 256 colors per frame, which means photographic content gets dithered and grainy.

MP4 (H.264) supports millions of colors, produces files 80-90% smaller, and looks dramatically better. The trade-off: not all platforms auto-loop MP4, and some gallery systems don't support inline video playback.

For social media and messaging, GIF is safer. For client galleries (especially Pic-Time and similar platforms that support video), MP4 is the better choice. More detail in the [GIF vs MP4 comparison](/blog/gif-vs-mp4-photography).

### Smart Capture Time for MP4

When Burst2GIF creates an MP4, it sets the file's creation timestamp to match the first photo in the sequence. This means the video sorts chronologically alongside your photos when you upload everything to a gallery.

No more manually dragging the video to the right position between the ceremony and reception photos. It just lands where it belongs.

## Frequently Asked Questions

### Which Lightroom versions are supported?

Burst2GIF works with Lightroom Classic 10 and newer (released 2020 and later). It does not work with the cloud-based "Lightroom" (no Classic). The plugin API requires Classic.

### macOS only?

Yes, for now. The plugin is macOS only. Windows support is in development but there's no release date yet.

### Does it work with RAW files?

Yes. The plugin doesn't process your RAW files directly — it reads Lightroom's rendered previews, which include all your Develop module edits. So your RAW files stay untouched, and the GIF reflects your current edit exactly as you see it in Lightroom.

If you change your edit later, just run the plugin again. Ten seconds and you have an updated GIF with the new look.

### Can I use it with any photos, not just bursts?

Absolutely. The plugin doesn't care whether the photos were shot as a burst sequence. You can use it for:

- **Timelapse sequences** — 100 photos taken every 30 seconds, animated into a smooth timelapse GIF
- **Stop-motion** — product photography frames, food prep steps, or any staged sequence
- **Before/after pairs** — two photos alternating to show the editing difference
- **Any series of photos** — as long as they're in your Lightroom catalog, the plugin can animate them

The "burst" in the name is just the most common use case. The tool works with any photo sequence.

### What does it cost?

$39 for a lifetime license (launch price — regular price is $59). There's also a free version limited to 10 exports so you can test the workflow before buying.

No subscription. No Creative Cloud required. Just the plugin and Lightroom Classic.

## The Bottom Line

Lightroom can't make GIFs. Adobe hasn't added the feature in 17 years, and they probably never will — it's too niche for their roadmap.

But the workaround landscape has improved. Photoshop works if you don't mind 12 steps and 15 minutes. Online tools work if you don't mind uploading client photos to third-party servers. And Burst2GIF works if you want to stay inside Lightroom and get it done in 10 seconds.

For my workflow — 200+ weddings, multiple GIFs per event, tight turnaround — the plugin paid for itself on the first wedding. The math is simple: 15 GIFs × 15 minutes in Photoshop = 3.75 hours. 15 GIFs × 10 seconds in Burst2GIF = 2.5 minutes.

That's 3.5 hours back per wedding. Multiply by 40 weddings a year and you start to understand why I built the thing.

## Further Reading

- [How to export GIF from Photoshop: complete guide](/blog/photoshop-gif-export-guide) — the full 12-step Photoshop workflow if you need it
- [The complete burst to GIF guide](/blog/burst-photos-to-gif-guide) — from shooting technique to final delivery
- [GIF vs MP4 for photography](/blog/gif-vs-mp4-photography) — which format is right for your client galleries
