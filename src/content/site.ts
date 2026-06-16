/**
 * Guiding Hand Therapy — Site Content Config
 *
 * ALL website content is centralized here for easy editing.
 * The Admin Panel can override these values and save them to localStorage.
 */

// Helper to get admin-edited values
function getContent(key: string, defaultValue: string): string {
  try {
    const stored = localStorage.getItem(`ght_content_${key}`)
    return stored !== null ? stored : defaultValue
  } catch {
    return defaultValue
  }
}

function getContentList(key: string, defaultValue: readonly string[]): string[] {
  try {
    const stored = localStorage.getItem(`ght_content_${key}`)
    return stored !== null ? JSON.parse(stored) : [...defaultValue]
  } catch {
    return [...defaultValue]
  }
}

export const site = {
  get practice_name() { return getContent('practice_name', "Guiding Hand Therapy") },
  get therapist_name() { return getContent('therapist_name', "Fay Hand, LCSWA") },
  get tagline() { return getContent('tagline', "Counseling & Therapy") },
  get phone() { return getContent('phone', "828-220-3558") },
  get email() { return getContent('email', "healingwithfay@gmail.com") },
  get location() { return getContent('location', "North Carolina") },
  year: new Date().getFullYear(),
} as const;

export const hero = {
  get label() { return getContent('hero_label', "Telehealth & In-Person Therapy") },
  get headline() { return getContent('hero_headline', "You don't have to suffer or be alone in your thoughts.") },
  get subtitle() { return getContent('hero_subtitle', "A safe, nonjudgmental space to be heard, understood, and supported as you heal and grow.") },
  get cta_primary() { return getContent('hero_cta_primary', "Schedule a Free Consultation") },
  get cta_secondary() { return getContent('hero_cta_secondary', "Meet Fay") },
  get image_caption_name() { return getContent('hero_image_name', "Fay Hand, LCSWA") },
  get image_caption_title() { return getContent('hero_image_title', "Licensed Clinical Social Worker Associate") },
} as const;

export const philosophy = {
  get label() { return getContent('philosophy_label', "A Quiet Place to Begin") },
  get headline() { return getContent('philosophy_headline', "Therapy that meets you where you are") },
  get body() { return getContent('philosophy_body', "I take time to truly listen to your story, understand your goals, and build a safe, nonjudgmental space where you feel heard and empowered. Therapy is not about fixing you — it's about giving you the support and tools to help you heal and grow.") },
  values: [
    {
      get title() { return getContent('val1_title', "Warmth") },
      get body() { return getContent('val1_body', "Therapy starts with feeling truly heard. We move at the pace that's right for you.") },
    },
    {
      get title() { return getContent('val2_title', "Safety") },
      get body() { return getContent('val2_body', "A confidential, nonjudgmental space where every part of you is welcome.") },
    },
    {
      get title() { return getContent('val3_title', "Growth") },
      get body() { return getContent('val3_body', "Practical tools and insight that help you carry change beyond the session.") },
    },
  ] as const,
} as const;

export const specialties = {
  get label() { return getContent('spec_label', "Specialties") },
  get headline() { return getContent('spec_headline', "Specialties") },
  get body() { return getContent('spec_body', "I serve adolescents and adults with telehealth and in-person services.") },
  get cta_link() { return getContent('spec_cta', "View all services") },
  get items() { return getContentList('spec_items', [
    'Anxiety', 'Depression', 'Mood Disorders', 'ADHD',
    'Trauma & PTSD', 'Relationship Conflicts', 'Life Transitions'
  ]) },
} as const;

export const cta = {
  get headline() { return getContent('cta_headline', "Ready when you are.") },
  get body() { return getContent('cta_body', "Reaching out is the first brave step. Let's find out if we're a good fit — no pressure, no obligation.") },
  get button() { return getContent('cta_button', "Schedule a free consultation") },
} as const;

export const about = {
  get label() { return getContent('about_label', "About") },
  get headline() { return getContent('about_headline', "About Fay") },
  get subtitle() { return getContent('about_subtitle', "Compassionate therapy for a healthier mind") },
  get subhead_name() { return getContent('about_name', "Fay Hand, LCSWA") },
  get subhead_title() { return getContent('about_title', "Licensed Clinical Social Worker Associate") },
  get story_label() { return getContent('story_label', "My Story") },
  get story() { return getContent('story_body', "I started this practice because I truly love helping people untangle the messy, complicated, beautiful parts of being human. Attending therapy is not easy. No one wakes up excited to talk about their struggles, pain, or trauma — and yet, there's real courage in choosing to face what's difficult rather than avoid it. Whether you're dealing with anxiety, depression, or unresolved trauma, you don't have to face it alone.") },
  get approach_label() { return getContent('approach_label', "My Approach") },
  get approach() { return getContent('approach_body', "My approach is warm, collaborative, and rooted in evidence-based practice. Together we'll explore what's weighing on you, identify the patterns that no longer serve you, and build practical tools you can carry into the rest of your life.") },
  get cta_button() { return getContent('about_cta', "Schedule a free consultation") },
} as const;

export const services = {
  get label() { return getContent('svc_label', "Specialties") },
  get headline() { return getContent('svc_headline', "Specialties") },
  get body() { return getContent('svc_body', "I serve adolescents and adults with telehealth and in-person services.") },
  get info_headline() { return getContent('svc_info_h', "Telehealth & in-person sessions") },
  get info_body() { return getContent('svc_info_b', "I offer flexible scheduling so therapy fits your life — whether that's from your living room or in person. Sessions are 50 minutes, weekly to start, then adjusted to your needs.") },
  get info_cta() { return getContent('svc_info_cta', "Book a free consultation") },
  items: [
    { num: "01", get name() { return getContent('svc01', "Anxiety") } },
    { num: "02", get name() { return getContent('svc02', "Depression") } },
    { num: "03", get name() { return getContent('svc03', "Mood Disorders") } },
    { num: "04", get name() { return getContent('svc04', "ADHD") } },
    { num: "05", get name() { return getContent('svc05', "Trauma & PTSD") } },
    { num: "06", get name() { return getContent('svc06', "Relationship Conflicts") } },
    { num: "07", get name() { return getContent('svc07', "Life Transitions") } },
  ] as const,
} as const;

export const insurance = {
  get label() { return getContent('ins_label', "Insurance") },
  get headline() { return getContent('ins_headline', "Insurance Accepted") },
  get body() { return getContent('ins_body', "I am proud to be an in-network provider with the following plans to help make therapy affordable and accessible. Please contact your insurance provider directly to verify your specific benefits and coverage before our first session.") },
  get providers() { return getContentList('ins_providers', [
    'Blue Cross Blue Shield (BCBS)',
    'Carolina Complete Health',
    'United Healthcare Community Plan (UHC Medicaid)',
    'Wellcare',
    'Amerihealth',
    'Healthy Blue',
    'Ambetter',
    'Medcost',
    'Self-Pay / Sliding Scale Options',
    'Partners Health Management',
    'Vaya Health',
  ])},
  get out_of_network_label() { return getContent('ins_oon_label', "Out-of-Network") },
  get out_of_network_body() { return getContent('ins_oon_body', "If your insurance plan is not listed, I can provide a superbill (a detailed receipt) that you can submit to your insurance company for potential out-of-network reimbursement.") },
  get cta_button() { return getContent('ins_cta', "Verify your benefits — schedule a consult") },
} as const;

export const contact = {
  get label() { return getContent('con_label', "Get in Touch") },
  get headline() { return getContent('con_headline', "Schedule a Free Consultation") },
  get body() { return getContent('con_body', "Reaching out is the first brave step. Fill out the form below and I will contact you within 24 business hours.") },
  info: [
    { label: "PHONE", get value() { return site.phone }, href: "tel:828-220-3558" },
    { label: "EMAIL", get value() { return site.email }, href: "mailto:healingwithfay@gmail.com" },
    { label: "RESPONSE TIME", value: "Within 24 business hours" },
    { label: "SERVICE AREA", get value() { return `${site.location} \u00b7 Telehealth & In-Person` } },
  ] as const,
  get sms_notice() { return getContent('con_sms', "By providing your number, you consent to receive SMS from Guiding Hand Therapy. Reply STOP to opt-out, HELP for support. Message and data rates may apply.") },
  form: {
    get name_label() { return getContent('form_name', "Name") },
    get phone_label() { return getContent('form_phone', "Phone") },
    get email_label() { return getContent('form_email', "Email") },
    get message_label() { return getContent('form_msg', "What's bringing you here?") },
    get message_placeholder() { return getContent('form_placeholder', "Share as much or as little as you'd like.") },
    get consent_text() { return getContent('form_consent', "I consent to receive a response by email, phone, or SMS regarding my inquiry.") },
    get submit_button() { return getContent('form_submit', "Send message") },
    get success_title() { return getContent('form_success_title', "Message sent") },
    get success_body() { return getContent('form_success_body', "Thank you for reaching out. I'll be in touch within 24 business hours.") },
  },
} as const;
