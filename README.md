# Agniraj — Option 2

Responsive React website based on the approved Option 2 concept. Built with React 19, TypeScript and Vinext; exported as a static site.

## Run locally

Install the pinned dependencies with `pnpm install`, then use `npm run dev`. Run `npm run build` for the static production output in `dist/client`.

## Content and interactions

The service cards open accessible detail dialogs. Contact buttons open verified phone and email details; email and phone links hand off to the visitor's own apps. No contact information is submitted or stored by this website.

The page supports mobile navigation, keyboard focus, reduced motion and responsive layouts. Company service and contact information comes from the supplied brochure. Photography is illustrative AI-generated imagery; it does not document completed Agniraj projects. The original logo is extracted from the supplied brochure.

Primary content is in `app/page.tsx`; styles are in `app/globals.css`; images are served locally from `public/images`.

Validation: production static build and TypeScript check. Browser interaction testing was not requested.
