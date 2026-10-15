const groups = [
  {
    id: "data-collection",
    label: "Data collection",
    description:
      "Collect the voices, documents, images, and video your AI needs, with clear contributor guidance and quality checks from the start.",
    image: "/images/services/data-collection.png",
    alt: "A diverse group of people represented in a connected data collection",
    workflow: ["Set the brief", "Prepare contributors", "Collect data", "Review & deliver"],
    inquiry: "Tell us about your data type, participant criteria, languages, and target volume.",
    services: [
      {
        slug: "human-data-collection",
        label: "Human Data Collection",
        title: "Real people. Relevant data.",
        description: "Gather human-created examples for the tasks your model must handle. We plan contributor criteria, instructions, and review around your intended use.",
        includes: ["Participant and sample criteria", "Clear capture instructions and consent flow", "Metadata, duplicate, and quality checks"],
      },
      {
        slug: "text-to-speech-data-collection",
        label: "Text-to-Speech (TTS) Data Collection",
        title: "Build a voice that sounds natural.",
        description: "Collect speech paired with approved scripts to support expressive, consistent text-to-speech systems. Capture the pronunciation and recording conditions your voice model needs.",
        includes: ["Script and pronunciation preparation", "Voice talent and recording sessions", "Audio, transcript, and speaker checks"],
      },
      {
        slug: "multilingual-voice-data-collection",
        label: "Multilingual Voice Data Collection",
        title: "Hear more languages in your data.",
        description: "Collect speech across selected Indian and global languages, accents, and speaking styles. Each recording follows a shared brief while respecting language-specific guidance.",
        includes: ["Language and speaker coverage planning", "Natural speech and prompted recordings", "Transcription, metadata, and audio review"],
      },
      {
        slug: "multilingual-documents-data-collection",
        label: "Multilingual Documents Data Collection",
        title: "Bring real-world documents into view.",
        description: "Source document samples across agreed languages, layouts, and capture conditions. Organize each sample with the context and provenance needed for responsible model development.",
        includes: ["Document and language coverage plan", "Scanned, photographed, or digital samples", "Source tracking and legibility checks"],
      },
      {
        slug: "automobile-data-collection",
        label: "Automobile Data Collection",
        title: "Capture the road as systems see it.",
        description: "Collect vehicle and road-scene data around the environments, conditions, and events your application must understand. Define capture and review criteria before each collection run.",
        includes: ["Road, vehicle, and scenario requirements", "Image, video, or sensor-data capture", "Coverage, safety, and quality review"],
      },
      {
        slug: "video-data-collection",
        label: "Video Data Collection",
        title: "Collect the moments between frames.",
        description: "Build video datasets around the people, objects, actions, and settings that matter to your model. Consistent capture briefs help contributors produce usable footage across scenarios.",
        includes: ["Scene, action, and camera requirements", "Contributor-guided video capture", "Duration, clarity, and coverage checks"],
      },
    ],
  },
  {
    id: "transcription",
    label: "Transcription",
    description:
      "Turn recorded speech into dependable text, with the terminology, timestamps, and speaker detail each project needs.",
    image: "/images/services/transcription.png",
    alt: "A woman listening closely to audio while working at a laptop",
    workflow: ["Share audio & rules", "Transcribe", "Review details", "Deliver files"],
    inquiry: "Share your audio format, language, subject area, and transcript requirements.",
    services: [
      {
        slug: "general-transcription",
        label: "General Transcription",
        title: "Clear transcripts, ready to use.",
        description: "Convert interviews, meetings, and everyday recordings into readable, consistent transcripts. Choose verbatim or clean-read formatting to fit your workflow.",
        includes: ["Verbatim or clean-read transcripts", "Speaker names and timestamps when requested", "Spelling, formatting, and completeness review"],
      },
      {
        slug: "medical-transcription",
        label: "Medical Transcription",
        title: "Handle clinical language with care.",
        description: "Transcribe clinical audio using project-approved terminology and formatting rules. Clear escalation steps keep uncertain terms visible for qualified review.",
        includes: ["Clinical terminology and style guides", "Structured notes or narrative transcripts", "Confidential handling and uncertainty flags"],
      },
      {
        slug: "legal-transcription",
        label: "Legal Transcription",
        title: "Keep every speaker and detail clear.",
        description: "Create accurate transcripts from legal proceedings, interviews, and recorded statements. Preserve speaker turns and project-specified notation for review and reference.",
        includes: ["Speaker identification and turn formatting", "Timestamps and inaudible-speech notation", "Consistent names, terms, and document style"],
      },
      {
        slug: "captioning-and-subtitling",
        label: "Captioning & Subtitling",
        title: "Make spoken content easier to follow.",
        description: "Prepare synchronized captions and subtitles that keep speech readable on screen. Follow your timing, line-length, speaker-label, and language requirements.",
        includes: ["Timed captions and subtitle files", "Speaker labels and relevant sound cues", "Readability, sync, and format checks"],
      },
    ],
  },
  {
    id: "annotation",
    label: "Annotation",
    description:
      "Give training data useful structure with carefully defined labels, consistent review, and exports that fit your pipeline.",
    image: "/images/services/annotation.png",
    alt: "A diverse grid of people shown in an image annotation review",
    workflow: ["Define labels", "Calibrate a sample", "Annotate & review", "Export data"],
    inquiry: "Tell us about your data format, annotation schema, tools, and expected volume.",
    services: [
      {
        slug: "image-annotation",
        label: "Image Annotation",
        title: "Turn pixels into useful labels.",
        description: "Mark the objects, regions, and details your vision model needs to learn. Annotation rules and sample review keep labels consistent across a dataset.",
        includes: ["Bounding boxes, polygons, and segmentation", "Classification, keypoints, and attributes", "Guideline calibration and edge-case review"],
      },
      {
        slug: "video-annotation",
        label: "Video Annotation",
        title: "Follow objects and actions through time.",
        description: "Annotate video frames with labels that preserve movement and continuity. Define frame sampling, tracking rules, and event boundaries around your task.",
        includes: ["Frame-level objects and attributes", "Object tracking across selected frames", "Actions, events, and temporal segments"],
      },
      {
        slug: "text-annotation",
        label: "Text Annotation",
        title: "Make language easier for models to understand.",
        description: "Organize documents and conversations with a clear text taxonomy. Human review helps resolve ambiguous wording and apply labels consistently.",
        includes: ["Entities, intent, sentiment, and topics", "Classification and relationship labels", "Span rules and adjudication guidance"],
      },
      {
        slug: "audio-annotation",
        label: "Audio Annotation",
        title: "Add structure to every sound.",
        description: "Label speech and non-speech audio with the timing and context your models require. Capture speaker turns, sound events, and uncertain segments clearly.",
        includes: ["Speaker and turn labels", "Word, phrase, or event timestamps", "Sound classes and acoustic attributes"],
      },
      {
        slug: "ocr-annotation",
        label: "OCR Annotation",
        title: "Connect text to its place on the page.",
        description: "Prepare image and document labels that help OCR systems read text and understand layout. Capture text regions alongside their order and structure.",
        includes: ["Text transcription and bounding regions", "Reading order, tables, and key-value fields", "Handwriting and low-quality scan review"],
      },
      {
        slug: "3d-annotation",
        label: "3D Annotation",
        title: "Label space in three dimensions.",
        description: "Structure point clouds and 3D scenes with labels suited to perception tasks. Define object classes, box conventions, and review rules for consistent spatial data.",
        includes: ["3D cuboids and object classes", "Point-cloud segmentation and attributes", "Coordinate, occlusion, and consistency checks"],
      },
      {
        slug: "generative-ai-prompt-response-annotation",
        label: "Generative AI Prompt and Response Annotation",
        title: "Give model conversations useful structure.",
        description: "Label prompts and generated responses against a shared rubric. Capture intent, quality, safety, and response traits so examples can support training and evaluation.",
        includes: ["Prompt intent and response attributes", "Quality, safety, and policy labels", "Comparison judgments and rationale codes"],
      },
    ],
  },
  {
    id: "generative-ai-services",
    label: "Generative AI Services",
    description:
      "Develop prompt and response examples with human insight, practical rubrics, and consistent checks for quality and usefulness.",
    image: "/images/services/video-data.png",
    alt: "A person recording a smartphone response in a low-lit setting",
    workflow: ["Set the goal", "Write examples", "Review responses", "Refine the set"],
    inquiry: "Share your use case, model behavior goals, response format, and review criteria.",
    services: [
      {
        slug: "prompt-creation-and-response",
        label: "Prompt Creation & Response",
        title: "Create examples that guide better answers.",
        description: "Develop realistic prompts and quality-checked responses for your target use cases. Each example follows your tone, format, and behavior guidance.",
        includes: ["Prompt sets across defined tasks", "Reference responses with clear rationale", "Coverage, consistency, and quality review"],
      },
      {
        slug: "prompt-response-dataset-creation",
        label: "Prompt-Response Dataset Creation",
        title: "Build a dataset around the behavior you want.",
        description: "Create structured prompt-response pairs for supervised fine-tuning and evaluation. Track useful metadata and apply a repeatable review process from draft to delivery.",
        includes: ["Schema-led prompt and response pairs", "Positive, negative, and edge-case examples", "Deduplication, validation, and export checks"],
      },
    ],
  },
  {
    id: "translation",
    label: "Translation",
    description:
      "Carry meaning across Indian languages with attention to context, terminology, and the way people naturally speak and read.",
    image: "/images/services/voice-capture.png",
    alt: "A man recording a voice sample in a warm, quiet room",
    workflow: ["Set the brief", "Build language guidance", "Translate & review", "Deliver files"],
    inquiry: "Tell us your source and target languages, content type, audience, and style needs.",
    services: [
      {
        slug: "multilingual-indian-language-translation",
        label: "Multilingual Indian Language Translation",
        title: "Make every version feel at home.",
        description: "Translate content between Indian languages while preserving intent, tone, and local context. Shared terminology and bilingual review help each version read naturally.",
        includes: ["Translation across selected Indian languages", "Terminology and style-guide alignment", "Bilingual review and issue resolution"],
      },
    ],
  },
] as const

export const serviceGroups = groups

export const servicePages = serviceGroups.flatMap((group) =>
  group.services.map((service) => ({ ...service, category: group.label, groupId: group.id, image: group.image, alt: group.alt, workflow: group.workflow, inquiry: group.inquiry }))
)
