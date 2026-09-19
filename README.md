# LifeDrop — Blood Donor & Request Finder

## Problem

Blood requests in Ethiopia are scattered across Facebook, Telegram, and phone calls.
Families waste hours calling hospitals and donors, and urgent requests go unanswered.

## User

A family member or patient urgently searching for a matching blood donor.

## Screens

- `/` Home — search + urgent requests
- `/requests` — filtered list (query: bloodType, city)
- `/requests/:id` — one request (dynamic)
- `/donate` — donor registration form
- `/login` — for hospital/admin (later)
- `/about` — how it works and privacy
- `*` — NotFound

## Data

- Request: id, bloodType, city, hospital, contactName, contactPhone, urgency, date, notes
- Donor: id, bloodType, city, contactPhone, available, lastDonation

## Stack

Vite · React · React Router · (Next.js from Day 36)

## Privacy

Uses mock data only. No real personal information collected.

## Run

npm install
npm run dev
