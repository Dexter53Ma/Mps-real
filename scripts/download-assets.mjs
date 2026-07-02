import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const BASE = 'public/images';

const assets = {
  hero: [
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/12/12090827/20250507_BroadgateTower_Level10_00056-1.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102212/20240506_Storey_201-Bishopsgate_-68-copy-1-scaled-1.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102216/20240506_Storey_201-Bishopsgate_-53-copy-1-scaled-1.jpg'
  ],
  intro: [
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102225/20250106_PaddingtonCentral_StoreyClub_4KingdomStreet_008-1-scaled-1.jpg'
  ],
  locations: [
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28111156/Map5-2.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2022/12/26155858/1FA-level-2-shared-space-1.jpeg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/09/26121815/Storey-OrsmanEX-scaled.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/01/15152114/Storey-2-Kingdom-StEXL-scaled.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/09/26121806/Storey-388EX-scaled.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102239/20230905-Regents-Place_1-Triton-Square5-copy-scaled-1.jpg'
  ],
  pillars: [
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102303/20240506_Storey_201-Bishopsgate_-17-copy-scaled-1.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102244/20240902_PaddingtonCentral_2KS_Interior_Storey_Level1_116-1-scaled-1.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102254/20250425_NortonFolgate_NichollsClarke_Storey_Level9_Interior_088-1-scaled-1.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102259/20200625_6-Orsman-Road-12-1-scaled-1.jpg'
  ],
  table: [
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2026/06/16121433/20250725_Broadgate_Broadgate-Tower_L28_Cat-A-resized.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102316/20240506_Storey_201-Bishopsgate_-37-3-copy-scaled-1.jpg'
  ],
  meeting: [
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102321/20250106_PaddingtonCentral_StoreyClub_4KingdomStreet_019-copy-scaled-1.jpg'
  ],
  testimonials: [
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/06/28144938/One-Triton-Event-Day-1-154.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/04/26131110/Nicholls-Clarke.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/04/26131106/Broadgate-Tower.jpg'
  ],
  gallery: [
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102339/20180906-Storey-338ER-2-copy-scaled-1.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102330/20240506_Storey_201-Bishopsgate_-25-copy-scaled-1.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102334/20240506_Storey_201-Bishopsgate_-48-copy-scaled-1.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102326/20240506_Storey_201-Bishopsgate_-28-copy-scaled-1.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102343/20230609-Paddington-Orange-Office-15-copy-scaled-1.jpg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102507/20240701_Broadgate_1FinsburyAvenue_Reception__033-copy-scaled-1.jpg'
  ],
  logos: [
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102645/Mesh-AI-Logo-1.svg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102653/Hain-Celestial-Logo.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102647/Stace-Logo-1.svg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102707/Orange-Logo.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28105633/Oliver-Bernard-Logo-1-1.svg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102630/VertoFX-1-1.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102728/Zedonk.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28105652/Sasol-1.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/29091913/Transparity.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/29091907/Michelmores.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102722/Harmony.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/29091853/Collibra.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/29091903/Juvenescence.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2025/08/28102651/Insight-Software-Logo-1.svg'
  ],
  misc: [
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/08/17095905/logo-white.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/01/15154056/British_Land_white.svg',
    'https://storey.co.uk/wp-content/themes/storey-2023/assets/media/images/logos/MClogo.svg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/09/27073919/facebook-icon-white.svg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2023/09/27073947/instagram-icon.svg',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/01/31115646/LinkedIn.svg'
  ],
  favicons: [
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/09/05171855/cropped-Tangrams-Circle-Corner-3-32x32.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/09/05171855/cropped-Tangrams-Circle-Corner-3-192x192.png',
    'https://mandc-bl-assets.s3.amazonaws.com/staging/storey/2024/09/05171855/cropped-Tangrams-Circle-Corner-3-180x180.png'
  ]
};

const dirs = ['hero', 'intro', 'locations', 'pillars', 'table', 'meeting', 'testimonials', 'gallery', 'logos', 'misc', 'seo'];

dirs.forEach(d => {
  const p = join(BASE, d);
  if (!existsSync(p)) mkdirSync(p, { recursive: true });
});
if (!existsSync('public/seo')) mkdirSync('public/seo', { recursive: true });

async function download(url, filepath) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(filepath, buf);
    console.log(`✓ ${filepath}`);
  } catch (e) {
    console.error(`✗ ${filepath}: ${e.message}`);
  }
}

async function main() {
  const tasks = [];
  
  for (const [category, urls] of Object.entries(assets)) {
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const ext = url.split('.').pop().split('?')[0];
      const name = url.split('/').pop().split('?')[0];
      const dir = category === 'favicons' ? 'public/seo' : `${BASE}/${category}`;
      tasks.push(download(url, `${dir}/${name}`));
    }
  }
  
  // Batch downloads 4 at a time
  for (let i = 0; i < tasks.length; i += 4) {
    await Promise.all(tasks.slice(i, i + 4));
  }
  
  console.log(`\nDone! Downloaded ${tasks.length} assets.`);
}

main();
