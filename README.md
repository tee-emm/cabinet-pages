# Cabinet (hosted client)

Static build of [Cabinet](https://github.com/tee-emm/cabinet), a local-first collection inventory.

Open: https://tee-emm.github.io/cabinet-pages/

- Your collection stays **in your browser** (IndexedDB) on your device. Nothing is uploaded, and this site has no server or accounts.
- Each browser and address keeps its own separate collection. Keep a downloaded backup.
- Built from `tee-emm/cabinet` branch `feature/agent-bundle`, commit `f46aaad`: Cabinet 2.3.0 plus static-hosting CSP, the WebKit (Safari/iPhone/iPad) restore fix with an older-tab fence, unique batch file names, and the research agent handoff (copy prompt, agent bundle).
- **Research agent kit:** https://tee-emm.github.io/cabinet-pages/agent/ (`cabinet-agent-skill-2.3.0.zip`, `AGENT-PROMPT.md`, `SHA256SUMS`, `agent-kit.json`).
