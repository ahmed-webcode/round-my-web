# Arabic and Amharic portfolio translations

## What will change
- Add a navbar language selector with English, العربية, and አማርኛ on desktop and mobile.
- Keep English as the first-visit default, remember the visitor’s choice, and apply it without reloading the page.
- Translate navigation, Home, About, Experience, Projects, Skills, Education, Contact, footer, chatbot interface, and accessible labels.
- Switch Arabic pages to right-to-left layout while preserving media, project order, and technical LTR values such as URLs, email, phone numbers, and code names.
- Add suitable Arabic and Ethiopic fonts and responsive styling for longer translated text.
- Ask AhmedBot to answer in the selected language while keeping its existing factual safeguards.

## Technical approach
- Add a small React language provider and a structured three-language content catalog; no locale-specific URLs or backend database are needed.
- Initialize in English for SSR, restore the saved choice after hydration, and update the document language and direction in an effect.
- Keep project visuals and links shared, with translated text supplied by index.
- Update visible metadata after a language change; retain English canonical URLs.

## Verification
- Check every route in Arabic and Amharic at desktop and mobile sizes.
- Confirm selection persistence, Arabic RTL, project navigation, and chatbot language behavior.
- Inspect build logs and fix any errors before finishing.
