---
title: "Lightroom Video Export: Everything Photographers Need to Know"
description: "What Lightroom Classic can and can't do with video. Plus how to create MP4 videos from your photos without leaving Lightroom."
date: 2026-04-02
image: "/assets/images/demo-poster.jpg"
imageAlt: "MP4 video exported from burst photos in Lightroom"
tags: ["lightroom", "video", "mp4", "export"]
draft: false
---

Lightroom Classic has a complicated relationship with video. It can import video clips. It can play them. It can even apply basic color grading. But when it comes to working with video in the ways photographers actually need — especially creating video from photos — it falls short in frustrating ways.

This guide covers what Lightroom can and can't do with video, how to use the features that exist, and how to fill the gaps when you need to turn your photos into video without leaving your editing workflow.

## What Lightroom Classic Can Do with Video

Lightroom's video capabilities are basic but sometimes useful. Here's what you get.

### Import and Organize Video Clips

If your camera records video (and most modern cameras do), Lightroom imports those clips alongside your photos. They appear in the Library module with a video icon overlay. You can keyword them, rate them, add to collections, and organize them just like photos.

This is actually valuable for wedding and event photographers who shoot a mix of stills and clips. Everything lives in one catalog, one timeline.

### Basic Video Trimming

In the Library module, you can set in and out points on a video clip to trim it. Click on a video, use the trim handles in the playback bar to cut the beginning or end. It's non-destructive — the original file isn't modified.

This is useful for trimming a 30-second clip down to the 5 seconds you actually want. But that's about all you can do. No splitting, no joining, no multi-clip editing.

### Color Grading Video Clips

Here's a feature most photographers don't know about: you can apply Develop module adjustments to video in Lightroom. The Quick Develop panel in Library mode lets you adjust exposure, contrast, white balance, and a few other settings on video clips.

It's not the full Develop module — you don't get the tone curve, HSL sliders, or local adjustments. But for basic color matching between your photos and video clips, it works.

### Slideshow Module Video Export

The Slideshow module can export a video file. You build a slideshow from selected photos, add transitions and music, set the duration per slide, and export as MP4.

**Settings available:**
- Resolution: up to 1080p
- Slide duration: customizable per slide or global
- Transitions: dissolve, wipe, and a few others
- Music: add an audio track
- Output: MP4 (H.264)

This is designed for client presentations — a polished slideshow with smooth transitions and background music. It works well for that specific purpose.

## What Lightroom Cannot Do with Video

Here's where it gets frustrating. These are the things photographers ask for constantly and Lightroom simply doesn't offer.

### Create GIF from Photos

Lightroom has no GIF export capability at all. Not animated GIFs, not even static GIFs. The export dialog doesn't include GIF as a format option. If you want a looping animation from your burst sequence, Lightroom can't help.

### Animate Photos into Video

You have 30 photos from a burst sequence. You want them assembled into a smooth video — frame 1, frame 2, frame 3, playing at 10 fps. Lightroom can't do this.

The Slideshow module comes close conceptually, but it's designed for presentation slideshows with 3-5 second transitions between slides. Setting each slide to 0.1 seconds with zero-length transitions doesn't produce a smooth animation — it produces a janky mess with rendering artifacts.

### Frame-by-Frame Animation

No timeline editor. No frame duration controls. No ability to set different display times for different frames. The Slideshow module is the closest thing, but it's a presentation tool, not an animation tool.

### Export Photo Sequences as Video

Even the simple task of "take these 20 photos and save them as a video file at 10fps" is impossible in Lightroom. There is no photo-to-video export pipeline.

This is the gap that matters most for photographers working with burst photos, rapid-fire shots, and any kind of sequential photography.

## The Gap: Burst Photos to Video

Let's talk about the specific scenario that trips people up.

You're shooting a wedding. During the confetti exit, you hold down the shutter and fire 30 frames in 3 seconds at 10 fps. In Lightroom, those 30 photos sit in a row. You edit the first one, sync settings across all 30, and they look fantastic.

Now you want a short video clip of that confetti moment — a smooth 3-second MP4 that plays those 30 frames in sequence. Something you can deliver alongside your photos in the client gallery.

In Lightroom alone, you can't make that video. Your options have traditionally been:

1. **Photoshop:** Export JPEGs from LR, load into Photoshop, build frame animation, render video. 12 steps, 15-20 minutes. Full process documented in the [Photoshop GIF export guide](/blog/photoshop-gif-export-guide).

2. **Premiere Pro / DaVinci Resolve:** Import JPEGs as an image sequence, set frame rate, export as H.264. More control than Photoshop but even more steps and a learning curve if video editing isn't your thing.

3. **FFmpeg (command line):** If you're comfortable with terminal commands, `ffmpeg -framerate 10 -i photo_%03d.jpg -c:v libx264 output.mp4` does the job. Fast, free, but not exactly photographer-friendly.

All three require leaving Lightroom, exporting intermediate JPEG files, and manually handling the output. None of them auto-import the result back to your catalog.

## Burst2GIF: Photo-to-Video Inside Lightroom

[Burst2GIF](https://burst2gif.com) is a Lightroom Classic plugin that closes this gap. Despite the name, it exports both GIF and MP4 — and for most professional use cases, MP4 is the better choice.

**The workflow:**

1. Select your burst photos in the Library module
2. Go to Library > Plug-in Extras > Burst2GIF
3. Choose MP4 format, set FPS, click Export

The plugin reads Lightroom's rendered previews — including all your Develop edits — and assembles them into an H.264 MP4 video. No JPEG export needed. No external application.

The finished MP4 auto-imports back into your Lightroom catalog, positioned next to the original photos with the correct capture timestamp.

**10 seconds from start to finish.** Not 15 minutes of Photoshop clicking. Not a trip to the command line. Ten seconds and you have a video file in your catalog.

<div style="background: linear-gradient(to right, #4f46e5, #4338ca); border-radius: 12px; padding: 24px; margin: 40px 0; text-align: center;">
  <p style="color: white; font-weight: 600; font-size: 18px; margin: 0 0 8px 0;">Turn your burst photos into GIFs in 10 seconds.</p>
  <p style="color: #c7d2fe; font-size: 14px; margin: 0 0 16px 0;">Free version — 10 exports, no credit card needed.</p>
  <a href="/#pricing" style="display: inline-block; background: white; color: #4338ca; font-weight: 600; font-size: 14px; padding: 10px 24px; border-radius: 8px; text-decoration: none;">Try Burst2GIF Free</a>
</div>

## The Pic-Time Workflow Advantage

This is where the auto-import with correct capture time really pays off.

If you deliver galleries through Pic-Time (or similar platforms like Cloudspot, ShootProof, or Pixieset), you typically upload your entire wedding album at once — 800 photos, sorted chronologically. The gallery platform preserves the sort order.

When Burst2GIF creates an MP4, it sets the file's creation timestamp to match the capture time of the first photo in the burst. This means the video sorts chronologically in your Lightroom catalog, sitting right between the ceremony photos where it belongs.

**Upload workflow:**
1. Edit all wedding photos in Lightroom
2. Run Burst2GIF on each burst sequence (confetti, first dance, exit, etc.) — 10 seconds each
3. Select all photos AND the generated MP4 videos
4. Export / upload to Pic-Time in one batch

The videos land in the correct chronological position in the gallery. The confetti video appears between the ceremony exit photos. The first dance video sits in the reception section. No manual sorting needed.

Without correct capture timestamps, you'd have to manually drag each video to the right position in the gallery. For 10-15 videos per wedding, that's another 15-20 minutes of tedious work per event.

## Video Settings Tips

### H.264 for Maximum Compatibility

When exporting MP4, H.264 is the codec you want. It's supported by every browser, every phone, every gallery platform, and every social media site. There's no compatibility debate — H.264 just works.

Newer codecs like H.265 (HEVC) offer better compression, but platform support is still inconsistent. Stick with H.264 for delivery files.

### Resolution: Match Your Photo Export

If you export photos at 3000px on the long edge for client galleries, consider creating videos at a similar resolution. This keeps the visual quality consistent when clients scroll through a gallery containing both photos and embedded videos.

That said, most gallery platforms cap video playback at 1080p anyway. A 1920×1080 MP4 is a safe default — small enough to upload quickly, sharp enough to look great on screen.

### FPS: Match the Shooting Speed

Your camera's burst rate determines the natural playback speed. If you shot at 10 fps, play back at 10 fps for motion that matches real life.

**FPS guidelines for burst sequences:**
- **5-7 fps:** Slightly stylized, deliberate feel. Each frame is distinct. Good for slower movements like a slow walk or a gentle turn.
- **10 fps:** The standard for most burst shooting. Smooth, natural motion. This is where most wedding burst sequences land.
- **12-15 fps:** Very smooth, approaching video quality. If your camera shoots at 14 fps or 20 fps bursts, matching that rate gives cinematic results.
- **20+ fps:** Essentially video. Some mirrorless cameras shoot 20-30 fps bursts. At these rates, the animated result is indistinguishable from video — but with the full resolution and RAW quality of stills.

Burst2GIF auto-detects the shooting speed from EXIF data (SubSecTimeOriginal) and sets the FPS to match. You can override this manually if you want a different feel.

## GIF vs MP4 for Client Galleries

Both formats have their place. Here's the quick version (there's a [dedicated GIF vs MP4 comparison](/blog/gif-vs-mp4-photography) if you want the full analysis).

**GIF advantages:**
- Universal auto-loop — plays and loops everywhere without user interaction
- Works in email clients (most of them)
- No playback controls cluttering the image

**GIF disadvantages:**
- 256 color limit — photos look dithered and grainy
- Massive file sizes (10-15 MB for a 20-frame sequence at 800px)
- No audio support
- Maximum practical resolution around 800px wide

**MP4 advantages:**
- Millions of colors — photos look exactly as you edited them
- Tiny file sizes (500 KB - 1 MB for the same sequence)
- Support for much higher resolutions (1080p, 4K)
- Audio support if you ever need it

**MP4 disadvantages:**
- Not all platforms auto-loop (some require user click to play)
- Doesn't work in most email clients
- Shows playback controls on some platforms

**The verdict for galleries:** MP4 wins if your gallery platform supports inline video (Pic-Time, Cloudspot, and most modern platforms do). GIF wins for email delivery and contexts where you need guaranteed auto-play.

## Frequently Asked Questions

### Can Lightroom import video back into the catalog?

Yes. Lightroom Classic can import MP4 and MOV files. When Burst2GIF creates a video, it triggers Lightroom's auto-import so the file appears in your catalog automatically. No manual import step needed.

### Does the exported video keep EXIF data?

The video file gets the correct creation timestamp matching the first photo in the sequence. This ensures proper chronological sorting in your catalog and in gallery platforms. Standard video metadata (resolution, codec, duration) is also embedded.

### What's the file size difference between MP4 and GIF?

For a typical 20-frame burst sequence at 800px wide:
- **GIF:** 8-15 MB
- **MP4 (H.264):** 500 KB - 1.5 MB

That's roughly 10x smaller for MP4 with dramatically better visual quality. For a full wedding gallery with 15 animated sequences, the difference is 150-225 MB in GIFs versus 8-22 MB in MP4s. Your upload time and your client's loading time both benefit significantly.

### Does Burst2GIF work with any photos or just bursts?

Any photos in your Lightroom catalog. The plugin doesn't check whether photos were shot as a burst sequence. You can create animations from timelapse series, stop-motion setups, before/after pairs, or any collection of images. If Lightroom can display it, Burst2GIF can animate it.

### What about Lightroom (cloud version)?

Burst2GIF requires Lightroom Classic (version 10 or newer). The cloud-based Lightroom app doesn't support third-party plugins — Adobe hasn't opened that API. If you're using the cloud version, you'll need one of the alternative methods (Photoshop or online tools) for now.

### Is it macOS only?

Currently yes. Burst2GIF is macOS only. Windows support is planned but doesn't have a release date yet.

## Wrapping Up

Lightroom's video capabilities are limited by design. Adobe built it as a photo editor, and the video features are afterthoughts — useful for organization and basic trimming, but not for creating video content from your photo sequences.

The Slideshow module handles client presentations. Photoshop handles complex animation projects. But for the specific, common task of turning a burst of photos into a smooth video or GIF — the thing wedding and event photographers need most — there was no good solution inside Lightroom until now.

[Burst2GIF](https://burst2gif.com) fills that gap. $39 lifetime, free version with 10 exports to test. If you're regularly turning rapid-fire shots into animations for client galleries, it saves hours per wedding.

## Related Articles

- [GIF vs MP4 for photography: the complete comparison](/blog/gif-vs-mp4-photography)
- [The complete guide to turning burst photos into GIFs](/blog/burst-photos-to-gif-guide)
- [Using GIFs in wedding photo galleries](/blog/gif-wedding-photo-gallery-guide)
