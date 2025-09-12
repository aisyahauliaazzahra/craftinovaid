-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous inserts" ON user_answers;
DROP POLICY IF EXISTS "Allow authenticated reads" ON user_answers;
DROP POLICY IF EXISTS "Allow authenticated updates" ON user_answers;
DROP POLICY IF EXISTS "Allow authenticated deletes" ON user_answers;
DROP POLICY IF EXISTS "Allow public access" ON user_answers;

-- Create user_answers table (if not exists)
CREATE TABLE IF NOT EXISTS user_answers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  user_info JSONB,
  pre_test_answers JSONB,
  post_test_answers JSONB,
  stress_level JSONB,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_user_answers_created_at ON user_answers(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE user_answers ENABLE ROW LEVEL SECURITY;

-- Create a permissive policy that allows all operations for public users
-- This is for development/demo purposes. In production, you'd want more restrictive policies.
CREATE POLICY "Allow public access" ON user_answers
  FOR ALL USING (true) WITH CHECK (true);

-- Alternative: If you want to disable RLS entirely (not recommended for production)
-- ALTER TABLE user_answers DISABLE ROW LEVEL SECURITY;

-- Grant necessary permissions
GRANT ALL ON user_answers TO anon;
GRANT ALL ON user_answers TO authenticated;
GRANT USAGE ON SEQUENCE user_answers_id_seq TO anon;
GRANT USAGE ON SEQUENCE user_answers_id_seq TO authenticated;