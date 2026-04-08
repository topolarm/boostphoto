---
title: "Burst to GIF: The Complete Guide to Turning Burst Photos into Smooth Animations"
description: "Learn 3 ways to convert burst photos into GIFs and MP4 videos. Compare Photoshop, online tools, and the fastest method — directly from Lightroom."
date: 2026-04-08
image: "/assets/images/blog/lightroom-burst-dialog.jpg"
imageAlt: "Burst2GIF plugin dialog in Lightroom Classic showing burst photo export settings"
tags: ["burst-photos", "gif", "lightroom", "tutorial"]
draft: false
---

You shot a burst. 20 rapid-fire frames of a bride walking down the aisle, confetti frozen mid-air, a first dance spin. Beautiful stills. But you know what would be even better? Seeing them *move*.

Turning burst photos into GIFs or short video clips is one of the fastest ways to add a wow factor to your client galleries. The problem? Most methods are painfully slow. Some require exporting every frame, importing into Photoshop, tweaking timing, and re-exporting. Others mean uploading to a random website and losing all your Lightroom edits.

This guide covers three ways to convert a photo sequence into a smooth animation — from the most manual to the fastest — so you can pick the right workflow for your situation.

## What Are Burst Photos (and Why Animate Them)?

Burst mode — sometimes called continuous shooting or rapid-fire shooting — captures a series of photos in quick succession. Hold the shutter, and your camera fires off anywhere from 5 to 120 frames per second depending on your body.

Most photographers use burst mode as insurance: shoot 15 frames, pick the sharpest one, delete the rest. That works. But those "rejected" frames contain something valuable — *motion*. Stitched together, they become a smooth animation that shows what a single photo never can.

Think about a confetti throw. One still image freezes the moment. A GIF made from a burst sequence shows the confetti rising, spreading, and falling — you can almost hear the cheering. Same goes for a first dance dip, a toddler running toward the camera, or a hawk launching off a branch.

### Who benefits most?

**Wedding photographers** — GIFs and short clips in Pic-Time or other online galleries surprise clients. One photographer reported his client saying: *"The photos were absolutely touching, especially the moving images between the photos."*

**Family and portrait photographers** — Kids never sit still. That's actually an advantage. A burst of a toddler laughing becomes a 2-second animation that parents will replay endlessly.

**Wildlife and sports photographers** — Action is the whole point. A burst of a bird in flight or a goalkeeper diving becomes a sequence that tells the story of the moment.

The challenge isn't *why* to animate burst photos. It's *how* to do it without burning hours.

## Method 1: Adobe Photoshop (The Manual Route)

Photoshop has had timeline animation since CS6. It works. It's also slow.

Here's the abbreviated process — you can find the full step-by-step walkthrough in our dedicated [Photoshop GIF export guide](/blog/photoshop-gif-export-guide).

### The 12-step summary:

1. Select your burst photos in Lightroom (15-30 frames is ideal)
2. Export them as JPEGs at your desired resolution
3. Open Photoshop
4. Go to File → Scripts → Load Files into Stack
5. Select all your exported JPEGs
6. Open the Timeline panel (Window → Timeline)
7. Click "Create Frame Animation"
8. From the Timeline menu, choose "Make Frames From Layers"
9. Set the frame delay (0.1s for 10fps is a good starting point)
10. Set looping to "Forever"
11. File → Export → Save for Web (Legacy)
12. Choose GIF format, adjust quality, save

That's 12 steps *after* you've already exported from Lightroom. For a single GIF, it takes about 5-8 minutes once you know the workflow. For 15 GIFs from a wedding? You're looking at 75-120 minutes of repetitive clicking.

### Pros:
- Full control over every frame and timing
- Part of the Creative Cloud you already pay for
- High-quality output with granular settings

### Cons:
- 12 manual steps per GIF
- Requires exporting from LR first (losing the non-destructive workflow)
- No automatic re-import back to your catalog
- 15 GIFs = roughly 2 hours of work
- GIF-only — no MP4 export without additional tools

If you only need one or two GIFs per year, Photoshop works fine. If you want to make this a regular part of your delivery, you need something faster.

## Method 2: Online Tools (Quick But Limited)

Several websites let you upload images and spit out a GIF. The most popular is [ezgif.com](https://ezgif.com). Others include imgflip.com and gifmaker.me.

### How it works:

1. Export your burst frames from Lightroom as JPEGs
2. Go to ezgif.com → GIF Maker
3. Upload your images (there's usually a file count or size limit)
4. Set frame delay and order
5. Click "Make a GIF"
6. Download the result

That's 6 steps, fewer than Photoshop. But there are real trade-offs.

### The upload problem

Most online tools limit uploads to 20-30 images or a combined size of 100-200 MB. If you're working with full-resolution JPEGs from a 45MP camera, you'll hit that limit fast. You'll need to resize before uploading, which is another step.

### The edit problem

Here's the bigger issue: you have to **export from Lightroom first**. That means your GIF workflow is separate from your editing workflow. If you tweak the white balance or crop later, you'd need to re-export and re-upload everything.

### The privacy problem

You're uploading client photos to a third-party server. For most working photographers, that's a concern worth considering.

### Pros:
- No software to install
- Free (with ads)
- Faster than Photoshop for simple GIFs

### Cons:
- Requires exporting from Lightroom first
- Upload size and count limits
- Loses your Lightroom edits if you re-edit later
- No MP4 output (usually GIF only)
- Client photos on third-party servers
- No automatic import back to your catalog
- Compression quality is often mediocre

Online tools work in a pinch — say you need one quick GIF and don't want to open Photoshop. But for professional volume, they don't scale.

## Method 3: Burst2GIF Lightroom Plugin (3 Clicks, 10 Seconds)

This is the method I built because the first two drove me crazy.

[Burst2GIF](/) is a Lightroom Classic plugin that converts selected burst photos directly into a GIF or MP4 — without leaving Lightroom. No exporting, no uploading, no Photoshop.

### How it works:

1. **Select** your burst frames in Lightroom's grid view
2. **Run** Burst2GIF (File → Plug-in Extras → Burst2GIF)
3. **Click export** — choose GIF or MP4, set FPS, done

That's it. 3 steps. About 10 seconds per animation.

The plugin reads your photos *with all Lightroom adjustments applied* — exposure, white balance, crop, presets, everything. The output matches what you see in Lightroom's Develop module.

After export, the GIF or MP4 is automatically imported back into your Lightroom catalog with the correct capture time metadata. This matters more than you'd think — when you export an album to Pic-Time or any gallery platform, the animation sits exactly where it should in the timeline, right between the photos it was made from.

### Why MP4 matters

The plugin supports both GIF and MP4 output, and for most professional use, **MP4 is the better choice**. Here's why:

GIF is a 40-year-old format. It's limited to 256 colors per frame, produces large files, and doesn't support audio (not that you'd need it, but the compression matters). A 30-frame GIF from a 24MP camera can easily hit 15-20 MB.

MP4 with H.264 encoding produces the same animation at a fraction of the file size — often 1-2 MB — with millions of colors and much better quality. Every modern browser, phone, and gallery platform supports MP4. Pic-Time, Pixieset, ShootProof — they all handle MP4 natively.

Use GIF when you specifically need it (email signatures, certain social media posts, or clients who request it). Use MP4 for everything else.

### The origin story

In early 2025, I decided GIFs would be part of every wedding album I deliver on Pic-Time. The reactions from my first few test clients were incredible — they kept replaying the little animations and sharing them with friends.

After my first full wedding with this workflow, reality hit: 20 GIFs took me almost 2 hours in Photoshop. Export 20 sets of frames from Lightroom, load each set into Photoshop, create the animation, tweak the timing, export, re-import. For *every single one*.

I'm a wedding photographer from Brno, Czech Republic. I've shot over 200 weddings. I know what "tedious post-production" feels like, and this was next level.

So I built a plugin to fix it. What took 2 hours now takes 5-10 minutes for an entire wedding's worth of GIFs and MP4s. I called it Burst2GIF, and after using it for the rest of the 2025 season, I decided other photographers should have it too.

### Pros:
- 3 steps, 10 seconds per animation
- Preserves all Lightroom edits (exposure, crop, presets, everything)
- Auto-imports back to catalog with correct capture time
- Both GIF and MP4 output
- Works with 5-120fps sequences
- $39 lifetime license (launch price, regular $59)
- Free version available (10 exports to try it)

### Cons:
- macOS only (for now)
- Requires Lightroom Classic (not Lightroom CC)

## Comparison: All Three Methods Side by Side

| Feature | Photoshop | Online Tools | Burst2GIF |
|---|---|---|---|
| **Steps per GIF** | 12 | 6 | 3 |
| **Time per GIF** | 5-8 min | 3-5 min | ~10 sec |
| **Time for 15 GIFs** | ~2 hours | ~1 hour | ~5 min |
| **Preserves LR edits** | No (must export first) | No (must export first) | Yes |
| **Auto-import to LR** | No | No | Yes (with capture time) |
| **GIF output** | Yes | Yes | Yes |
| **MP4 output** | No (needs extra tools) | Rarely | Yes |
| **Works inside LR** | No | No | Yes |
| **Cost** | CC subscription | Free (with limits) | $39 lifetime |
| **Privacy** | Local | Cloud upload | Local |
| **Quality control** | High (manual) | Low-Medium | High (automatic) |

The right choice depends on your volume. If you make one GIF a year, any method works. If you want burst animations in every client gallery, the time difference is massive.

## Best Practices for Burst-to-GIF Animations

Regardless of which method you choose, these tips will improve your results.

### Frame rate (FPS)

The FPS you set determines how fast the animation plays:

- **5 FPS** — Slow, stop-motion feel. Good for artistic effect or when you only have 5-8 frames.
- **8 FPS** — Slightly smoother but still has a "photo sequence" quality. Works well for subtle movements like a smile forming.
- **10 FPS** — The sweet spot for most burst GIFs. Smooth enough to look natural, slow enough to appreciate each frame.
- **15+ FPS** — Approaches video smoothness. Best when you have 30+ frames from a high-FPS camera.

Start with 10 FPS and adjust from there. Burst2GIF lets you preview before exporting, so you can dial it in.

### Resolution

Full-resolution GIFs from a 45MP camera are enormous. Nobody needs a 8192×5464 GIF.

For web galleries (Pic-Time, Pixieset): **1500-2000px on the long edge** is plenty. The file size drops dramatically, and the quality is still excellent on screen.

For social media: **1080px** wide is standard.

For email: **800px** or less. Email clients are ruthless with large files.

If you're exporting MP4 instead of GIF (recommended), you have more flexibility with resolution since the compression is far more efficient.

### File size

GIF file sizes add up fast. A 20-frame, full-resolution GIF can hit 25 MB. For a gallery with 15 GIFs, that's 375 MB of extra load time.

Keep GIFs under **5 MB** for web use. If you're exceeding that, reduce resolution or switch to MP4 (which will likely be under 2 MB for the same content).

### Number of frames

**15-30 frames** is the sweet spot for most burst animations:

- Fewer than 10 frames: the animation feels choppy and too short
- 15-20 frames: smooth, satisfying loop that runs 1.5-2 seconds at 10fps
- 25-30 frames: longer animation, still manageable file size
- More than 40 frames: file gets large, animation may feel too long

For more detail on shooting technique, read our guide on [how to shoot burst photos for GIFs](/blog/how-to-shoot-burst-photos-for-gifs).

## Use Cases: Where Burst Animations Shine

### Weddings and Pic-Time galleries

This is where burst GIFs have the biggest impact. Wedding galleries are already emotional — add a 2-second animation of the first dance spin or confetti raining down, and clients lose it.

The key is integration. If your GIF or MP4 lands in the gallery timeline in the wrong position, it breaks the flow. That's why capture-time metadata matters — Burst2GIF preserves it, so when you export from Lightroom and upload to Pic-Time, everything sorts correctly.

For a deep dive into the best wedding moments for burst photos, check out [10 best wedding moments to capture as burst photos](/blog/best-wedding-moments-for-burst-photos).

### Family and newborn sessions

Kids move. That's usually a problem, but with burst-to-GIF, it's an asset. A toddler's wobbly walk, a baby's yawn, siblings tackling each other — these micro-moments are what parents actually want to remember.

Even a simple 10-frame burst of a baby stretching becomes something parents will watch on repeat.

### Wildlife photography

A bird taking flight. A fox pouncing. A deer turning its head. Wildlife photographers already shoot in burst mode constantly — the animation is right there in the frames you already have.

### Sports and action

A goalkeeper's dive. A skateboarder mid-trick. A runner crossing the finish line. Sports photography is *made* for burst animations.

The high frame rates of sports cameras (10-20+ fps) produce exceptionally smooth sequences. At 20fps, even a 1-second burst gives you 20 frames — enough for a buttery 2-second animation at 10fps playback.

## Frequently Asked Questions

### Do burst GIFs work in Pic-Time?

Yes. Pic-Time supports both GIF and MP4 in galleries. MP4 is recommended for better quality and smaller file size. When exported from Burst2GIF with correct capture time, they sort perfectly in your gallery timeline.

### What's the difference between GIF and MP4 for burst animations?

GIF is limited to 256 colors, produces large files, and is an aging format. MP4 offers millions of colors, much smaller file sizes (often 10x smaller), and better quality. Use MP4 for client galleries and GIF only when the format is specifically required. Read our [detailed GIF vs MP4 comparison](/blog/gif-vs-mp4-photography) for the full breakdown.

### How many burst photos do I need for a good GIF?

15-30 frames is ideal. At 10fps playback, that gives you a 1.5-3 second animation. Fewer than 10 frames will look choppy. More than 40 starts to feel too long and produces large files.

### Does Burst2GIF preserve my Lightroom edits?

Yes — all of them. Exposure, white balance, crop, lens corrections, presets, local adjustments. The plugin reads your photos as Lightroom renders them, so the GIF or MP4 matches your edited look exactly.

### Can I use burst photos shot in RAW?

Absolutely. Burst2GIF works with any format Lightroom can read — RAW (CR2, CR3, NEF, ARW, etc.), JPEG, TIFF, and more. Since it reads through Lightroom's rendering engine, your RAW processing is preserved.

### What FPS should I use?

Start with 10fps for a natural look. Use 5-8fps for a more artistic, stop-motion feel. Use 15+fps if you have lots of frames and want near-video smoothness. Burst2GIF supports anywhere from 5fps to 120fps.

### Is there a free version?

Yes. The free version of Burst2GIF includes 10 exports so you can test it with real photos before buying. The full license is $39 (launch price, regular $59) and it's a one-time payment — no subscription.

### Does it work on Windows?

Not yet. Burst2GIF is macOS only for now. A Windows version is planned.

## Making Burst Animations Part of Your Workflow

The real value of burst-to-GIF isn't one animation — it's making it a standard part of your delivery. When every wedding gallery has 10-15 moving images mixed in with the stills, it transforms the client experience.

The bottleneck was always time. At 2 hours per wedding for GIFs, it was a hard sell. At 5-10 minutes, it's a no-brainer.

Whether you go the Photoshop route, use an online tool for the occasional one-off, or speed things up with Burst2GIF, the point is the same: you already have the frames. The motion is sitting in your Lightroom catalog right now, hiding in those burst sequences you shot and forgot about.

Time to make them move.
