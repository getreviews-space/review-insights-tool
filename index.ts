#!/usr/bin/env node

interface ReviewInsightsInput {
  business: string;
  platform: string;
  ratingScore: number;
  sentimentScore: number;
  authenticityScore: number;
  volumeScore: number;
  topicCoverage: number;
  reputationTrend: number;
}

interface ReviewInsightsOutput {
  business: string;
  platform: string;
  ratingScore: number;
  sentimentScore: number;
  authenticityScore: number;
  volumeScore: number;
  topicCoverageScore: number;
  reputationTrendScore: number;
  overallInsightsIndex: number;
  priorityAction: string;
  reviewChannels: Record<string, number>;
}

function getStatus(score: number): string {
  if (score <= 30) return "Critical";
  if (score <= 60) return "At Risk";
  if (score <= 80) return "Healthy";
  return "Excellent";
}

function getPriorityAction(scores: Record<string, number>): string {
  const labels: Record<string, string> = {
    rating: "Rating",
    sentiment: "Sentiment",
    authenticity: "Authenticity",
    volume: "Volume",
    topicCoverage: "Topic Coverage",
    reputationTrend: "Reputation Trend",
  };
  const lowest = Object.entries(scores).reduce((a, b) => a[1] < b[1] ? a : b);
  return `${labels[lowest[0]]} (${lowest[1]}/100 — act first)`;
}

function calculateRatingImprovement(currentRating: number, currentCount: number, targetRating: number): string {
  if (targetRating <= currentRating) return "Target already achieved";
  let needed = 0;
  let total = currentCount;
  let sum = currentRating * currentCount;
  while ((sum + needed * 5) / (total + needed) < targetRating && needed < 10000) {
    needed++;
  }
  const projectedRating = Math.round(((sum + needed * 5) / (total + needed)) * 100) / 100;
  return `Need ${needed} more 5-star reviews → projected rating: ${projectedRating}`;
}

function getReviewChannels(rating: number, sentiment: number, volume: number, trend: number): Record<string, number> {
  return {
    "Google": Math.min(100, Math.round(rating * 1.0)),
    "Trustpilot": Math.min(100, Math.round(sentiment * 1.0)),
    "Yelp": Math.min(100, Math.round(volume * 1.0)),
    "App Stores": Math.min(100, Math.round(trend * 1.0)),
  };
}

export function runReviewInsights(input: ReviewInsightsInput): ReviewInsightsOutput {
  const scores = {
    rating: input.ratingScore,
    sentiment: input.sentimentScore,
    authenticity: input.authenticityScore,
    volume: input.volumeScore,
    topicCoverage: input.topicCoverage,
    reputationTrend: input.reputationTrend,
  };
  const overallInsightsIndex = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / 6
  );
  return {
    business: input.business,
    platform: input.platform.charAt(0).toUpperCase() + input.platform.slice(1),
    ratingScore: input.ratingScore,
    sentimentScore: input.sentimentScore,
    authenticityScore: input.authenticityScore,
    volumeScore: input.volumeScore,
    topicCoverageScore: input.topicCoverage,
    reputationTrendScore: input.reputationTrend,
    overallInsightsIndex,
    priorityAction: getPriorityAction(scores),
    reviewChannels: getReviewChannels(input.ratingScore, input.sentimentScore, input.volumeScore, input.reputationTrend),
  };
}

const args = process.argv.slice(2);
const business = args[0] || "business-name";
const platform = args[1] || "google";
const ratingScore = parseInt(args[2]) || 88;
const sentimentScore = parseInt(args[3]) || 82;
const authenticityScore = parseInt(args[4]) || 85;
const volumeScore = parseInt(args[5]) || 78;
const topicCoverage = parseInt(args[6]) || 90;
const reputationTrend = parseInt(args[7]) || 84;

const result = runReviewInsights({
  business, platform, ratingScore, sentimentScore,
  authenticityScore, volumeScore, topicCoverage, reputationTrend,
});

console.log(`Business: ${result.business}`);
console.log(`Platform: ${result.platform}`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Rating Score:                  ${result.ratingScore}/100  [${getStatus(result.ratingScore)}]`);
console.log(`Sentiment Score:               ${result.sentimentScore}/100  [${getStatus(result.sentimentScore)}]`);
console.log(`Authenticity Score:            ${result.authenticityScore}/100  [${getStatus(result.authenticityScore)}]`);
console.log(`Volume Score:                  ${result.volumeScore}/100  [${getStatus(result.volumeScore)}]`);
console.log(`Topic Coverage Score:          ${result.topicCoverageScore}/100  [${getStatus(result.topicCoverageScore)}]`);
console.log(`Reputation Trend Score:        ${result.reputationTrendScore}/100  [${getStatus(result.reputationTrendScore)}]`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Overall Insights Index:        ${result.overallInsightsIndex}/100`);
console.log(`Priority Action:               ${result.priorityAction}`);
console.log("\nReview Channels:");
Object.entries(result.reviewChannels).forEach(([channel, score]) => {
  console.log(`  ${channel.padEnd(22)} ${score}/100`);
});

// Rating Improvement Calculator example
console.log("\nRating Improvement Calculator:");
console.log(`  ${calculateRatingImprovement(3.8, 120, 4.2)}`);
