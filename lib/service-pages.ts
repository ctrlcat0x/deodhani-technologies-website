export const servicePages = [
  {
    slug: "ai-data-annotation",
    label: "AI data annotation",
    title: "The right labels. A clearer picture.",
    description:
      "Give your models the context they need with human-reviewed image, video, text, audio, and 3D annotation. Start with your use case. Build a labeling workflow around it.",
    image: "/images/data-work/annotation-review.jpg",
    alt: "A data specialist reviewing labeled portrait examples",
    caption:
      "Computer vision in context: object boundaries, classes, and relationships in a street scene. Illustrative sample.",
    topics: ["Image", "Video", "Text & NLP", "Audio", "3D"],
    sections: [
      {
        title: "From pixels to a world your model can read.",
        text: "Build consistent visual labels for detection, tracking, and scene understanding. Define the annotation guide, review ambiguous examples, and keep the labels aligned with your model’s task.",
        image: "/images/data-work/face-segmentation.jpg",
        alt: "An image reviewer checking segmentation boundaries around portrait subjects",
        items: [
          "Bounding boxes, polygons, segmentation, and keypoints",
          "Video object tracking and frame-by-frame activity labels",
          "3D cuboids and point-cloud annotation scoped to your tools",
        ],
      },
      {
        title: "Language, sound, and the meaning between them.",
        text: "Turn unstructured conversations and documents into labeled examples. Clear taxonomies and human review help distinguish the intent, entities, and context that automated labeling can miss.",
        image: "/images/data-work/model-evaluation.jpg",
        alt: "Reviewers comparing model outputs on a monitor",
        items: [
          "Named entities, sentiment, intent, and text classification",
          "Audio events, speaker segments, and speech labels",
          "Guideline calibration, adjudication, and agreed export formats",
        ],
      },
    ],
    workflow: [
      "Define your taxonomy",
      "Calibrate a sample",
      "Annotate & review",
      "Deliver structured labels",
    ],
    inquiry:
      "Share your data types, label taxonomy, approximate volume, and preferred annotation tools.",
  },
  {
    slug: "transcription-and-speech",
    label: "Transcription and speech",
    title: "Every voice carries more than words.",
    description:
      "Make speech usable for your next application. Bring together transcription, voice collection, and speaker-aware data preparation for speech recognition and synthesis.",
    image: "/images/data-work/speech-collection.jpg",
    alt: "An Assamese speaker recording a phrase with a language researcher",
    caption:
      "Useful speech data preserves the words, speakers, and context of a recording. Illustrative photography.",
    topics: [
      "Transcription",
      "Voice collection",
      "Speech to text",
      "Text to speech",
      "Diarization",
    ],
    sections: [
      {
        title: "Transcripts that preserve the conversation.",
        text: "Choose verbatim or edited transcripts to suit your application. Align words with audio and identify speaker changes so your dataset reflects how people actually communicate.",
        image: "/images/data-work/speech-collection.jpg",
        alt: "A speaker recording a phrase while a language researcher monitors the session",
        items: [
          "Speech-to-text transcription and timestamp alignment",
          "Speaker diarization and conversational turn labeling",
          "Review of accents, background noise, and unclear segments",
        ],
      },
      {
        title: "Collect the voices your application needs.",
        text: "Plan voice recordings around your language, speaker, and acoustic requirements. A defined recording brief helps create consistent material for speech recognition and text-to-speech development.",
        image: "/images/data-work/face-video.jpg",
        alt: "A participant recording a short video sample on a smartphone",
        items: [
          "Scripted and conversational voice collection",
          "Pronunciation and transcript review for TTS datasets",
          "Speaker consent, recording checks, and delivery specifications",
        ],
      },
    ],
    workflow: [
      "Define language & speakers",
      "Record or ingest",
      "Transcribe & align",
      "Review & deliver",
    ],
    inquiry:
      "Tell us your languages, recording hours, transcript format, and speaker requirements.",
  },
  {
    slug: "translation-and-localization",
    label: "Translation and localization",
    title: "Meaning travels. Make sure it arrives.",
    description:
      "Connect with people in their own language. Translate and adapt content with attention to terminology, local context, and the way your audience reads and speaks.",
    image: "/images/data-work/language-localization.jpg",
    alt: "Two language specialists reviewing a document together",
    caption:
      "The audience, subject, and purpose all shape the right choice of words. Illustrative photography.",
    topics: [
      "Translation",
      "Localization",
      "MT post-editing",
      "Linguistic evaluation",
    ],
    sections: [
      {
        title: "More than a word-for-word translation.",
        text: "Adapt documents, product content, and language datasets for the people who use them. Establish a glossary and style guide so terminology stays consistent across every touchpoint.",
        image: "/images/data-work/language-localization.jpg",
        alt: "Language specialists reviewing a document at a shared desk",
        items: [
          "Document and digital content translation",
          "Product, interface, and cultural localization",
          "Terminology management and bilingual review",
        ],
      },
      {
        title: "Give machine translation a human second look.",
        text: "Review machine-generated translations against the source and the brief. Linguistic evaluation helps reveal meaning errors, awkward phrasing, and local conventions that automated metrics can overlook.",
        image: "/images/data-work/model-evaluation.jpg",
        alt: "Reviewers comparing model outputs and quality signals",
        items: [
          "Machine translation post-editing",
          "Fluency, accuracy, and terminology evaluation",
          "Error categorization and actionable language feedback",
        ],
      },
    ],
    workflow: [
      "Agree the brief",
      "Build a glossary",
      "Translate & adapt",
      "Review in context",
    ],
    inquiry:
      "Share the language pairs, subject area, content volume, and localization needs.",
  },
  {
    slug: "ocr-and-document-ai",
    label: "OCR and document AI",
    title: "Unlock what’s inside your documents.",
    description:
      "Turn scans, forms, and handwritten pages into structured information. Prepare document datasets that connect text with its layout, fields, and relationships.",
    image: "/images/data-work/document-ai.jpg",
    alt: "A document specialist reviewing structured fields in a scanned form",
    caption:
      "Document understanding connects text to structure: fields, tables, signatures, and reading order. Illustrative sample.",
    topics: ["OCR", "Document annotation", "Data extraction", "Handwriting"],
    sections: [
      {
        title: "Read the page. Understand the structure.",
        text: "Document models need to know where information sits as well as what it says. Annotate text regions, layout elements, and reading order across forms, invoices, and other document types.",
        image: "/images/data-work/document-ai.jpg",
        alt: "A form specialist checking document fields on paper and screen",
        items: [
          "Text bounding boxes and transcription for OCR",
          "Table, paragraph, heading, and signature regions",
          "Key-value pairs and document classification",
        ],
      },
      {
        title: "Make difficult documents useful.",
        text: "Build review steps for handwritten entries, low-quality scans, and changing layouts. Capture uncertainty in the annotation guide instead of forcing an unreliable label.",
        image: "/images/data-work/annotation-review.jpg",
        alt: "A data specialist reviewing visual labels on a monitor",
        items: [
          "Handwriting transcription and field extraction",
          "Exception handling for illegible or incomplete content",
          "Schema checks and structured export preparation",
        ],
      },
    ],
    workflow: [
      "Define document types",
      "Set the schema",
      "Extract & annotate",
      "Validate the output",
    ],
    inquiry:
      "Describe your document types, languages, sample layouts, and required output schema.",
  },
  {
    slug: "generative-ai-services",
    label: "Generative AI services",
    title: "Better answers begin with human judgment.",
    description:
      "Bring human expertise into the generative AI lifecycle. Develop supervised examples, preference data, and evaluation workflows around the behavior you want from your model.",
    image: "/images/data-work/generative-ai.jpg",
    alt: "A human evaluator comparing two model responses on a monitor",
    caption:
      "Human feedback adds context, from instruction examples to response preferences. Illustrative photography.",
    topics: [
      "LLM evaluation",
      "RLHF",
      "Supervised fine-tuning",
      "Prompt evaluation",
      "AI safety",
    ],
    sections: [
      {
        title: "Teach with examples. Refine with preferences.",
        text: "Prepare task-specific instruction and response pairs for supervised fine-tuning. Collect human preference judgments using a rubric that makes helpfulness, relevance, and clarity explicit.",
        image: "/images/data-work/generative-ai.jpg",
        alt: "A human evaluator selecting a preferred model response",
        items: [
          "Instruction writing and supervised fine-tuning data",
          "Response ranking and RLHF preference annotation",
          "Reviewer calibration and disagreement resolution",
        ],
      },
      {
        title: "Evaluate what your model says—and how it says it.",
        text: "Test prompts and responses against the intended use case. Human review helps identify unsupported statements, instruction-following failures, and safety concerns before they become user experiences.",
        image: "/images/data-work/model-evaluation.jpg",
        alt: "Reviewers checking model results against evaluation criteria",
        items: [
          "Prompt and response evaluation against defined rubrics",
          "Factuality, helpfulness, and instruction-following review",
          "Safety evaluation and documented failure categories",
        ],
      },
    ],
    workflow: [
      "Define target behavior",
      "Calibrate reviewers",
      "Create & evaluate",
      "Return usable feedback",
    ],
    inquiry:
      "Tell us your model use case, evaluation rubric, subject expertise, and preferred data format.",
  },
  {
    slug: "data-collection",
    label: "Data collection",
    title: "Real-world data. For real-world intelligence.",
    description:
      "Source the voices, images, video, and text that reflect your use case. Plan a collection around your audience, environment, and model requirements.",
    image: "/images/data-work/field-collection.jpg",
    alt: "A field researcher using a smartphone to capture a plant sample",
    caption:
      "A useful dataset reflects the environments where a model will operate. Collection starts with a clear brief. Illustrative photography.",
    topics: [
      "Voice",
      "Image & video",
      "Text",
      "Multilingual",
      "Field & mobile",
      "Expert data",
    ],
    sections: [
      {
        title: "Capture the variety your model will meet.",
        text: "Define the devices, environments, and scenarios your collection should cover. Build a brief with clear acceptance criteria so contributors know what to capture and reviewers know what to check.",
        image: "/images/data-work/face-video.jpg",
        alt: "A participant recording a short video sample on a smartphone",
        items: [
          "Image, video, voice, and text collection",
          "Field and mobile capture across defined scenarios",
          "Multilingual collection with agreed consent requirements",
        ],
      },
      {
        title: "Human perspectives belong in the dataset.",
        text: "Some tasks need more than raw recordings. Source expert-written examples, human preferences, and contextual judgments to support the decisions your model needs to make.",
        image: "/images/data-work/field-collection.jpg",
        alt: "A field researcher capturing a real-world plant sample",
        items: [
          "Human preference and comparative response data",
          "Domain-informed examples and expert contributions",
          "Metadata, duplicate checks, and acceptance review",
        ],
      },
    ],
    workflow: [
      "Scope the collection",
      "Brief contributors",
      "Capture & check",
      "Package the dataset",
    ],
    inquiry:
      "Share the data modalities, participant criteria, locations, volumes, and usage requirements.",
  },
  {
    slug: "ai-model-evaluation",
    label: "AI model evaluation",
    title: "See your model through human eyes.",
    description:
      "Understand where your AI works—and where it needs work. Evaluate search results, chatbot conversations, and model responses with task-specific human review.",
    image: "/images/data-work/model-evaluation.jpg",
    alt: "Two reviewers evaluating model search results together",
    caption:
      "Evaluation becomes useful when every judgment connects to a defined quality criterion. Illustrative photography.",
    topics: [
      "Search relevance",
      "Chatbot evaluation",
      "Response quality",
      "Bias & safety",
    ],
    sections: [
      {
        title: "Measure the experience behind the output.",
        text: "A technically valid answer can still miss the point. Review outputs against the user’s intent and the context of the task to understand relevance, usefulness, and conversational quality.",
        image: "/images/data-work/generative-ai.jpg",
        alt: "A reviewer assessing two model responses",
        items: [
          "Search relevance and query-result judgments",
          "Chatbot task completion and conversation review",
          "Response accuracy, clarity, and helpfulness",
        ],
      },
      {
        title: "Turn failure cases into a clearer next step.",
        text: "Use a documented rubric to review bias, unsafe responses, and inconsistent behavior. Record the reason behind each judgment so findings can inform model and dataset improvements.",
        image: "/images/data-work/annotation-review.jpg",
        alt: "A data specialist reviewing examples and annotation decisions",
        items: [
          "Bias and safety assessment within an agreed scope",
          "Edge-case review and failure categorization",
          "Reviewer agreement checks and structured findings",
        ],
      },
    ],
    workflow: [
      "Define success criteria",
      "Select evaluation tasks",
      "Review & adjudicate",
      "Report actionable findings",
    ],
    inquiry:
      "Describe your application, evaluation criteria, sample outputs, and target audiences.",
  },
]
