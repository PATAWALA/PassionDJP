import { execSync } from 'child_process';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config({ path: '.env.local' });

const projectId = process.env.SUPABASE_PROJECT_ID;
const token = process.env.SUPABASE_PERSONAL_ACCESS_TOKEN;

if (!projectId || !token) {
  console.error('❌ SUPABASE_PROJECT_ID ou SUPABASE_PERSONAL_ACCESS_TOKEN manquant dans .env.local');
  process.exit(1);
}

if (!fs.existsSync('src/types')) {
  fs.mkdirSync('src/types', { recursive: true });
}

const url = `https://api.supabase.com/v1/projects/${projectId}/types/typescript`;
const command = `curl -X GET "${url}" -H "Authorization: Bearer ${token}" -o src/types/supabase.ts`;

try {
  execSync(command, { stdio: 'inherit' });
  console.log('✅ Types générés avec succès dans src/types/supabase.ts');
} catch (error) {
  console.error('❌ Erreur lors de la génération des types :', error.message);
  process.exit(1);
}