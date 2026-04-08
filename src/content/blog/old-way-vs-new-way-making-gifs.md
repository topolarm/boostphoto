---
title: "The Old Way vs The New Way: Making GIFs from Photos in 2025"
description: "12 steps in Photoshop or 3 clicks in Lightroom. A side-by-side comparison of the old and new way to create GIFs from burst photos."
date: 2026-03-30
image: "/assets/images/blog/lightroom-burst-dialog.jpg"
imageAlt: "Comparison of Photoshop timeline and Burst2GIF plugin for creating GIFs"
tags: ["workflow", "gif", "lightroom", "photoshop"]
draft: false
---

For years, making a GIF from your photos meant a 12-step journey across two applications, with manual file management, quality loss, and about 15-20 minutes of clicking through menus. Every single time.

I know this because I did it. For months. I'd shoot beautiful burst sequences at weddings, sit down to edit, and then spend an entire evening converting photo sequences into animations through Photoshop. Twenty GIFs for a wedding took roughly 2 hours. Not 2 hours of creative work — 2 hours of repetitive exporting, importing, clicking, and waiting.

Then I built a better way. Here's exactly what changed.

## The Old Way: 12 Steps Through Photoshop

Let's walk through the traditional process of creating a GIF from a series of photos. If you've done this before, you'll recognize every painful step. If you haven't, this is what you've been spared.

### Step 1: Edit Your Photos in Lightroom

You start in Lightroom, where your burst photos live. You select the 20-30 frames from one rapid-fire sequence and sync your edit settings across them — white balance, exposure, tone curve, cropping. Standard Lightroom workflow.

This is the only step that's actually creative work. Everything after this is mechanical.

### Step 2: Export as JPEGs to a Folder

File > Export. You need to get these photos out of Lightroom and into a format Photoshop can work with. So you export 20-30 full-resolution JPEGs to a temporary folder somewhere on your drive.

You set up naming conventions (burst_001, burst_002...), choose your quality setting (95% to minimize loss), and pick an export location you'll remember. Hit Export. Wait for 20-30 files to render.

This is your first quality loss. Your Lightroom edits get baked into JPEG files with compression artifacts. The more aggressive your edit (heavy shadow recovery, strong color grading), the more visible the JPEG artifacts become. It's a lossy roundtrip that didn't need to happen.

### Step 3: Open Adobe Photoshop

Switch applications. If Photoshop isn't already running, that's a 15-30 second launch time depending on your machine and how many Creative Cloud processes are fighting for resources.

This also means you need a Photoshop subscription. At $22.99/month for the Photography Plan, that's $275.88 per year. If you're only using Photoshop for GIF creation, that's an expensive GIF machine.

### Step 4: File > Scripts > Load Files into Stack

This is Photoshop's way of importing a sequence of images as layers. Navigate to File > Scripts > Load Files into Stack. A dialog appears.

### Step 5: Browse and Select Your JPEGs

Click Browse, navigate to the folder where you exported your JPEGs, select all 20-30 files, and click OK. Photoshop loads each file as a separate layer.

Wait while Photoshop creates a document with 20-30 layers. For full-resolution files, this can take 30-60 seconds and consume significant RAM. A 30-layer document from a 45-megapixel camera needs several gigabytes of memory.

### Step 6: Window > Timeline

Now you need to open the Timeline panel. Go to Window > Timeline. A panel appears at the bottom of your workspace with a "Create Frame Animation" button.

If you've never used this panel before, you might spend a few minutes figuring out where it is and what the options mean. Photoshop's animation features are tucked away in a panel that most photographers never touch.

### Step 7: Click "Create Frame Animation"

Click the button. Photoshop creates a single frame showing your top layer. Not very useful yet.

### Step 8: Hamburger Menu > Make Frames from Layers

Here's the step that's impossible to discover without a tutorial. Click the tiny hamburger menu icon (three horizontal lines) in the top-right corner of the Timeline panel. From the dropdown, select "Make Frames from Layers."

Photoshop converts each layer into an animation frame. Now you have 20-30 frames in your timeline. But they're probably in reverse order (Photoshop stacks layers bottom-to-top but plays frames left-to-right). So you might need to click that hamburger menu again and select "Reverse Frames."

### Step 9: Select All Frames, Set Duration

Click the first frame, shift-click the last frame to select all. Then click the time indicator under any frame and set the duration. For a smooth photo animation, 0.1 seconds (10 fps) works well for most burst sequences.

Getting the timing right is trial and error. 0.08s feels rushed. 0.15s feels sluggish. You press the play button, watch the preview, adjust, preview again. A few iterations until it feels right.

### Step 10: Set Loop to Forever

At the bottom-left of the Timeline panel, there's a dropdown that says "Once." Change it to "Forever" so the GIF loops continuously. Easy to forget. If you forget, your GIF plays once and stops — and you won't notice until you open the exported file.

### Step 11: File > Export > Save for Web (Legacy)

This is where the actual GIF gets created. Go to File > Export > Save for Web (Legacy). Yes, it literally says "Legacy" in the menu — Adobe has been deprecating this feature for years, but it's still the only way to export an animated GIF from Photoshop.

The Save for Web dialog opens. Set format to GIF. Choose your color settings (256 colors max — that's the GIF limitation). Select your dithering method. Set the output dimensions (you probably want to scale down from full resolution to something like 1500px wide).

Watch the preview. Notice how your beautiful color grading now looks banded and dithered. Accept this because GIF only supports 256 colors and there's nothing you can do about it.

Hit Save. Choose a filename and location. Wait while Photoshop renders 20-30 frames into a GIF file. For web-resolution output, this takes 10-30 seconds.

### Step 12: Manual File Management

Your GIF is now sitting in whatever folder you saved it to. But it's not in your Lightroom catalog. It doesn't have the correct capture timestamp. It won't sort chronologically with your wedding photos.

To deliver this in a client gallery, you need to:
- Move the GIF file to your wedding photo folder
- Manually import it into Lightroom (or your gallery upload folder)
- Rename it so it sorts in the right position among your photos
- Possibly use a metadata tool to set the correct capture time

If you're using Pic-Time or another gallery platform that sorts by capture time, this manual timestamp step is critical. Without it, your GIFs end up at the beginning or end of the gallery instead of between the photos where they belong.

### Total Time: 15-20 Minutes Per GIF

From the moment you leave Lightroom to the moment you have a properly filed GIF ready for gallery delivery: 15-20 minutes. And that's if you know all the steps by heart.

For a wedding with 20 burst sequences you want to animate, that's **5-7 hours of Photoshop work**. Not creative work. Mechanical, repetitive, mind-numbing clicking through the same 12 steps twenty times.

### Summary of Problems

- **JPEG roundtrip:** Your photos go Lightroom → JPEG → Photoshop → GIF. The JPEG step introduces compression artifacts that compound with GIF's 256-color limitation.
- **Requires Photoshop:** $275.88/year for the Photography Plan. If you're using Lightroom alone, GIF creation forces you into a subscription upgrade.
- **No auto-import:** The finished GIF doesn't come back to Lightroom. Manual file management required.
- **No capture time:** The GIF file has no meaningful timestamp. Manual metadata editing needed for gallery sorting.
- **Time cost:** 15-20 minutes per GIF, scaling linearly with the number of sequences.
- **Context switching:** You leave your Lightroom editing flow, open a completely different app with a completely different interface, perform a completely different task, then come back. Your editing momentum is destroyed.

## The New Way: 3 Steps in Lightroom

Now here's the same task with Burst2GIF.

### Step 1: Select Your Photos in Lightroom Library

You're in Lightroom, looking at your burst sequence. Select the 20-30 frames. Same as before — this part doesn't change.

### Step 2: Library > Plug-in Extras > Burst2GIF

One menu click. The Burst2GIF dialog appears, showing a preview of your animation with all your Lightroom edits applied in real time.

Set your frame rate (I usually use 10 fps). Choose GIF or MP4 format. Pick your output width. That's all the options you need.

### Step 3: Click Export

Click the Export button. Burst2GIF processes your frames — reading them directly from Lightroom with all your edits applied, no JPEG export needed — and creates your animation.

When it finishes:
- The GIF/MP4 file is automatically imported into your Lightroom catalog
- The capture time is set to match the original burst sequence timestamp
- The file appears in your catalog right where it belongs chronologically

You never leave Lightroom. You never touch Photoshop. You never manage files. You never edit metadata.

### Total Time: 10 Seconds

Ten seconds. Not 10 minutes. Ten seconds from "I want a GIF of this" to "the GIF is in my catalog, ready for export."

For a wedding with 20 burst sequences: **3-5 minutes total.** Not 5-7 hours. Minutes.

## Side-by-Side Comparison

| | Old Way (Photoshop) | New Way (Burst2GIF) |
|---|---|---|
| Steps | 12 | 3 |
| Time per GIF | 15-20 minutes | ~10 seconds |
| Requires Photoshop | Yes ($275.88/year) | No |
| Preserves LR edits directly | No (JPEG roundtrip) | Yes (reads edits directly) |
| Auto-imports to LR | No | Yes |
| Sets capture time | No (manual) | Yes (automatic) |
| Output formats | GIF only | GIF and MP4 |
| Workflow interruption | Switches to different app | Stays in Lightroom |
| Cost | Photoshop subscription | $39 one-time (launch price) |
| 20 GIFs for a wedding | 5-7 hours | 3-5 minutes |

The numbers aren't subtle. This isn't a 20% improvement. It's a fundamental workflow change that turns a multi-hour chore into a few minutes of work you barely notice.

<div style="background: linear-gradient(to right, #4f46e5, #4338ca); border-radius: 12px; padding: 24px; margin: 40px 0; text-align: center;">
  <p style="color: white; font-weight: 600; font-size: 18px; margin: 0 0 8px 0;">Turn your burst photos into GIFs in 10 seconds.</p>
  <p style="color: #c7d2fe; font-size: 14px; margin: 0 0 16px 0;">Free version — 10 exports, no credit card needed.</p>
  <a href="/#pricing" style="display: inline-block; background: white; color: #4338ca; font-weight: 600; font-size: 14px; padding: 10px 24px; border-radius: 8px; text-decoration: none;">Try Burst2GIF Free</a>
</div>

## Real Numbers From Real Weddings

In early 2025, I decided that animated moments would be part of every wedding delivery. Living photos were the missing piece in my gallery presentations, and clients were already reacting strongly to the few I'd made experimentally.

My first full wedding with this commitment: 22 burst sequences I wanted to animate. Using the Photoshop workflow, this took me just over 2 hours. Two hours of exporting, importing, clicking through Photoshop menus, exporting again, managing files, fixing timestamps. I finished feeling like I'd done data entry, not creative work.

The following week, same scenario. Different wedding, 18 burst sequences. This time I used Burst2GIF. All 18 animations were processed during a 10-minute break in my editing session. I selected each burst, ran the plugin, moved on. At the end, all 18 MP4 files were in my Lightroom catalog with correct timestamps, ready to export with the rest of the wedding.

The time savings were so dramatic that I went back and calculated the yearly impact. At 40 weddings per year with an average of 15 animated sequences per wedding, that's 600 GIFs annually.

**Old way:** 600 GIFs × 17.5 minutes average = 175 hours per year. That's over 4 full work weeks.

**New way:** 600 animations × 10 seconds = 100 minutes per year. Under 2 hours.

The difference: **173 hours.** That's a month of full-time work, reclaimed.

## The Quality Difference

Time savings aside, the quality improvement matters too.

The Photoshop workflow introduces a JPEG roundtrip. Your Lightroom edits get baked into compressed JPEG files, which then get further compressed into GIF's 256-color palette. Two stages of lossy compression, compounding each other.

Burst2GIF reads your photos with Lightroom edits applied directly — no intermediate file. When you export as MP4, you get full 16.7-million-color output from your edited RAW files. When you export as GIF, you still get the 256-color limitation (that's the GIF format, not the tool), but without the additional JPEG compression layer.

The practical result: smoother skin tones, cleaner color gradients, and sharper details in your animations. Especially visible in wedding photography where skin tones and fabric textures matter.

## Who Should Still Use the Photoshop Method?

Honesty time: there are scenarios where the old way is still the right way.

**Cinemagraph creation.** If you're making true cinemagraphs — where part of the image moves and the rest is frozen — you need Photoshop's layer masking capabilities. Burst2GIF animates the entire frame. Selective movement requires pixel-level masking that only a layer-based editor can provide.

**One or two GIFs per year.** If you make animated content so rarely that you'll forget the Burst2GIF workflow between uses, and you already know the Photoshop steps by heart, the switching cost might not be worth it. (Though at $39 one-time for the plugin, the math still favors Burst2GIF even at very low volumes.)

**Complex compositing.** If you're combining elements from different sources — a burst sequence with text overlays, graphics, or frames from different shoots — Photoshop's compositing tools are necessary. Burst2GIF works with consecutive frames from one burst sequence.

For everyone else — and that's 95%+ of photographers who want to create animated content from their photo sequences — the new way is unambiguously better in every measurable dimension.

## The Bigger Picture: Why This Matters

Making GIF creation easy doesn't just save time. It changes what's possible in your client deliverables.

When creating a single GIF took 20 minutes, I'd make 2-3 per wedding. The time cost was too high to do more. That meant I was selective to the point of leaving great moments on the table.

When creating an animation takes 10 seconds, I make 15-20 per wedding. Every good burst sequence gets processed. Every first look, every confetti moment, every candid laugh that unfolded over 2 seconds — it all makes it into the gallery.

The result isn't just efficiency. It's a fundamentally different product. My wedding galleries went from "beautiful photos with a couple of GIFs at the end" to "an immersive experience where moments come alive throughout the entire timeline."

Clients notice. They comment on it. They share the animated moments more than any static photo. And they tell their friends, which is how wedding photography businesses actually grow.

The old way made GIFs a special occasion. The new way makes them part of every delivery. That's the real difference.

## Get Started

[Burst2GIF](/) is available as a Lightroom Classic plugin for macOS. The free version includes 10 exports so you can test the workflow with real wedding content before committing.

The full version is $39 during the launch period (regular price $59) — a lifetime license, no subscription. Compare that to the Photoshop Photography Plan at $275.88/year, and the economics are straightforward.

If you want to see the detailed old-way steps for reference, check the [Photoshop GIF export guide](/blog/photoshop-gif-export-guide). For the complete Burst2GIF workflow, see the [Lightroom GIF how-to](/blog/lightroom-gif-how-to). And for shooting technique, read the [complete burst photography guide](/blog/burst-photos-to-gif-guide).
