import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
    import.meta.env.PUBLIC_SUPABASE_URL ||
    'https://czxhvlqhfqhovuslglpe.supabase.co';

const SUPABASE_KEY =
    import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    'sb_publishable__C3FKDsT53MA-0siZYUbKw_Q26ZkV_H';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);