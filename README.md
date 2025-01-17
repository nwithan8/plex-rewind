# Plex Rewind

[![Plex Rewind release status](https://img.shields.io/github/actions/workflow/status/RaunoT/plex-rewind/release.yml?label=Release)](https://github.com/RaunoT/plex-rewind/actions/workflows/release.yml)
[<img src="https://img.shields.io/github/v/release/raunot/plex-rewind?label=latest" alt="Plex Rewind latest release">](https://github.com/RaunoT/plex-rewind/releases)
[![Plex Rewind pre-release status](https://img.shields.io/github/actions/workflow/status/RaunoT/plex-rewind/pre-release.yml?include_prereleases=true&label=Pre-release)](https://github.com/RaunoT/plex-rewind/actions/workflows/pre-release.yml)
[<img src="https://img.shields.io/github/v/release/RaunoT/plex-rewind?include_prereleases&label=develop" alt="Plex Rewind develop release">](https://github.com/RaunoT/plex-rewind/releases)

A Plex Rewind application inspired by the likes of [Spotify Wrapped](https://www.spotify.com/us/wrapped) and [Tautulli](https://tautulli.com).

Present [Plex](https://plex.tv) user statistics and habits in a beautiful and organized manner - as a web application application powered by [Next.js](https://nextjs.org) and [Tailwind.css](https://tailwindcss.com), using data from [Tautulli](https://tautulli.com), [Overseerr](https://overseerr.dev) and [Plex](https://plex.tv). You can also disable the Rewind functionality and just use it as an easily sharable Dashboard for your Plex users or vice versa!

## Features

- 📱 Fully responsive - viewable, usable & enjoyable on desktop, tablet or mobile, courtesy of [Tailwind.css](https://tailwindcss.com).
- 🔄 Fully dynamic - the data your're viewing will always be the latest available.
- 📆 Rewind - allows your Plex users view their statistics and habits for a given year.
- 👀 Dashboard - provides an easily glanceable overview of activity on your server for all your libraries.
- ✨ Beautiful animations with [Framer Motion](https://www.framer.com/motion).
- 📊 Fuelled by data from [Tautulli](https://tautulli.com) - the backbone responsible for the heavy lifting regarding stats.
- 🔗 Integrates with [Overseerr](https://overseerr.dev) - show request breakdowns and totals.
- 🔐 Log in with Plex - uses [NextAuth.js](https://next-auth.js.org) to enable secure login and session management with your Plex account.
- 🚀 PWA support - installable on mobile devices and desktops thanks to [Serwist](https://github.com/serwist/serwist).
- 🐳 Easy deployment - run the application in a containerized environment with [Docker](https://www.docker.com).
- ⭐ All of this and more - powered by [Next.js](https://nextjs.org).

Keep an eye on the [issues page](https://github.com/RaunoT/plex-rewind/issues) to see what new features have already been requested or to make your own request!

## Preview

![Dashboard](https://i.imgur.com/L5QEYKn.png 'Dashboard')

![Rewind](https://i.imgur.com/tcwMi0x.png 'Rewind')

## Getting started

1. Create a `docker-compose.yml` in your location of choice and run `docker compose up -d`. The app will be available at `http://localhost:8383`.

```yml
services:
  plex-rewind:
    image: ghcr.io/raunot/plex-rewind:latest # :develop for the latest development version
    container_name: plex-rewind
    environment:
      - NEXTAUTH_SECRET= # (required) used to encrypt auth JWT token, generate one with `openssl rand -base64 32`
      - NEXTAUTH_URL=http://localhost:8383 # change to your domain if you are exposing the app to the internet
      - NEXT_PUBLIC_SITE_URL=http://localhost:8383 # change to your domain if you are exposing the app to the internet
      - NEXT_PUBLIC_STATISTICS_START_DATE=2018-01-01 # starting date for "all time" option (YYYY-MM-DD)
    volumes:
      - ./config:/app/config
    ports:
      - 8383:8383
    restart: unless-stopped
```

> _NOTE: If you run into authentication issues, try setting `NEXTAUTH_URL` and `NEXT_PUBLIC_SITE_URL` to your external Docker IP, instead of localhost. For example `http://192.168.1.1:8383`._

### Unraid

Plex Rewind is available in the Community Apps store for Unraid. Search for "Plex Rewind" and install it from grtgbln's repository.

As noted in the installation instructions, you will need to download a copy of "settings.json" into the associated settings path **before** running the application. To download the file, you can open a terminal, enter the directory and run `curl -o settings.json https://raw.githubusercontent.com/RaunoT/plex-rewind/main/config/settings.json.sample`.

## Updating

To update, run `docker compose pull` and then `docker compose up -d`.

## Donate

If you like this project and wish to support it, you can do so by donating via [Patreon](https://www.patreon.com/PlexRewind) or [PayPal](https://paypal.me/raunot). Thank you! ❤️

_Please note that supporting does not guarantee any support or future developments._

## Learn More

To learn more about some of the tools used in this project, take a look at the following resources:

- [Tautulli API reference](https://github.com/Tautulli/Tautulli/wiki/Tautulli-API-Reference)
- [Overseerr API reference](https://api-docs.overseerr.dev)
- [Next.js docs](https://nextjs.org/docs)
- [NextAuth.js docs](https://next-auth.js.org/getting-started/introduction)
