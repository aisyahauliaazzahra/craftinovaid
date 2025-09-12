-- Create user_answers table
CREATE TABLE user_answers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  user_info JSONB,
  pre_test_answers JSONB,
  post_test_answers JSONB,
  stress_level JSONB,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on created_at for faster queries
CREATE INDEX idx_user_answers_created_at ON user_answers(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE user_answers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for public submissions)
CREATE POLICY "Allow anonymous inserts" ON user_answers
  FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated users to read all data (for admin)
CREATE POLICY "Allow authenticated reads" ON user_answers
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update/delete (for admin)
CREATE POLICY "Allow authenticated updates" ON user_answers
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated deletes" ON user_answers
  FOR DELETE USING (auth.role() = 'authenticated');
