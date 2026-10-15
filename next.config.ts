import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  redirects: () => [
    ...[
      "/about/:path*",
      "/careers/:path*",
      "/become-a-vendor/:path*",
    ].map((source) => ({
      source,
      destination: "/",
      permanent: false,
    })),
    ...[
      ["ai-data-annotation", "image-annotation"],
      ["transcription-and-speech", "general-transcription"],
      ["translation-and-localization", "multilingual-indian-language-translation"],
      ["ocr-and-document-ai", "ocr-annotation"],
      ["generative-ai-services", "prompt-creation-and-response"],
      ["data-collection", "human-data-collection"],
      ["ai-model-evaluation", "generative-ai-prompt-response-annotation"],
    ].map(([source, destination]) => ({
      source: `/services/${source}`,
      destination: `/services/${destination}`,
      permanent: true,
    })),
  ],
}

export default nextConfig
