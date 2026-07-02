import re
import sys
import os

files = {
    'HOME': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c6e8b6001IdHU1PNxgfuFg2',
    'PROPERTIES': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c6eae4001LSDIg2eMaIGAjK',
    'ABOUT': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c6ecd7001NemgCxfxweag7o',
    'FAQ': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c6ee48001n9D8tMIYgyxxCD',
    'CONTACT': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c7d8630015VW5SvWrewOqK1',
    'SERVICES': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c7daaf001jQdhuFQxBAjdDn',
    'LOCATIONS': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c7dc0d001D23tkp6NzBb8um',
    'BLOG': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c7dd90001H4yymegLIa1A8G',
}

for page_name, filepath in files.items():
    print(f"\n{'='*60}")
    print(f"  {page_name}")
    print(f"{'='*60}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    title = re.search(r'<title>(.*?)</title>', content)
    print(f'TITLE: {title.group(1) if title else "MISSING"}')

    desc = re.search(r'<meta name="description" content="(.*?)"', content)
    print(f'DESC: {desc.group(1) if desc else "MISSING"}')

    og = re.search(r'<meta property="og:title" content="(.*?)"', content)
    print(f'OG_TITLE: {og.group(1) if og else "MISSING"}')

    ogd = re.search(r'<meta property="og:description" content="(.*?)"', content)
    print(f'OG_DESC: {ogd.group(1) if ogd else "MISSING"}')

    canon = re.search(r'<link rel="canonical" href="(.*?)"', content)
    print(f'CANONICAL: {canon.group(1) if canon else "MISSING"}')

    h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    print(f'H1_COUNT: {len(h1s)}')
    for h in h1s[:3]:
        clean = re.sub(r'<[^>]+>', '', h).strip()
        if clean:
            print(f'  H1: {clean[:120]}')

    h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', content, re.DOTALL)
    print(f'H2_COUNT: {len(h2s)}')
    for h in h2s[:5]:
        clean = re.sub(r'<[^>]+>', '', h).strip()
        if clean:
            print(f'  H2: {clean[:100]}')

    schemas = re.findall(r'application/ld\+json', content)
    print(f'SCHEMA_COUNT: {len(schemas)}')

    # Extract structured data
    ld_json = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
    for i, s in enumerate(ld_json[:3]):
        print(f'  SCHEMA_{i}: {s[:200]}...')
