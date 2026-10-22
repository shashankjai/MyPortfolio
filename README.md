# Shashank Jaiswal — Portfolio

Frontend-only React + Vite + Tailwind CSS site. No backend, database or auth.

## Run
```
npm install
npm run dev        # local dev server
npm run build      # production build in dist/
npm run preview
```

## Deploy (Vercel / Netlify)
Build command `npm run build`, output directory `dist`. No environment variables needed.

## Things to fill in
1. **Resume**: set the Google Drive resume URL in `src/components/resume.js`. The resume links open the shared document.
2. **Profile links**: set LinkedIn, X, LeetCode, CodeChef, Codeforces and GeeksforGeeks URLs in `src/data/profile.js`. Empty links are not rendered.
3. **Experience**: add entries from your resume in `src/data/experience.js`.
4. **IoTSentinel / DPI features**: drafted from the project descriptions; please verify against the repos in `src/data/projects.js`.

All content lives in `src/data/`. The hero image is `public/images/hero-developer.png`. No phone number is used anywhere.
