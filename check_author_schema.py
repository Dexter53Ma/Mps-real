import re
import json

files = {
    'HOME': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c6e8b6001IdHU1PNxgfuFg2',
    'PROPERTIES': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c6eae4001LSDIg2eMaIGAjK',
    'ABOUT': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c6ecd7001NemgCxfxweag7o',
    'FAQ': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c6ee48001n9D8tMIYgyxxCD',
    'SERVICES': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c7daaf001jQdhuFQxBAjdDn',
    'BLOG': r'C:\Users\Ultrapc\.local\share\opencode\tool-output\tool_f24c7dd90001H4yymegLIa1A8G',
}

for page_name, filepath in files.items():
    print(f"\n{'='*60}")
    print(f"  {page_name}")
    print(f"{'='*60}")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check for author signals
    author_patterns = [
        r'class="[^"]*author[^"]*"',
        r'class="[^"]*byline[^"]*"',
        r'rel="author"',
        r'author["\s]*:["\s]*["\']([^"\']+)["\']',
        r'Written by',
        r'By\s+[\w\s]+',
    ]

    for pattern in author_patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        if matches:
            print(f"  AUTHOR SIGNAL ({pattern[:30]}): {matches[:3]}")

    # Check for date/time signals
    date_patterns = [
        r'<time[^>]*datetime="([^"]*)"',
        r'datePublished["\s]*:["\s]*["\']([^"\']+)["\']',
        r'dateModified["\s]*:["\s]*["\']([^"\']+)["\']',
        r'Last updated',
        r'Published on',
    ]

    for pattern in date_patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        if matches:
            print(f"  DATE SIGNAL ({pattern[:30]}): {matches[:3]}")

    # Check for FAQ schema
    ld_json_blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
    for i, block in enumerate(ld_json_blocks):
        try:
            data = json.loads(block)
            schema_type = data.get('@type', 'Unknown')
            if 'FAQ' in str(schema_type).upper() or 'Question' in str(data).upper()[:200]:
                print(f"  FAQ SCHEMA FOUND: {schema_type}")
                # Show first Q&A
                if 'mainEntity' in data:
                    print(f"    Questions: {len(data['mainEntity'])}")
            elif schema_type in ['LocalBusiness', 'Organization', 'WebSite', 'BreadcrumbList', 'ItemList']:
                print(f"  SCHEMA: {schema_type}")
            else:
                print(f"  SCHEMA: {schema_type} - {str(data)[:150]}")
        except json.JSONDecodeError:
            print(f"  SCHEMA: Invalid JSON in block {i}")

    # Check for testimonial/review signals
    testimonial_patterns = [
        r'testimonial',
        r'review',
        r'rating',
        r'star',
        r'⭐',
    ]

    for pattern in testimonial_patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        if matches:
            print(f"  REVIEW SIGNAL ({pattern}): {len(matches)} occurrences")

    # Check for image alt text issues
    imgs = re.findall(r'<img[^>]*>', content)
    empty_alt = [img for img in imgs if 'alt=""' in img or 'alt=\'\'' in img]
    no_alt = [img for img in imgs if 'alt=' not in img]
    print(f"  IMAGES: {len(imgs)} total | {len(empty_alt)} empty alt | {len(no_alt)} no alt")

    # Check for external links
    ext_links = re.findall(r'href="(https?://(?!www\.marrakechpropertyservice\.com)[^"]*)"', content)
    print(f"  EXTERNAL LINKS: {len(ext_links)}")
    if ext_links:
        for link in ext_links[:5]:
            print(f"    -> {link[:80]}")
