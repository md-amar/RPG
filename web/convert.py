import os
import re
from bs4 import BeautifulSoup

def html_to_jsx(html_content):
    # Basic replacements
    jsx = html_content.replace('class="', 'className="')
    jsx = jsx.replace('for="', 'htmlFor="')
    jsx = jsx.replace('<!--', '{/*')
    jsx = jsx.replace('-->', '*/}')
    
    # Fix styles like style="width: 70%;" to style={{ width: '70%' }}
    def style_replacer(match):
        style_str = match.group(1)
        # simplistic conversion, assumes simple styles
        styles = []
        for prop in style_str.split(';'):
            prop = prop.strip()
            if not prop:
                continue
            if ':' in prop:
                key, val = prop.split(':', 1)
                key = key.strip()
                val = val.strip().replace("'", '"')
                # camelCase key
                parts = key.split('-')
                key = parts[0] + ''.join(x.title() for x in parts[1:])
                styles.append(f"{key}: '{val}'")
        return 'style={{ ' + ', '.join(styles) + ' }}'
        
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    
    # self closing tags in JSX
    # BeautifulSoup already outputs valid XML if we parse it right, but let's just do it string-wise or use BS4
    return jsx

source_dirs = {
    'Dashboard': '../stitch_remix_of_lifequest_rpg_productivity_dashboard/lifequest_adventurer_dashboard/code.html',
    'Quests': '../stitch_remix_of_lifequest_rpg_productivity_dashboard/lifequest_quests_boss_raids/code.html',
    'Character': '../stitch_remix_of_lifequest_rpg_productivity_dashboard/lifequest_character_sheet_equipment/code.html',
    'Shop': '../stitch_remix_of_lifequest_rpg_productivity_dashboard/lifequest_merchant_bazaar_armory_shop/code.html',
    'Progress': '../stitch_remix_of_lifequest_rpg_productivity_dashboard/lifequest_discipline_skill_trees_progress/code.html'
}

for name, path in source_dirs.items():
    if not os.path.exists(path):
        print(f"Skipping {name}, not found.")
        continue
    
    with open(path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        
    for script in soup.find_all('script'):
        script.decompose()
        
    main_content = soup.find('main')
    if not main_content:
        print(f"No main tag found for {name}")
        continue
        
    # We want the inner contents of main
    html_str = "".join([str(c) for c in main_content.contents])
    jsx_str = html_to_jsx(html_str)
    
    # Fix self closing tags using a simple regex since BeautifulSoup might not self-close them if we output as html
    # But actually, we can parse as XML to enforce self-closing
    # Let's just fix the known ones: img, input, hr, br
    jsx_str = re.sub(r'<(img|input|hr|br)([^>]*?)(?<!/)>', r'<\1\2 />', jsx_str)
    # Fix path strings with unescaped ampersands or something if needed?
    # Fix SVG tags if any?
    
    # Fix stroke-width etc in svg? (if any)
    # stroke-width -> strokeWidth
    jsx_str = re.sub(r'stroke-width=', r'strokeWidth=', jsx_str)
    jsx_str = re.sub(r'stroke-linecap=', r'strokeLinecap=', jsx_str)
    jsx_str = re.sub(r'stroke-linejoin=', r'strokeLinejoin=', jsx_str)
    jsx_str = re.sub(r'fill-rule=', r'fillRule=', jsx_str)
    jsx_str = re.sub(r'clip-rule=', r'clipRule=', jsx_str)
    jsx_str = re.sub(r'stroke-dasharray=', r'strokeDasharray=', jsx_str)
    jsx_str = re.sub(r'stroke-dashoffset=', r'strokeDashoffset=', jsx_str)
    jsx_str = re.sub(r'preserveaspectratio=', r'preserveAspectRatio=', jsx_str, flags=re.IGNORECASE)
    jsx_str = re.sub(r'viewbox=', r'viewBox=', jsx_str, flags=re.IGNORECASE)
    jsx_str = re.sub(r'onclick="[^"]*"', '', jsx_str, flags=re.IGNORECASE)
    jsx_str = re.sub(r'tabindex="(\d+)"', r'tabIndex={\1}', jsx_str, flags=re.IGNORECASE)
    jsx_str = re.sub(r'rows="(\d+)"', r'rows={\1}', jsx_str, flags=re.IGNORECASE)
    jsx_str = re.sub(r'disabled=""', r'disabled', jsx_str)
    jsx_str = re.sub(r'disabled="true"', r'disabled', jsx_str)
    jsx_str = re.sub(r'checked=""', r'defaultChecked', jsx_str)
    jsx_str = re.sub(r'checked="true"', r'defaultChecked', jsx_str)
    jsx_str = re.sub(r'maxlength="(\d+)"', r'maxLength={\1}', jsx_str, flags=re.IGNORECASE)
    
    # Fix `<svg stroke="..." ...` to make sure we don't have stray lowercase attributes if any.
    # Also Quests.tsx 537 might be something like `value="70"` on a `<progress>` tag, or `max="100"`
    jsx_str = re.sub(r'max="(\d+)"', r'max={\1}', jsx_str)
    jsx_str = re.sub(r'value="(\d+)"', r'value={\1}', jsx_str)

    component_str = f"""export function {name}() {{
  return (
    <>
      {jsx_str}
    </>
  );
}}
"""
    with open(f"src/pages/{name}.tsx", 'w', encoding='utf-8') as f:
        f.write(component_str)
    print(f"Generated {name}.tsx")
