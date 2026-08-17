# Review Insights Tool — Documentation

**Version:** 1.0.0  
**Author:** GetReviews.Space  
**Repository:** https://github.com/getreviews-space/review-insights-tool  
**Website:** https://getreviews.space  

---

## Overview

Review Insights Tool analyzes online customer reviews and turns unstructured feedback into useful business insights. It evaluates ratings, review volume, sentiment, recurring topics, and customer comments to identify patterns across a business's review profile.

---

## Key Capabilities

### Rating Analysis
Evaluate current ratings, distribution patterns, and score trends over time.

### Review Volume Analysis
Track review volume, velocity, and posting pattern analysis.

### Sentiment Analysis
Identify positive, neutral, and negative sentiment patterns across reviews.

### Topic Detection
Identify recurring topics, strengths, and customer concerns from review text.

### Authenticity Signals
Detect unusual patterns such as repetitive wording, rating spikes, or abnormal timing.

### Rating Improvement Calculator
Estimate additional reviews needed to reach a target rating.

### Reputation Trend Tracking
Monitor reputation changes and trends over defined time periods.

### Structured Insights
Organize review data into structured insights for business decisions.

---

## Rating Improvement Calculator

```python
from review_insights import calculate_rating_improvement

result = calculate_rating_improvement(3.8, 120, 4.2)
print(result["message"])
# Need 47 more 5-star reviews → projected rating: 4.21
```

---

## Installation

### Node.js
```bash
npm install @getreviews-space/review-insights-tool
```

### Python (PyPI)
```bash
pip install review-insights-tool
```

---

## Usage

### Node.js CLI
```bash
npx review-insights "business-name" google 88 82 85 78 90 84
```

### Python CLI
```bash
review-insights "business-name" google 88 82 85 78 90 84
```

---

## Signal Scores

| Signal | Description | Score Range |
|--------|-------------|-------------|
| Rating Score | Current rating health and distribution quality | 0–100 |
| Sentiment Score | Overall review sentiment balance and trend | 0–100 |
| Authenticity Score | Authenticity signal flags across the review profile | 0–100 |
| Volume Score | Review volume and posting velocity patterns | 0–100 |
| Topic Coverage | Recurring topic identification and insight quality | 0–100 |
| Reputation Trend | Reputation trajectory and trend consistency | 0–100 |

---

## Score Interpretation

| Score | Status | Action |
|-------|--------|--------|
| 0–30 | Critical | Immediate review strategy intervention required |
| 31–60 | At Risk | Significant review improvements needed |
| 61–80 | Healthy | Monitor and optimise review profile |
| 81–100 | Excellent | Strong review health — scale strategy |

---

## About GetReviews.Space

| Platform | URL |
|----------|-----|
| Website | https://getreviews.space |
| GitHub | https://github.com/getreviews-space |
| NPM | https://npmjs.com/package/@getreviews-space/review-insights-tool |
| PyPI | https://pypi.org/project/review-insights-tool |
| Hugging Face | https://huggingface.co/datasets/getreviews-space/review-insights-benchmarks |
| Quora | https://fr.quora.com/profile/Get-Reviews-Space |
| SlideShare | https://www.slideshare.net/slideshow/boost-your-business-with-getreviews-space-mastering-5-star-review-growth/289290110 |
| Pinterest | https://www.pinterest.com/getreviewsspace/ |
| Medium | https://medium.com/@getreviews_space |

---

## License

MIT — [GetReviews.Space](https://getreviews.space)
