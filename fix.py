import json
import codecs

with codecs.open("data/engine_core/m6/group_a.ts", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

# Let's see the context around "stake_legacy_ruin"
idx = text.find('id: "stake_legacy_ruin"')
if idx != -1:
    print(text[idx-50:idx+500])
