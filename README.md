# Deodhani Technologies website

Business marketing website built with Next.js, React, Tailwind CSS, shadcn/ui, and Motion.

## Development

```sh
pnpm install
pnpm dev
```

## Checks

```sh
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

The contact route currently redirects home. Its implementation is preserved in `app/contact/contact-page.tsx`; contact buttons open an email to the company instead.

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to enable WhatsApp chat. The testimonial quotes are clearly marked sample content, pending approved client quotes.
