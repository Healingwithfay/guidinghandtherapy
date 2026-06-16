// Simple admin auth — no backend needed
const ADMIN_PASSWORD_KEY = 'ght_admin_password'
const DEFAULT_PASSWORD = 'GuidingHand2026!'

export function getAdminPassword(): string {
  try {
    return localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD
  } catch {
    return DEFAULT_PASSWORD
  }
}

export function setAdminPassword(password: string): void {
  localStorage.setItem(ADMIN_PASSWORD_KEY, password)
}

export function checkLogin(input: string): boolean {
  return input === getAdminPassword()
}

export function isLoggedIn(): boolean {
  try {
    return sessionStorage.getItem('ght_admin_session') === 'true'
  } catch {
    return false
  }
}

export function login(): void {
  sessionStorage.setItem('ght_admin_session', 'true')
}

export function logout(): void {
  sessionStorage.removeItem('ght_admin_session')
}

// Contact form submissions storage
export interface FormSubmission {
  id: string
  name: string
  phone: string
  email: string
  message: string
  consent: boolean
  date: string
  read: boolean
}

export function saveSubmission(data: Omit<FormSubmission, 'id' | 'date' | 'read'>): void {
  const submissions = getSubmissions()
  const newSubmission: FormSubmission = {
    ...data,
    id: Date.now().toString(),
    date: new Date().toISOString(),
    read: false,
  }
  submissions.unshift(newSubmission)
  localStorage.setItem('ght_submissions', JSON.stringify(submissions))
}

export function getSubmissions(): FormSubmission[] {
  try {
    const stored = localStorage.getItem('ght_submissions')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function markRead(id: string): void {
  const submissions = getSubmissions().map(s =>
    s.id === id ? { ...s, read: true } : s
  )
  localStorage.setItem('ght_submissions', JSON.stringify(submissions))
}

export function deleteSubmission(id: string): void {
  const submissions = getSubmissions().filter(s => s.id !== id)
  localStorage.setItem('ght_submissions', JSON.stringify(submissions))
}

// Content editing helpers
export function setContent(key: string, value: string): void {
  localStorage.setItem(`ght_content_${key}`, value)
}

export function resetContent(key: string): void {
  localStorage.removeItem(`ght_content_${key}`)
}

export function resetAllContent(): void {
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('ght_content_')) {
      localStorage.removeItem(key)
    }
  })
}

// Content key definitions for the editor
export const contentSections = [
  {
    title: 'Site Info',
    fields: [
      { key: 'practice_name', label: 'Practice Name', type: 'text' as const },
      { key: 'therapist_name', label: 'Therapist Name', type: 'text' as const },
      { key: 'tagline', label: 'Tagline', type: 'text' as const },
      { key: 'phone', label: 'Phone Number', type: 'text' as const },
      { key: 'email', label: 'Email Address', type: 'text' as const },
      { key: 'location', label: 'Location', type: 'text' as const },
    ],
  },
  {
    title: 'Homepage Hero',
    fields: [
      { key: 'hero_label', label: 'Eyebrow Label', type: 'text' as const },
      { key: 'hero_headline', label: 'Headline', type: 'textarea' as const },
      { key: 'hero_subtitle', label: 'Subtitle', type: 'textarea' as const },
      { key: 'hero_cta_primary', label: 'Primary Button', type: 'text' as const },
      { key: 'hero_cta_secondary', label: 'Secondary Button', type: 'text' as const },
      { key: 'hero_image_name', label: 'Photo Caption Name', type: 'text' as const },
      { key: 'hero_image_title', label: 'Photo Caption Title', type: 'text' as const },
    ],
  },
  {
    title: 'Philosophy Section',
    fields: [
      { key: 'philosophy_label', label: 'Eyebrow Label', type: 'text' as const },
      { key: 'philosophy_headline', label: 'Headline', type: 'text' as const },
      { key: 'philosophy_body', label: 'Body Text', type: 'textarea' as const },
    ],
  },
  {
    title: 'Value Cards',
    fields: [
      { key: 'val1_title', label: 'Card 1 Title', type: 'text' as const },
      { key: 'val1_body', label: 'Card 1 Body', type: 'textarea' as const },
      { key: 'val2_title', label: 'Card 2 Title', type: 'text' as const },
      { key: 'val2_body', label: 'Card 2 Body', type: 'textarea' as const },
      { key: 'val3_title', label: 'Card 3 Title', type: 'text' as const },
      { key: 'val3_body', label: 'Card 3 Body', type: 'textarea' as const },
    ],
  },
  {
    title: 'Call to Action',
    fields: [
      { key: 'cta_headline', label: 'Headline', type: 'text' as const },
      { key: 'cta_body', label: 'Body Text', type: 'textarea' as const },
      { key: 'cta_button', label: 'Button Text', type: 'text' as const },
    ],
  },
  {
    title: 'About Page',
    fields: [
      { key: 'about_label', label: 'Eyebrow Label', type: 'text' as const },
      { key: 'about_headline', label: 'Headline', type: 'text' as const },
      { key: 'about_subtitle', label: 'Subtitle', type: 'text' as const },
      { key: 'about_name', label: 'Subhead Name', type: 'text' as const },
      { key: 'about_title', label: 'Subhead Title', type: 'text' as const },
      { key: 'story_label', label: 'Story Eyebrow', type: 'text' as const },
      { key: 'story_body', label: 'Story Body', type: 'textarea' as const },
      { key: 'approach_label', label: 'Approach Eyebrow', type: 'text' as const },
      { key: 'approach_body', label: 'Approach Body', type: 'textarea' as const },
      { key: 'about_cta', label: 'CTA Button', type: 'text' as const },
    ],
  },
  {
    title: 'Services Page',
    fields: [
      { key: 'svc_label', label: 'Eyebrow Label', type: 'text' as const },
      { key: 'svc_headline', label: 'Headline', type: 'text' as const },
      { key: 'svc_body', label: 'Body Text', type: 'textarea' as const },
      { key: 'svc_info_h', label: 'Info Band Headline', type: 'text' as const },
      { key: 'svc_info_b', label: 'Info Band Body', type: 'textarea' as const },
      { key: 'svc_info_cta', label: 'Info Band Button', type: 'text' as const },
    ],
  },
  {
    title: 'Service Names (01–07)',
    fields: [
      { key: 'svc01', label: '01 — Service 1', type: 'text' as const },
      { key: 'svc02', label: '02 — Service 2', type: 'text' as const },
      { key: 'svc03', label: '03 — Service 3', type: 'text' as const },
      { key: 'svc04', label: '04 — Service 4', type: 'text' as const },
      { key: 'svc05', label: '05 — Service 5', type: 'text' as const },
      { key: 'svc06', label: '06 — Service 6', type: 'text' as const },
      { key: 'svc07', label: '07 — Service 7', type: 'text' as const },
    ],
  },
  {
    title: 'Insurance Page',
    fields: [
      { key: 'ins_label', label: 'Eyebrow Label', type: 'text' as const },
      { key: 'ins_headline', label: 'Headline', type: 'text' as const },
      { key: 'ins_body', label: 'Body Text', type: 'textarea' as const },
      { key: 'ins_oon_label', label: 'Out-of-Network Label', type: 'text' as const },
      { key: 'ins_oon_body', label: 'Out-of-Network Body', type: 'textarea' as const },
      { key: 'ins_cta', label: 'CTA Button', type: 'text' as const },
    ],
  },
  {
    title: 'Contact Page',
    fields: [
      { key: 'con_label', label: 'Eyebrow Label', type: 'text' as const },
      { key: 'con_headline', label: 'Headline', type: 'text' as const },
      { key: 'con_body', label: 'Body Text', type: 'textarea' as const },
      { key: 'con_sms', label: 'SMS Notice', type: 'textarea' as const },
      { key: 'form_name', label: 'Form: Name Label', type: 'text' as const },
      { key: 'form_phone', label: 'Form: Phone Label', type: 'text' as const },
      { key: 'form_email', label: 'Form: Email Label', type: 'text' as const },
      { key: 'form_msg', label: 'Form: Message Label', type: 'text' as const },
      { key: 'form_placeholder', label: 'Form: Placeholder', type: 'text' as const },
      { key: 'form_consent', label: 'Form: Consent Text', type: 'textarea' as const },
      { key: 'form_submit', label: 'Form: Submit Button', type: 'text' as const },
      { key: 'form_success_title', label: 'Form: Success Title', type: 'text' as const },
      { key: 'form_success_body', label: 'Form: Success Message', type: 'textarea' as const },
    ],
  },
]
