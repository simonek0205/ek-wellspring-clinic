import { clinic, emailHref } from "./site";

// The page a visitor sees when the server itself has failed. Keep it a single
// self-contained string with no client JS beyond the reload button: whatever
// broke, this still has to render.
export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="sv">
  <head>
    <meta charset="utf-8" />
    <title>Sidan kunde inte laddas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fdfaf4; color: #12203c; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 30rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.35rem; margin: 0 0 0.5rem; }
      p { color: #4a5568; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.55rem 1.1rem; border-radius: 0.25rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #12203c; color: #fdfaf4; }
      .secondary { background: #fff; color: #12203c; border-color: #cbd5e0; }
      .contact { margin-top: 1.75rem; font-size: 0.9rem; color: #4a5568; }
      .contact a { padding: 0; border: 0; color: inherit; text-decoration: underline; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Sidan kunde inte laddas</h1>
      <p>Något gick fel hos oss. Försök igen om en stund eller gå tillbaka till startsidan.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Försök igen</button>
        <a class="secondary" href="/">Till startsidan</a>
      </div>
      <p class="contact">
        Vill du boka tid? Ring <a href="${clinic.phone.href}">${clinic.phone.display}</a>
        eller mejla <a href="${emailHref}">${clinic.email}</a>.
      </p>
    </div>
  </body>
</html>`;
}
