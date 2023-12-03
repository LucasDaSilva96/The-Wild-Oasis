import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bhpxhqywjgrfdsxipktj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJocHhocXl3amdyZmRzeGlwa3RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1NTI4MTMsImV4cCI6MjAxNzEyODgxM30.-VHk8zK2PYSASVz2pwHxkafLuf8jx8YL_OpyHqluioo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
