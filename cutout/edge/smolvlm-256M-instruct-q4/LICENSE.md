# smolvlm-256M-instruct — licence record

- Licence: **Apache-2.0** (permissive)
- Model card: https://huggingface.co/HuggingFaceTB/SmolVLM-256M-Instruct (card metadata `license: apache-2.0`)
- Weights taken from: https://huggingface.co/HuggingFaceTB/SmolVLM-256M-Instruct — ONNX weights are published in the official repo itself (onnx/), same Apache-2.0 card.
- Date checked: 2026-11-10
- Use: Cabinet edge inference (SPEC-pixels-as-evidence §7), onnxruntime-web WebGPU.

## Files (SHA-256)

- `chat_template.json` — 429 bytes — `a68ad1a42681ae44eacd109ff8dd56a840f761c03d72f4ff4c515d092f882168`
- `config.json` — 7353 bytes — `b70fb4bfde88df9eeebc9d8ff523733b8bf70d6c9b06c610325960e06ae9db52`
- `generation_config.json` — 136 bytes — `067a2a54e5f87162ecac6e0e911cc4665fc8f7f3324794ecbac0f76badb56636`
- `onnx/decoder_model_merged_q4.onnx` — 86562901 bytes — `e3fd81130e30715580cf148398e48e2925b6219bff75e17d2a77add35a363f65`
- `onnx/decoder_model_merged_q4f16.onnx` — 77034560 bytes — `0a6b4e72e26025c190f37e2573ea2ce3336d95670da9c4b1fa662e47cc3d94a7`
- `onnx/embed_tokens_q4f16.onnx` — 56770965 bytes — `d810e0849eda8128be2d9cf1a2be9ca0bd8e5bfbe5bf972f60ea8e2a566f6bfe`
- `onnx/vision_encoder_fp16.onnx` — 187294693 bytes — `275c41d775508b7f7410580c4aaf67583a34acf23c31259effa8e53f67e8d9ae`
- `onnx/vision_encoder_q4.onnx` — 63784987 bytes — `95814e6629ec465e7cf98a44edcee67abc06d41faa0d1acc410cf8a956cab488`
- `onnx/vision_encoder_q4f16.onnx` — 55037584 bytes — `13c301dc0cbc79c8c23badc699129b47d05ba044e2274ca8a94681fcd4205fc1`
- `preprocessor_config.json` — 486 bytes — `6cb6e36d6fcb88ca1502c4a26750715dc3e7dedddc9a8f17b27d8d167d1457e7`
- `processor_config.json` — 68 bytes — `e7bff42da73ae9eec9042ef20e066e11f1ee20f025358ff79131e3c0fb549b46`
- `special_tokens_map.json` — 1069 bytes — `aa0ff906077086dfa9734a7f97f68c825877a48f9468807be65504495cdeef09`
- `tokenizer.json` — 3548256 bytes — `5ece781dc8d2b2f3e2f289ca0ae50b17cfc27dd27bfe7971bb8241e0b964331a`
- `tokenizer_config.json` — 28249 bytes — `36c6fd44d07d10fd8180ee6b46dcccf69fb7c06753968ff0d7e17b8bfe17b777`

Chosen build (docs/EDGE-MODELS.md): vision_encoder_q4 + embed_tokens_q4f16 + decoder_model_merged_q4. The q4f16 decoder produced degenerate text on WebGPU.
