# Tug of War Scoreboard

A live results page for a tug of war competition, built with Vue 3, Vite and Firebase.

- Spectators open the link and watch standings re-rank live, by weight class.
- Organizers sign in with Google and tap which team won each end. A match closes when a team reaches the winning number of ends (2 in a best of 3).
- Standings rank by match points, then end difference, then ends won.

Everything below runs on free tiers and needs no credit card.

## 1. Try it locally (no setup)

```bash
npm install
npm run dev
```

Without Firebase configured the app runs in demo mode: every control works, but data lives only in the open browser tab. Use "Organizer tools" then "Load example teams and matches" to see it fill up.

## 2. Create the free Firebase backend

1. Go to https://console.firebase.google.com and choose **Add project**. Turn Google Analytics off.
2. **Build > Firestore Database > Create database.** Start in production mode and pick a nearby region (for Singapore, `asia-southeast1`).
3. **Build > Authentication > Get started > Sign-in method > Google > Enable.**
4. **Project settings (gear icon) > General > Your apps > Web (`</>`).** Register an app and copy the config values.
5. Copy `.env.example` to `.env` and paste the values:

   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_APP_ID=...
   ```

   These values are not secrets. The security rules in the next step are what protect your data.
6. Open `firestore.rules` and replace `organizer@example.com` with the Google account(s) that may enter scores. Everyone else can only read.

## 3. Put it on the internet for free

### Option A: Firebase Hosting (one project for everything)

```bash
npm install -g firebase-tools
firebase login
firebase use --add          # pick the project you created
npm run build
firebase deploy             # publishes the site and the security rules
```

Your site is live at `https://YOUR-PROJECT-ID.web.app`. Share that link with spectators. If `firebase deploy` asks you to set up Hosting, open **Build > Hosting > Get started** in the console once.

### Option B: Netlify, Vercel, Cloudflare Pages or GitHub Pages

1. Push this folder to a GitHub repository and connect it to the host.
2. Build command `npm run build`, output folder `dist`.
3. Add the four `VITE_FIREBASE_*` values as environment variables in the host's settings.
4. In Firebase **Authentication > Settings > Authorized domains**, add your site's domain so Google sign-in works there.
5. Publish the security rules once: paste `firestore.rules` into **Firestore Database > Rules** and press Publish.

For GitHub Pages project sites, set `base` in `vite.config.js` to `'/your-repo-name/'`.

## Running the event

1. Open your live link and click **Organizer sign-in**.
2. In **Organizer tools**, add weight classes, then teams, then matches.
3. On a match card press **Start match**, then tap the team that won each end. Use **Undo last end** if you tap the wrong one.
4. Spectators see rankings change within a second or two. Rows slide into their new place and a ▲ or ▼ badge shows who moved.

Use "Clear examples" in the banner to remove the sample data if you loaded it.

## Fringe games

The tabs under the title switch between events: **Tug of War**, **Sled Pull / Push** and **Handgrip**.

- **Sled Pull / Push** is ranked by lowest time. Pull and push have separate leaderboards (switch with the Pull / Push buttons).
- **Handgrip** is ranked by heaviest weight gripped.
- Organizers type a name and a result in the Record result form. Times accept `12.34` or `1:05.20`, weights are in kg (`42.5`).
- Each athlete or team is ranked on their best attempt. Every attempt stays in the Attempts list, and the best one is tagged. Equal results share a position.
- Spectators see the same live re-ranking and ▲ / ▼ movement badges as in tug of war.
- To remove a mistyped entry, sign in, open Organizer tools, and press Remove next to it.

These events use two extra Firestore collections, `sled` and `grip`. The existing security rules already cover them, so you only need to redeploy the site. If you published the rules before, nothing changes.

## Free plan limits

Firebase's free plan includes 50,000 Firestore reads and 20,000 writes per day. Each spectator who opens the page reads each document once (a few dozen for a small event) and then one read per change. A few hundred spectators fit comfortably. Hosting has a daily transfer cap, so for a very large audience Cloudflare Pages or Netlify are the safer choice. Check Firebase's pricing page for the current numbers.

## Project layout

```
src/store.js                    live data, standings maths, organizer actions
src/firebase.js                 Firebase setup (demo mode when .env is empty)
src/examples.js                 sample teams and matches
src/components/StandingsTable   ranked table with movement badges
src/components/MatchesPanel     live, upcoming and finished matches
src/components/MatchCard        one match with the rope marker and score buttons
src/components/OrganizerPanel   add classes, teams, matches, event settings
src/components/FringeBoard      sled and handgrip leaderboards, attempts list, record form
src/fringe.js                   time and weight parsing, formatting and ranking (no dependencies)
firestore.rules                 who may write (organizer emails)
```

Data lives in these places in Firestore: `meta/event` (name, points per win, ends per match) and the collections `categories`, `teams`, `matches`, `sled` (one document per attempt: name, mode, time in ms) and `grip` (one document per attempt: name, kg).
