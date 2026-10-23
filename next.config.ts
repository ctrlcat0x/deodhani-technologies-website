import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  redirects: () => [
    ...[
      ["ai-data-annotation", "image-annotation"],
      ["transcription-and-speech", "general-transcription"],
      [
        "translation-and-localization",
        "multilingual-indian-language-translation",
      ],
      ["ocr-and-document-ai", "image-annotation"],
      ["generative-ai-services", "prompt-creation-and-response"],
      ["data-collection", "human-data-collection"],
      ["ai-model-evaluation", "prompt-creation-and-response"],
      ["text-to-speech-data-collection", "human-data-collection"],
      ["multilingual-voice-data-collection", "human-data-collection"],
      ["multilingual-documents-data-collection", "human-data-collection"],
      ["automobile-data-collection", "human-data-collection"],
      ["video-data-collection", "human-data-collection"],
      ["medical-transcription", "general-transcription"],
      ["legal-transcription", "general-transcription"],
      ["captioning-and-subtitling", "general-transcription"],
      ["video-annotation", "image-annotation"],
      ["text-annotation", "image-annotation"],
      ["audio-annotation", "image-annotation"],
      ["ocr-annotation", "image-annotation"],
      ["3d-annotation", "image-annotation"],
      ["generative-ai-prompt-response-annotation", "image-annotation"],
      ["prompt-response-dataset-creation", "prompt-creation-and-response"],
    ].map(([source, destination]) => ({
      source: `/services/${source}`,
      destination: `/services/${destination}`,
      permanent: true,
    })),
  ],
}

export default nextConfig
