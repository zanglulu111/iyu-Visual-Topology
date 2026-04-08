import os
import re
import time

try:
    from google import genai
except ImportError:
    print("Please install google-genai: pip install google-genai")
    exit(1)

# ==========================================
# 请在这里填入你的 Gemini API Key
# 或者在环境中 export GEMINI_API_KEY="xxx"
# ==========================================
API_KEY = os.environ.get("GEMINI_API_KEY", "YOUR_API_KEY_HERE")

def process_file(client, filepath):
    print(f"Processing: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'reference:' in content and 'referenceEn:' in content:
        print(f"Skipping {filepath}, already has reference fields.")
        return

    prompt = f"""
You are an expert in cultural studies, cinema, literature, and art.
I have a TypeScript file that exports a category of cultural/narrative items. 
For each item in the `items` array, you need to add TWO fields exactly:
`reference` and `referenceEn`.
These fields should contain 1-2 examples of cult movies, classic literature, or art that perfectly capture the vibe of the item.
Please output the FULL updated TypeScript file. Do not change the existing information. 
Make sure the format matches exactly like this for the added fields:
      reference: "《电影名》(年份, 导演) / 《书名》(年份, 作者)",
      referenceEn: "\\"Movie Name\\" (Year, Director) / \\"Book Name\\" (Year, Author)",

Here is the original file content:
{content}
"""

    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
        )
        new_content = response.text
        
        # 清理可能包含的 Markdown 代码块标签
        if new_content.startswith("```typescript"):
            new_content = new_content[13:]
        elif new_content.startswith("```ts"):
            new_content = new_content[5:]
        elif new_content.startswith("```"):
            new_content = new_content[3:]
            
        if new_content.endswith("```"):
            new_content = new_content[:-3]
            
        new_content = new_content.strip() + "\n"
        
        # 简单校验
        if "referenceEn" in new_content and len(new_content) > 100:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Successfully updated {filepath}")
        else:
            print(f"Failed to generate valid content for {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

def main():
    if API_KEY == "YOUR_API_KEY_HERE":
        print("请先在脚本中填入你的 API Key，或者设置环境变量 GEMINI_API_KEY")
        return

    client = genai.Client(api_key=API_KEY)
    
    # 所在的 SUR 文件夹
    base_dir = "data/engine_surface"
    target_folders = ["SUR4", "SUR5", "SUR6", "SUR7", "SUR8", "SUR9", "SUR10"]
    
    for folder in target_folders:
        folder_path = os.path.join(base_dir, folder)
        if not os.path.exists(folder_path):
            print(f"Folder not found, skipping: {folder_path}")
            continue
            
        for filename in sorted(os.listdir(folder_path)):
            if filename.endswith(".ts") and filename != "index.ts":
                filepath = os.path.join(folder_path, filename)
                process_file(client, filepath)
                # 避免 API 速率限制
                time.sleep(2)

if __name__ == "__main__":
    main()
