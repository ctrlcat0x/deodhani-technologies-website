import type { LinkItemType } from "@/components/sheard"
import {
  IconPhotoScan,
  IconMicrophone,
  IconUsers,
  IconLanguage,
  IconSparkles,
  IconBriefcase,
  IconBuildingCommunity,
} from "@tabler/icons-react"
export const serviceLinks: LinkItemType[] = [
  {
    label: "Data collection",
    href: "/services/human-data-collection",
    description: "Human, voice, document, automobile, and video data",
    icon: <IconUsers aria-hidden="true" />,
  },
  {
    label: "Transcription",
    href: "/services/general-transcription",
    description: "Transcription and audio labeling",
    icon: <IconMicrophone aria-hidden="true" />,
  },
  {
    label: "Annotation",
    href: "/services/image-annotation",
    description: "Image, video, text, audio, OCR, 3D, and AI annotation",
    icon: <IconPhotoScan aria-hidden="true" />,
  },
  {
    label: "Generative AI services",
    href: "/services/prompt-creation-and-response",
    description: "Prompt creation and response datasets",
    icon: <IconSparkles aria-hidden="true" />,
  },
  {
    label: "Translation",
    href: "/services/multilingual-indian-language-translation",
    description: "Multilingual Indian language translation",
    icon: <IconLanguage aria-hidden="true" />,
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
