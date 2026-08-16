# 🧠 NeuroFed — Privacy-Preserving Brain Tumor Detection

**Radiomics + Fuzzy Clustering + Federated Learning**, evaluated on BraTS2020.

A final-year major project combining privacy-preserving federated learning with radiomics-based feature extraction and fuzzy clustering, applied to two clinically relevant tasks: tumor grade classification (HGG/LGG) and survival risk prediction, alongside an unsupervised tumor detection/segmentation module.

🔗 **Live dashboard:** https://shreeyabbb-cloud.github.io/brain-tumor-major/
🔗 **Interactive demo (FCM segmentation):** https://huggingface.co/spaces/SB-04/brain-tumor-fl-privacy

---

## Key Results

| Task | Result | Method |
|------|--------|--------|
| HGG/LGG Grade Classification | **~91% Accuracy** | RF + SMOTE, Federated (6-seed mean) |
| Tumor Segmentation | **~0.77 Dice** (FLAIR, cleaned) | Fuzzy C-Means, unsupervised, ground-truth-free |
| Survival Risk Prediction | **~48% Accuracy** | 3-class, federated (literature range: 35–60%) |
| Privacy Cost | **~0** | Federated accuracy matches centralized, no significant difference (paired t-test) |

All literature comparisons in this project are centralized baselines (full data access, no privacy constraint). This project's results are **federated** throughout — patient data is never pooled.

## Pipeline Overview

1. **Radiomics feature extraction** — first-order, shape, and GLCM texture features from 3D tumor volumes across 4 MRI modalities (T1, T1ce, T2, FLAIR)
2. **Fuzzy C-Means clustering** — used two ways: (a) simulating non-IID federated clients by grouping patients with similar radiomic profiles, (b) direct pixel-intensity clustering for unsupervised tumor segmentation
3. **Federated Learning** — FedAvg via Flower, comparing centralized vs. federated performance on identical held-out test sets
4. **Classification** — Random Forest + SMOTE (best-performing model after comparison against MLP, SVM, and PCA-reduced variants)

## Additional Experiments

Beyond the core pipeline, this project includes a full ablation and comparison suite: SMOTE augmentation, model comparison (MLP/RF/SVM, with/without PCA), multi-modal segmentation (FLAIR+T1ce), a U-Net reference baseline (centralized, for context), differential privacy (DP-FedAvg, accuracy-vs-privacy tradeoff), and statistical significance testing across seeds. See the project notebook for full details.

## Tech Stack

- **Frontend:** React + Vite, deployed via GitHub Actions to GitHub Pages
- **ML Pipeline:** Python — PyTorch, scikit-learn, scikit-fuzzy, Flower (federated learning), nibabel, scikit-image
- **Interactive demo:** Gradio, hosted on Hugging Face Spaces

## Local Development

```bash
npm install
npm run dev      # local dev server
npm run build     # production build to dist/
```

## Disclaimer

Academic research prototype. Not intended for clinical diagnosis or treatment decisions. Evaluated on the BraTS2020 dataset; segmentation and predictions are not validated for real-world clinical use.

---

*Final Year Major Project — Computer Science & Engineering, 2026*
