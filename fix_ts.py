import re

with open('src/lib/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

fixes = [
    # FR
    ('fullText: "**Résumé**', 'fullText: `**Résumé**'),
    
    # ES
    ('fullText: "**Resumen**', 'fullText: `**Resumen**'),
]

for old, new in fixes:
    content = content.replace(old, new)

with open('src/lib/translations.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Syntax fixed")
