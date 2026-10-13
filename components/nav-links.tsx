import type { LinkItemType } from "@/components/sheard"
import {
  IconPhotoScan,
  IconMicrophone,
  IconFileText,
  IconVideo,
  IconUsers,
  IconLanguage,
  IconSparkles,
  IconChartBar,
  IconBriefcase,
  IconBuildingCommunity,
} from "@tabler/icons-react"
export const serviceLinks: LinkItemType[] = [
  {
    label: "AI data annotation",
    href: "/services/ai-data-annotation",
    description: "Image, video, text, audio, and 3D",
    icon: <IconPhotoScan aria-hidden="true" />,
  },
  {
    label: "Data collection",
    href: "/services/data-collection",
    description: "Real-world, multilingual datasets",
    icon: <IconVideo aria-hidden="true" />,
  },
  {
    label: "OCR & document AI",
    href: "/services/ocr-and-document-ai",
    description: "Structured data from unstructured text",
    icon: <IconFileText aria-hidden="true" />,
  },
  {
    label: "Transcription & speech",
    href: "/services/transcription-and-speech",
    description: "Transcription and audio labeling",
    icon: <IconMicrophone aria-hidden="true" />,
  },
  {
    label: "Translation & localization",
    href: "/services/translation-and-localization",
    description: "Meaning across languages and cultures",
    icon: <IconLanguage aria-hidden="true" />,
  },
  {
    label: "Generative AI services",
    href: "/services/generative-ai-services",
    description: "Fine-tuning, preferences, and safety",
    icon: <IconSparkles aria-hidden="true" />,
  },
  {
    label: "AI model evaluation",
    href: "/services/ai-model-evaluation",
    description: "Relevance, quality, and human feedback",
    icon: <IconChartBar aria-hidden="true" />,
  },
]
export const companyLinks: LinkItemType[] = [
  {
    label: "About us",
    href: "/about",
    description: "Human expertise for better AI",
    icon: <IconUsers aria-hidden="true" />,
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Bring your perspective to AI data",
    icon: <IconBriefcase aria-hidden="true" />,
  },
  {
    label: "Become a vendor",
    href: "/become-a-vendor",
    description: "Contributors and partner teams",
    icon: <IconBuildingCommunity aria-hidden="true" />,
  },
]
