# IITH Garage

IITH Garage is the portfolio and release surface for the systems built for IIT
Hyderabad. It sits at the suite's apex and links each product to its own
subdomain.

| | |
|---|---|
| **Live** | [iith.online](https://iith.online), the apex of the IITH suite |
| **Repository** | `github.com/chandanmettu/iith-garage` (public). |
| **Push via** | SSH host alias `github-iith-garage` (deploy key `~/.ssh/iith-garage-deploy`) |
| **Deploy** | Hostinger Git auto-deploy from `main`. **A push is a production release.** |
| **Agent policy** | Ask before pushing. |
| **Stack** | Static HTML/CSS/JS, no build step. Design: "The Proving Ground" (bone + flame-orange + Anton). |

```text
index.html          the single page
assets/data.js      ALL content: project cards, statuses, roadmap, timeline, stack, costs
assets/app.js       rendering and interaction (the full-screen build runway)
assets/style.css    styling
assets/logos/ assets/previews/   per-project marks and screenshots
```

Local preview: `python3 -m http.server 8000`, then open `/` and `/?flat` (the
screenshot mode).

## Products shown

| Product | URL | Honest status |
|---|---|---|
| Abhyas | `abhyas.iith.online` | live resource service |
| Merch Store | `store.iith.online` | live external product |
| IITH Athletics | `athletics.iith.online` | live static site |
| Sanchari | `sanchari.iith.online` | live; ticket lifecycle work remains |
| Nivas | `nivas.iith.online` | live PHP/MySQL service |
| IITH Aquatics | `aquatics.iith.online` | live static signpost |
| Ruchi | `ruchi.iith.online` | frontend live in demo mode; shared backend pending |

## Editing

`assets/data.js` is the single content source for project cards, statuses,
roadmap, timeline, stack and costs. Keep claims structural and verifiable:

- **no invented user, usage, performance or uptime numbers.** This is a hard rule. Any metric shown must be one he has confirmed.
- distinguish a deployed frontend from a production-backed service
- link only repositories whose public visibility has been verified
- use generic payment-provider wording
- refresh facts from each project's README and `KNOWN_ISSUES.md`

The “Proving Ground” interface lives in `assets/style.css` and
`assets/app.js`. Update all matching `?v=` references after changes, then test
the main experience plus the `?flat` screenshot mode. Release through the
workspace [`DEPLOY.md`](../DEPLOY.md).
