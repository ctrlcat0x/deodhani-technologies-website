import type { LinkItemType } from "@/components/sheard"
import {
  IconPhotoScan,
  IconMicrophone,
  IconFileText,
  IconVideo,
  IconUsers,
  IconMessageCircle,
} from "@tabler/icons-react"
export const productLinks: LinkItemType[] = [
  {
    label: "Image annotation",
    href: "/#data-products",
    description: "Object detection and segmentation",
    icon: <IconPhotoScan aria-hidden="true" />,
  },
  {
    label: "Video annotation",
    href: "/#data-products",
    description: "Frame-by-frame scene understanding",
    icon: <IconVideo aria-hidden="true" />,
  },
  {
    label: "Text & documents",
    href: "/#data-products",
    description: "Structured data from unstructured text",
    icon: <IconFileText aria-hidden="true" />,
  },
  {
    label: "Speech & audio",
    href: "/#data-products",
    description: "Transcription and audio labeling",
    icon: <IconMicrophone aria-hidden="true" />,
  },
]
export const companyLinks: LinkItemType[] = [
  {
    label: "About Deodhani",
    href: "/#about",
    description: "Human expertise for better AI",
    icon: <IconUsers aria-hidden="true" />,
  },
  {
    label: "Contact our team",
    href: "mailto:info@deodhanitechnologies.com",
    description: "Let's talk about your next dataset",
    icon: <IconMessageCircle aria-hidden="true" />,
  },
]
