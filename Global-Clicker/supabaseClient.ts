import { createClient } from '@supabase/supabase-js'

const url_key: string = process.env.URLKEY || ''
const anon_key: string = process.env.ANONKEY || ''

export const supabase = createClient(url_key, anon_key)