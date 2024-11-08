import { 
  MessageSquare, 
  PenTool,
  Palette,
  Edit3,
  Camera,
  Brain,
  Terminal,
  FileText,
  Mic,
  Layout,
  BarChart2,
  Headphones,
  Cpu,
  Mail,
  Film,
  GraduationCap,
  Heart,
  DollarSign,
  Shield,
  Box,
  Gamepad,
  Share2,
  Users,
  Bot,
  Image,
  Brush,
  Wand2,
  Pencil,
  Type,
  Layers,
  Copy,
  Sparkles,
  Lightbulb,
  Zap,
  Code as CodeIcon
} from 'lucide-react';
import { Category, Tool } from './types';

export const categories: Category[] = [
  { id: 'writing', name: 'Writing & Content', icon: PenTool },
  { id: 'design', name: 'Design & Creativity', icon: Palette },
  { id: 'business', name: 'Business & Analytics', icon: BarChart2 },
  { id: 'customer-service', name: 'Customer Service', icon: Headphones },
  { id: 'development', name: 'Development', icon: CodeIcon },
  { id: 'marketing', name: 'Marketing', icon: Mail },
  { id: 'video-audio', name: 'Video & Audio', icon: Film },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'healthcare', name: 'Healthcare', icon: Heart },
  { id: 'finance', name: 'Finance', icon: DollarSign },
  { id: 'security', name: 'Security', icon: Shield },
  { id: 'robotics', name: 'Robotics', icon: Box },
  { id: 'gaming', name: 'Gaming', icon: Gamepad },
  { id: 'social-media', name: 'Social Media', icon: Share2 },
  { id: 'personalization', name: 'Personalization', icon: Users }
];

const createTool = (
  id: string,
  name: string,
  description: string,
  longDescription: string,
  category: string,
  pricing: 'Free' | 'Paid' | 'Freemium',
  website: string,
  icon: any,
  backgroundColor: string,
  features: string[]
): Tool => ({
  id,
  name,
  description,
  longDescription,
  category,
  pricing,
  website,
  icon,
  backgroundColor,
  features
});

export const tools: Tool[] = [
  // Writing & Content Generation
  createTool(
    'gpt3',
    'GPT-3',
    'Advanced language model for text generation and understanding.',
    `OpenAI's GPT-3 is a powerful language model that can:
    • Generate human-like text content
    • Answer questions and provide explanations
    • Assist with creative writing
    • Help with code generation
    • Translate between languages`,
    'writing',
    'Paid',
    'https://openai.com/gpt-3',
    Bot,
    'bg-green-600',
    ['Natural language processing', 'Content generation', 'Language translation', 'Code assistance', 'Creative writing']
  ),
  createTool(
    'jasper',
    'Jasper',
    'AI content creation tool designed for marketers and writers.',
    `Jasper helps create high-quality content for:
    • Blog posts and articles
    • Marketing copy
    • Social media content
    • Email campaigns
    • Product descriptions`,
    'writing',
    'Paid',
    'https://www.jasper.ai',
    Edit3,
    'bg-blue-600',
    ['Blog writing', 'Marketing copy', 'SEO optimization', 'Team collaboration', 'Multiple languages']
  ),
  createTool(
    'copy-ai',
    'Copy.ai',
    'AI-powered tool for generating marketing copy.',
    `Copy.ai specializes in creating:
    • Marketing copy
    • Social media posts
    • Product descriptions
    • Email content
    • Ad copy`,
    'writing',
    'Freemium',
    'https://www.copy.ai',
    Copy,
    'bg-indigo-600',
    ['Marketing copy generation', 'Multiple languages', 'Template library', 'Brand voice customization', 'Team collaboration']
  ),
  createTool(
    'writesonic',
    'Writesonic',
    'AI writing assistant for various content types.',
    `Writesonic provides AI-driven tools for:
    • Article and blog generation
    • Ad copywriting
    • Social media posts
    • Product descriptions
    • Email marketing`,
    'writing',
    'Freemium',
    'https://www.writesonic.com',
    Pencil,
    'bg-yellow-600',
    ['Content creation', 'Ad copywriting', 'SEO optimization', 'Email marketing', 'Social media posts']
  ),
  createTool(
    'rytr',
    'Rytr',
    'AI writing assistant for generating content quickly.',
    `Rytr helps users create content with:
    • AI-driven content suggestions
    • Blog and article generation
    • Social media captions
    • Email content
    • Product descriptions`,
    'writing',
    'Freemium',
    'https://www.rytr.me',
    Type,
    'bg-purple-600',
    ['Content suggestions', 'Blog writing', 'Social media captions', 'Email copy', 'SEO optimization']
  ),

  // Design & Creativity
  createTool(
    'canva',
    'Canva',
    'Online design platform with AI tools for graphic design.',
    `Canva's AI-powered features include:
    • Smart design suggestions
    • Auto-layout generation
    • Image enhancement
    • Background removal
    • Brand kit management`,
    'design',
    'Freemium',
    'https://www.canva.com',
    Palette,
    'bg-purple-600',
    ['Template library', 'Brand kit', 'Collaboration tools', 'Image editing', 'Animation tools']
  ),
  createTool(
    'dalle',
    'DALL-E',
    'AI model that generates images from textual descriptions.',
    `DALL-E creates unique images from text descriptions:
    • Generate original artwork
    • Create marketing visuals
    • Design product concepts
    • Illustrate ideas
    • Edit and modify existing images`,
    'design',
    'Paid',
    'https://openai.com/dall-e',
    Image,
    'bg-pink-600',
    ['Text-to-image generation', 'Image editing', 'Style transfer', 'Multiple styles', 'High resolution output']
  ),
  createTool(
    'adobe-firefly',
    'Adobe Firefly',
    'AI-powered design tool for generating creative content.',
    `Adobe Firefly offers tools for:
    • Generative design
    • Image generation from text
    • Content-aware editing
    • Animation creation
    • Pattern generation`,
    'design',
    'Paid',
    'https://www.adobe.com/firefly',
    Brush,
    'bg-orange-600',
    ['Generative design', 'Image editing', 'Animation', 'Content-aware tools', 'Pattern generation']
  ),
  createTool(
    'pixabay-ai',
    'Pixabay AI',
    'Free AI-powered image and video search tool.',
    `Pixabay AI assists with:
    • Image generation
    • Video recommendations
    • Stock photo editing
    • Advanced search filters
    • Media curation for projects`,
    'design',
    'Free',
    'https://pixabay.com',
    Camera,
    'bg-blue-600',
    ['Image search', 'Video recommendations', 'Editing tools', 'Project curation', 'Free stock photos']
  ),
  createTool(
    'runway',
    'Runway',
    'Creative suite for AI-assisted video and image editing.',
    `Runway offers advanced tools for:
    • Video and image editing
    • Real-time collaboration
    • Object removal
    • Background replacement
    • Motion tracking`,
    'design',
    'Freemium',
    'https://runwayml.com',
    Wand2,
    'bg-teal-700',
    ['Object removal', 'Motion tracking', 'Collaboration', 'Image editing', 'Video effects']
  ),
  // Add other categories similarly as shown above

  // Business & Analytics
createTool(
  'tableau-ai',
  'Tableau AI',
  'Data visualization and analytics platform with AI capabilities.',
  `Tableau's AI features provide:
    • Data insights and predictions
    • Visual analytics
    • Business intelligence dashboards
    • Customizable reports`,
  'business',
  'Paid',
  'https://www.tableau.com',
  BarChart2,
  'bg-blue-700',
  ['Data visualization', 'Predictive insights', 'Dashboard creation', 'Analytics', 'Custom reporting']
),
createTool(
  'power-bi',
  'Power BI',
  'Microsoft’s AI-powered business intelligence tool.',
  `Power BI offers tools for:
    • Data visualization
    • Business intelligence
    • Automated insights
    • Real-time analytics`,
  'business',
  'Freemium',
  'https://powerbi.microsoft.com',
  Lightbulb,
  'bg-yellow-500',
  ['Real-time analytics', 'Custom dashboards', 'Data connectors', 'AI insights', 'Collaboration tools']
),
createTool(
  'sap-analytics',
  'SAP Analytics Cloud',
  'Analytics and business intelligence suite with AI.',
  `SAP provides advanced tools for:
    • Data analysis
    • Planning and forecasting
    • Real-time insights
    • Financial and operational reporting`,
  'business',
  'Paid',
  'https://www.sap.com/analytics',
  Brain,
  'bg-teal-600',
  ['Data integration', 'Predictive analytics', 'Planning tools', 'Collaboration', 'Real-time insights']
),
createTool(
  'sisense-ai',
  'Sisense AI',
  'Embedded analytics platform for business intelligence.',
  `Sisense provides AI-powered features like:
    • Predictive analytics
    • Interactive dashboards
    • Data preparation and exploration`,
  'business',
  'Paid',
  'https://www.sisense.com',
  Cpu,
  'bg-indigo-600',
  ['Predictive analytics', 'Embedded analytics', 'Dashboard customization', 'Data exploration', 'Integration APIs']
),
createTool(
  'thoughtspot',
  'ThoughtSpot',
  'AI-driven analytics platform for business insights.',
  `ThoughtSpot allows:
    • Self-service analytics
    • Data visualization
    • AI-driven search-based analytics`,
  'business',
  'Paid',
  'https://www.thoughtspot.com',
  Zap,
  'bg-red-500',
  ['Search-based analytics', 'Data visualization', 'Self-service insights', 'Real-time dashboards', 'AI recommendations']
),

// Customer Service
createTool(
  'zendesk-ai',
  'Zendesk AI',
  'AI-powered customer service and support solution.',
  `Zendesk includes:
    • Automated ticketing
    • Customer insights
    • AI-driven chatbots`,
  'customer-service',
  'Paid',
  'https://www.zendesk.com',
  Headphones,
  'bg-blue-800',
  ['Automated ticketing', 'Chatbot integration', 'Customer insights', 'Reporting tools', 'Multi-channel support']
),
createTool(
  'intercom',
  'Intercom',
  'Customer support platform with AI automation tools.',
  `Intercom offers:
    • AI-driven chatbots
    • Workflow automation
    • Customer engagement tools`,
  'customer-service',
  'Paid',
  'https://www.intercom.com',
  Mic,
  'bg-green-600',
  ['AI chatbots', 'Customer engagement', 'Workflow automation', 'Ticketing system', 'Real-time support']
),
createTool(
  'freshdesk-ai',
  'Freshdesk AI',
  'AI-powered helpdesk solution for customer support.',
  `Freshdesk's features include:
    • AI-powered ticket management
    • Chatbot support
    • Analytics and insights`,
  'customer-service',
  'Freemium',
  'https://www.freshworks.com/freshdesk',
  MessageSquare,
  'bg-orange-600',
  ['Ticket management', 'Customer insights', 'Chatbot integration', 'Automated responses', 'Analytics']
),
createTool(
  'liveperson',
  'LivePerson',
  'AI-powered customer messaging platform.',
  `LivePerson provides:
    • AI-driven messaging
    • Chatbots for support
    • Analytics and reporting`,
  'customer-service',
  'Paid',
  'https://www.liveperson.com',
  Bot,
  'bg-teal-700',
  ['AI messaging', 'Chatbot integration', 'Analytics', 'Customer insights', 'Workflow automation']
),
createTool(
  'gladly',
  'Gladly',
  'Customer service platform with AI-enhanced workflows.',
  `Gladly includes:
    • Personalized support
    • AI-powered workflows
    • Omnichannel communication`,
  'customer-service',
  'Paid',
  'https://www.gladly.com',
  Users,
  'bg-purple-600',
  ['Personalized support', 'AI workflows', 'Omnichannel communication', 'Team collaboration', 'Insights and analytics']
),

// Development
createTool(
  'github-copilot',
  'GitHub Copilot',
  'AI-powered code completion tool for developers.',
  `Copilot assists developers with:
    • Code suggestions
    • Function completions
    • Documentation generation`,
  'development',
  'Paid',
  'https://github.com/features/copilot',
  Terminal,
  'bg-gray-800',
  ['Code suggestions', 'Function completions', 'Documentation', 'IDE integration', 'Multi-language support']
),
createTool(
  'tabnine',
  'Tabnine',
  'AI code assistant for autocomplete and code suggestions.',
  `Tabnine offers:
    • AI code completions
    • Predictive coding
    • Multi-language support`,
  'development',
  'Freemium',
  'https://www.tabnine.com',
  CodeIcon,
  'bg-purple-600',
  ['Predictive coding', 'Autocomplete', 'IDE integration', 'Multi-language support', 'Real-time assistance']
),
createTool(
  'kite',
  'Kite',
  'AI-powered autocomplete for Python and JavaScript.',
  `Kite provides:
    • Autocomplete suggestions
    • Documentation hints
    • Code recommendations`,
  'development',
  'Free',
  'https://www.kite.com',
  Cpu,
  'bg-indigo-700',
  ['Autocomplete', 'Code recommendations', 'Documentation hints', 'Multi-language support', 'IDE plugins']
),
createTool(
  'deepcode',
  'DeepCode',
  'AI-powered code review tool.',
  `DeepCode helps with:
    • Detecting code issues
    • Security analysis
    • Real-time suggestions`,
  'development',
  'Freemium',
  'https://www.deepcode.ai',
  Shield,
  'bg-red-600',
  ['Code analysis', 'Security insights', 'Real-time suggestions', 'IDE integration', 'Continuous scanning']
),
createTool(
  'codex',
  'Codex',
  'AI-powered model for code generation and completion.',
  `Codex offers:
    • Code generation from natural language
    • Code completion
    • Support for multiple languages`,
  'development',
  'Paid',
  'https://openai.com/research/codex',
  Lightbulb,
  'bg-green-500',
  ['Code generation', 'Natural language queries', 'Multi-language support', 'Code completion', 'Interactive coding']
),

// Marketing
createTool(
  'hubspot-ai',
  'HubSpot AI',
  'AI-powered marketing and CRM platform.',
  `HubSpot AI provides:
    • Marketing automation
    • Customer insights
    • Content optimization`,
  'marketing',
  'Paid',
  'https://www.hubspot.com',
  Mail,
  'bg-blue-700',
  ['Automation', 'Customer insights', 'Content optimization', 'Lead management', 'Reporting tools']
),
createTool(
  'marketo-engage',
  'Marketo Engage',
  'AI-driven platform for marketing automation.',
  `Marketo offers:
    • Email marketing
    • Customer segmentation
    • Campaign management`,
  'marketing',
  'Paid',
  'https://www.marketo.com',
  DollarSign,
  'bg-purple-600',
  ['Email marketing', 'Customer segmentation', 'Campaign tracking', 'Automation', 'Analytics']
),
createTool(
  'clarifai',
  'Clarifai',
  'AI visual recognition for marketing and content.',
  `Clarifai provides:
    • Image and video recognition
    • Content filtering
    • Predictive analytics`,
  'marketing',
  'Freemium',
  'https://www.clarifai.com',
  Camera,
  'bg-teal-700',
  ['Visual recognition', 'Content filtering', 'Analytics', 'Marketing insights', 'Custom model training']
),
createTool(
  'vidyard',
  'Vidyard',
  'Video platform with AI analytics for marketing.',
  `Vidyard offers:
    • Video hosting and sharing
    • Audience insights
    • Engagement tracking`,
  'marketing',
  'Freemium',
  'https://www.vidyard.com',
  Film,
  'bg-orange-500',
  ['Video hosting', 'Audience insights', 'Engagement tracking', 'Personalized video', 'Analytics']
),
createTool(
  'adobe-sensei',
  'Adobe Sensei',
  'AI framework for marketing and creative insights.',
  `Adobe Sensei provides:
    • Image and video analytics
    • Customer segmentation
    • Content personalization`,
  'marketing',
  'Paid',
  'https://www.adobe.com/sensei',
  Sparkles,
  'bg-pink-600',
  ['Image and video analytics', 'Content personalization', 'Customer segmentation', 'Automation', 'Insights and analytics']
),

// Video & Audio
createTool(
  'descript',
  'Descript',
  'AI-powered tool for video and audio editing.',
  `Descript offers features like:
    • Transcription
    • Overdub voice editing
    • Screen recording
    • Podcast editing`,
  'video-audio',
  'Freemium',
  'https://www.descript.com',
  Mic,
  'bg-purple-600',
  ['Transcription', 'Overdub', 'Screen recording', 'Audio editing', 'Collaboration tools']
),
createTool(
  'rephrase-ai',
  'Rephrase.ai',
  'AI video generation platform for personalized videos.',
  `Rephrase.ai enables:
    • Video personalization
    • AI avatars
    • Custom video scripts`,
  'video-audio',
  'Paid',
  'https://www.rephrase.ai',
  Film,
  'bg-green-600',
  ['Personalized videos', 'AI avatars', 'Script customization', 'Marketing integration', 'High-quality output']
),
createTool(
  'audacity-ai',
  'Audacity AI',
  'AI-powered tool for audio editing and enhancement.',
  `Audacity AI provides:
    • Noise reduction
    • Voice enhancement
    • Audio effects`,
  'video-audio',
  'Free',
  'https://www.audacityteam.org',
  Headphones,
  'bg-blue-500',
  ['Noise reduction', 'Audio effects', 'Multi-track editing', 'Voice enhancement', 'Free to use']
),
createTool(
  'speechmatics',
  'Speechmatics',
  'AI transcription and speech-to-text tool.',
  `Speechmatics includes:
    • Real-time transcription
    • Language support
    • Accurate voice recognition`,
  'video-audio',
  'Paid',
  'https://www.speechmatics.com',
  Mic,
  'bg-teal-600',
  ['Real-time transcription', 'Multilingual support', 'High accuracy', 'API access', 'Voice recognition']
),
createTool(
  'sonix',
  'Sonix',
  'Automated transcription and subtitle generation platform.',
  `Sonix provides:
    • Transcription
    • Subtitle generation
    • Translation`,
  'video-audio',
  'Freemium',
  'https://www.sonix.ai',
  Mic,
  'bg-orange-600',
  ['Transcription', 'Subtitles', 'Translation', 'Editing tools', 'Multi-language support']
),

// Education
createTool(
  'khanmigo',
  'Khanmigo',
  'AI assistant for personalized tutoring and education.',
  `Khanmigo offers:
    • Adaptive learning
    • Tutoring assistance
    • Educational content recommendations`,
  'education',
  'Freemium',
  'https://www.khanacademy.org/khanmigo',
  GraduationCap,
  'bg-indigo-600',
  ['Personalized tutoring', 'Adaptive learning', 'Content recommendations', 'Multi-subject support', 'Educational assistance']
),
createTool(
  'coursera-ai',
  'Coursera AI',
  'AI-powered recommendations for online courses.',
  `Coursera AI includes:
    • Course recommendations
    • Skill assessment
    • Personalized learning paths`,
  'education',
  'Paid',
  'https://www.coursera.org',
  Brain,
  'bg-blue-700',
  ['Course recommendations', 'Skill assessment', 'Personalized paths', 'Multi-subject content', 'Certification options']
),
createTool(
  'gradescope',
  'Gradescope',
  'AI-assisted grading platform for educators.',
  `Gradescope offers:
    • Automated grading
    • Feedback generation
    • Exam analytics`,
  'education',
  'Freemium',
  'https://www.gradescope.com',
  FileText,
  'bg-green-600',
  ['Automated grading', 'Feedback tools', 'Exam analytics', 'Integration with LMS', 'Time-saving features']
),
createTool(
  'century-tech',
  'Century Tech',
  'AI platform for personalized learning in schools.',
  `Century Tech provides:
    • Adaptive learning
    • Teacher insights
    • Curriculum alignment`,
  'education',
  'Paid',
  'https://www.century.tech',
  Lightbulb,
  'bg-purple-700',
  ['Adaptive learning', 'Teacher insights', 'Curriculum alignment', 'Student progress tracking', 'Data analytics']
),
createTool(
  'socratic',
  'Socratic',
  'AI-powered learning app for homework help.',
  `Socratic offers:
    • Step-by-step explanations
    • Subject-specific guidance
    • Visual learning tools`,
  'education',
  'Free',
  'https://socratic.org',
  GraduationCap,
  'bg-orange-600',
  ['Homework help', 'Visual learning', 'Multi-subject support', 'Step-by-step guidance', 'Free to use']
),

// Healthcare
createTool(
  'ada-health',
  'Ada Health',
  'AI-driven health assessment and symptom checker.',
  `Ada Health offers:
    • Symptom checking
    • Health assessment
    • Personalized health recommendations`,
  'healthcare',
  'Freemium',
  'https://www.ada.com',
  Heart,
  'bg-pink-600',
  ['Symptom checker', 'Health assessment', 'Personalized recommendations', 'Multi-language', 'User-friendly']
),
createTool(
  'buoy-health',
  'Buoy Health',
  'AI-based platform for symptom checking and triage.',
  `Buoy Health provides:
    • Symptom diagnosis
    • Triage guidance
    • Personalized health content`,
  'healthcare',
  'Freemium',
  'https://www.buoyhealth.com',
  Heart,
  'bg-blue-600',
  ['Symptom diagnosis', 'Triage guidance', 'Health content', 'Accurate recommendations', 'Multi-language support']
),
createTool(
  'pathai',
  'PathAI',
  'AI-powered pathology insights and diagnostics.',
  `PathAI includes:
    • Digital pathology
    • Diagnostic support
    • Disease detection`,
  'healthcare',
  'Paid',
  'https://www.pathai.com',
  Shield,
  'bg-red-600',
  ['Diagnostic support', 'Pathology insights', 'Disease detection', 'Data analysis', 'Enhanced accuracy']
),
createTool(
  'viz-ai',
  'Viz.ai',
  'AI-powered stroke detection and diagnostics.',
  `Viz.ai offers:
    • Stroke detection
    • Medical imaging analysis
    • Real-time alerts for clinicians`,
  'healthcare',
  'Paid',
  'https://www.viz.ai',
  Brain,
  'bg-teal-600',
  ['Stroke detection', 'Medical imaging', 'Real-time alerts', 'Clinician support', 'Patient monitoring']
),
createTool(
  'babylon-health',
  'Babylon Health',
  'AI-driven platform for virtual healthcare and triage.',
  `Babylon provides:
    • Virtual consultations
    • Health monitoring
    • Triage support`,
  'healthcare',
  'Paid',
  'https://www.babylonhealth.com',
  Heart,
  'bg-purple-600',
  ['Virtual consultations', 'Health monitoring', 'Symptom checker', 'Patient support', 'Multi-language support']
),

// Finance
createTool(
  'upstart',
  'Upstart',
  'AI-powered lending platform for credit assessments.',
  `Upstart uses AI for:
    • Credit scoring
    • Loan processing
    • Risk assessment`,
  'finance',
  'Paid',
  'https://www.upstart.com',
  DollarSign,
  'bg-green-600',
  ['Credit scoring', 'Loan processing', 'Risk assessment', 'AI-driven approvals', 'Financial analytics']
),
createTool(
  'alpha-sense',
  'AlphaSense',
  'AI-based financial research and market insights tool.',
  `AlphaSense provides:
    • Financial insights
    • Market trend analysis
    • Document search`,
  'finance',
  'Paid',
  'https://www.alpha-sense.com',
  BarChart2,
  'bg-blue-600',
  ['Financial insights', 'Market analysis', 'Document search', 'Customizable dashboard', 'Collaboration tools']
),
createTool(
  'plaid',
  'Plaid',
  'API platform for financial data integration.',
  `Plaid offers:
    • Data integration
    • Financial tracking
    • Payment processing`,
  'finance',
  'Paid',
  'https://www.plaid.com',
  DollarSign,
  'bg-indigo-700',
  ['Data integration', 'Financial tracking', 'API access', 'Multi-platform support', 'Developer-friendly']
),
createTool(
  'personal-capital',
  'Personal Capital',
  'AI-driven financial planning and wealth management.',
  `Personal Capital provides:
    • Wealth tracking
    • Retirement planning
    • Financial analytics`,
  'finance',
  'Freemium',
  'https://www.personalcapital.com',
  Lightbulb,
  'bg-purple-500',
  ['Wealth tracking', 'Retirement planning', 'Financial analytics', 'Budget management', 'Investment insights']
),
createTool(
  'clearscore',
  'ClearScore',
  'AI-powered credit score and financial health tool.',
  `ClearScore includes:
    • Credit monitoring
    • Financial recommendations
    • Debt management`,
  'finance',
  'Free',
  'https://www.clearscore.com',
  Shield,
  'bg-orange-600',
  ['Credit monitoring', 'Debt management', 'Financial recommendations', 'Budget tracking', 'Free']
)
];

