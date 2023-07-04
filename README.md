# <img src="https://poggit.pmmp.io/res/poggit-icon.png" alt="Poggit" width="28" /> on Next.js

We can agree that Poggit's UI isn't bad, but it's also not the best.

So I decided to make a better version of poggit with [MantineUI](https://mantine.dev), which reduced a lot the work that I had to do with design & programming.

Feel free to explore & contribute!

> **Note** <br>
> This doesn't has the full functionality of poggit so it isn't a replacement. It still relies on poggit's API and as SOFe already said it [on this comment](https://github.com/poggit/poggit/issues/337#issuecomment-1610718902), only the releases endpoint is available for external websites.
> A full replacement will require a lot of work which of course I'm not going to do, probably.

## Tech Stack

* [Next.js](https://nextjs.org) for everything ❤
* [React](https://react.dev) for everything ❤
* [TailwindCSS](https://tailwindcss.com) as a CSS utility (margins, paddings)
* [MantineUI](https://mantine.dev) for everything around UI.
* [SWR](https://swr.vercel.app/) (Stale-While-Revalidate RFC) for data fetching (actual fetching, caching, revalidating).