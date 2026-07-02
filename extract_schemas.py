import re
import json
import sys

def extract_schemas(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    pattern = r'<script type="application/ld\+json">(.*?)</script>'
    blocks = re.findall(pattern, html, re.DOTALL)
    
    print(f'Found {len(blocks)} JSON-LD blocks\n')
    
    schemas = []
    for i, block in enumerate(blocks):
        print(f'=== Block {i+1} ===')
        try:
            data = json.loads(block)
            schemas.append(data)
            print(json.dumps(data, indent=2))
        except json.JSONDecodeError as e:
            print(f'JSON PARSE ERROR: {e}')
            print(block)
        print()
    
    return schemas

if __name__ == '__main__':
    file_path = sys.argv[1]
    extract_schemas(file_path)
