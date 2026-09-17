# Natural State Interior-Exterior Solutions update

This is a drop-in update pack for the existing `natural-state-next` Next.js site.

Included:
- 16 optimized WebP project photos under `public/images/recent-work/`
- expanded homepage project proof section
- expanded gallery using the new project photos
- new `/areas/hot-springs` location page
- Hot Springs added to header/footer service-area links
- Hot Springs added to sitemap
- optional project gallery support added to `LocationPage`
- small responsive stylesheet imported from `app/layout.tsx`

Copy these files over the matching paths in the existing project, then run:

```powershell
npm run build
git add .
git commit -m "Add recent project photos and Hot Springs location page"
git push origin main
```
