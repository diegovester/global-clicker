import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://hphrjeqygekrkhhhfkst.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwaHJqZXF5Z2VrcmtoaGhma3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMzE3MDksImV4cCI6MjA1MjgwNzcwOX0.uG7HFnsiWB7Jd64KfRnVpeu3ERvSEx_b2KBvf3d-lkM')