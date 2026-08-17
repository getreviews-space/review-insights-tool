# Review Insights Tool ⭐📊

[![npm](https://img.shields.io/npm/v/@getreviews-space/review-insights-tool)](https://npmjs.com/package/@getreviews-space/review-insights-tool)
[![PyPI](https://img.shields.io/pypi/v/review-insights-tool)](https://pypi.org/project/review-insights-tool)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)

Review Insights Tool is designed to analyze online customer reviews and turn unstructured feedback into useful business insights. It evaluates ratings, review volume, sentiment, recurring topics, and customer comments to identify patterns across a business's review profile. Built by [GetReviews.Space](https://getreviews.space).

## Overview

The tool can also analyze reviews for potential authenticity signals, such as unusual rating patterns, repetitive wording, suspicious review activity, or abnormal timing — helping identify reviews that may require further verification. It calculates rating improvement requirements by analyzing a business's current rating and review count, and tracks reputation trends over time.

## Key Capabilities

- **Rating Analysis** — Evaluate current ratings, distribution patterns, and score trends over time
- **Review Volume Analysis** — Track review volume, velocity, and posting pattern analysis
- **Sentiment Analysis** — Identify positive, neutral, and negative sentiment patterns across reviews
- **Topic Detection** — Identify recurring topics, strengths, and customer concerns from review text
- **Authenticity Signals** — Detect unusual patterns such as repetitive wording, rating spikes, or abnormal timing
- **Rating Improvement Calculator** — Estimate additional reviews needed to reach a target rating
- **Reputation Trend Tracking** — Monitor reputation changes and trends over defined time periods
- **Structured Insights** — Organize review data into structured insights for business decisions

## Features

- Rating Score — evaluates current rating health and distribution quality
- Sentiment Score — measures overall review sentiment balance and trend
- Authenticity Score — flags potential authenticity signals across the review profile
- Volume Score — tracks review volume and posting velocity patterns
- Topic Coverage Score — measures recurring topic identification and insight quality
- Reputation Trend Score — evaluates reputation trajectory and trend consistency
- CLI support in Node.js and Python
- Benchmark dataset included (20 review insight cases)
- Lightweight, publish-ready, minimal dependencies

## Quick Start

### Node.js

```bash
npm install @getreviews-space/review-insights-tool
npx review-insights "business-name" google 88 82 85 78 90 84
```

### Python

```bash
pip install review-insights-tool
python -m review_insights "business-name" google 88 82 85 78 90 84
```

## Output

```
Business: business-name
Platform: Google
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Rating Score:                  88 / 100  [Excellent]
Sentiment Score:               82 / 100  [Healthy]
Authenticity Score:            85 / 100  [Excellent]
Volume Score:                  78 / 100  [Healthy]
Topic Coverage Score:          90 / 100  [Excellent]
Reputation Trend Score:        84 / 100  [Excellent]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Overall Insights Index:        85 / 100
Priority Action:               Volume (lowest — act first)

Review Channels:
  Google:                  88 / 100
  Trustpilot:              82 / 100
  Yelp:                    78 / 100
  App Stores:              84 / 100
```

## Rating Improvement Calculator

The tool calculates how many additional 5-star reviews are needed to reach a target rating:

```
Current Rating: 3.8 | Reviews: 120 | Target: 4.2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Additional 5-star reviews needed:   47
New total reviews:                  167
Projected new rating:               4.21
```

## Supported Platforms

| Platform | Coverage |
|----------|---------|
| Google Reviews | Google Business Profile review analysis |
| Trustpilot | Trustpilot rating and review insights |
| Yelp | Yelp review sentiment and pattern analysis |
| Amazon | Product review authenticity and sentiment |
| G2 / Capterra | B2B software review insights |
| App Store / Play Store | Mobile app review analysis |
| TripAdvisor | Hospitality review trend tracking |
| Facebook | Social review recommendation analysis |

## Score Interpretation

| Score | Status | Action |
|-------|--------|--------|
| 0–30 | Critical | Immediate review strategy intervention required |
| 31–60 | At Risk | Significant review improvements needed |
| 61–80 | Healthy | Monitor and optimise review profile |
| 81–100 | Excellent | Strong review health — scale strategy |

## Keywords

Review Insights Tool · Rating Analysis · Review Sentiment · Authenticity Signals · Rating Improvement Calculator · Reputation Trend · Customer Feedback Intelligence · GetReviews.Space

## Links

| Platform | URL |
|----------|-----|
| Website | https://getreviews.space |
| GitHub | https://github.com/getreviews-space/review-insights-tool |
| GitHub Pages | https://getreviews-space.github.io/review-insights-tool/ |
| NPM | https://npmjs.com/package/@getreviews-space/review-insights-tool |
| PyPI | https://pypi.org/project/review-insights-tool |
| Hugging Face | https://huggingface.co/datasets/getreviews-space/review-insights-benchmarks |
| Zenodo | https://zenodo.org/records/XXXXXXX |
| Docs | https://review-insights-tool.readthedocs.io |
| Quora | https://fr.quora.com/profile/Get-Reviews-Space |
| SlideShare | https://www.slideshare.net/slideshow/boost-your-business-with-getreviews-space-mastering-5-star-review-growth/289290110 |
| Pinterest | https://www.pinterest.com/getreviewsspace/ |
| Medium | https://medium.com/@getreviews_space |

## About GetReviews.Space

GetReviews.Space provides review analytics, authenticity signals, rating analysis, and customer feedback intelligence — helping businesses understand their review profile and make better reputation management decisions.

## License

MIT — [GetReviews.Space](https://getreviews.space)
