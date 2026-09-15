import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client con service role (solo per API routes server-side)
export function createServiceClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!serviceKey) throw new Error('SUPABASE_SERVICE_ROLE_KEY non configurata')
  return createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

export interface ArticoloRow {
  id: number
  title: string
  slug: string | null
  content: string
  category: string
  status: 'published' | 'draft'
  publish_date: string
  created_at: string
  excerpt?: string | null
  fonte?: string | null
  url_fonte?: string | null
  author?: string | null
  image?: string | null
  tags?: string[] | null
}
