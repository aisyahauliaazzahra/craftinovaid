import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase project URL and anon key
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://aoggqidvydajwqttnemi.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvZ2dxaWR2eWRhandxdHRuZW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2Nzg4MjgsImV4cCI6MjA3MzI1NDgyOH0.PMzgvY-stiVp7rorrgRG5gt1T7WryrGF749JuDIOwAU'

export const supabase = createClient(supabaseUrl, supabaseKey)
