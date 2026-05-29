---
layout: ../layouts/MarkdownLayout.astro
title: Privacy Policy
updated: May 29, 2026
---

**Arka: Voice Alarm** (referred to here as "Arka") is built around a simple principle: your voice belongs to you. This page explains what we store, where, and why.

## What stays on your device

Every voice clip you make is stored locally on your iPhone. Personal alarms, voice clips, and your library never touch our servers — there's no account required to use the app this way, and nothing about your private voice clips leaves your device.

## When you sign in

Arka uses **Supabase** as our authentication provider. Signing in is only required if you want to send or receive voice clips with friends. When you sign in, Supabase stores your email address and an authentication token so we can recognize you across devices. We don't sell, share, or analyze this information for marketing.

## When you share a voice clip with a friend

Sharing voice clips is the only feature that involves cloud storage. We use **Supabase** to deliver shared voice clips between people:

- The voice clip is uploaded to Supabase Storage and made available to the recipient you chose.
- The voice clip remains in storage until you remove it.

You can delete a shared voice clip at any time from inside the app, which removes it from our servers.

## Third-party services we rely on

We keep this list short on purpose. Each service below receives only what it needs to do its job, and none of it is linked to your voice clips.

**Supabase** — powers sign-in and voice clip delivery, as described in the sections above. Supabase receives your email address when you create an account and the audio file when you share a voice clip with a friend. See the [Supabase privacy policy](https://supabase.com/privacy).

**RevenueCat** — Arka uses RevenueCat to process subscription purchases through the App Store and to collect anonymous metrics about purchases and revenue. This information is anonymous and cannot be linked back to an individual user. See the [RevenueCat privacy policy](https://www.revenuecat.com/privacy).

**TelemetryDeck** — We use TelemetryDeck to understand how the app is used in aggregate — how often features are opened, which screens are visited, that kind of thing. TelemetryDeck is built for privacy: it only receives anonymous, salted signals and never identifies you personally. See the [TelemetryDeck privacy policy](https://telemetrydeck.com/privacy).

**Sentry** — We use Sentry to receive crash reports and error diagnostics so we can fix bugs quickly. Sentry receives technical information about the crash (stack trace, device model, OS version) but nothing about your voice clips. See the [Sentry privacy policy](https://sentry.io/privacy/).

## What we don't do

- We don't sell or share your data with advertisers or third parties.
- We don't track you across other apps or websites.
- We don't run analytics on the contents of your voice clips.

## Your choices

You can delete your account at any time from inside the app. Deleting your account removes your authentication record and any pending shared voice clips from Supabase. Voice clips stored on your device are never affected — they're yours, and they stay with you.

## Contact

Questions about this policy? Email [support@voicealarm.app](mailto:support@voicealarm.app).
