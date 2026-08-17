from setuptools import setup

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="review-insights-tool",
    version="1.0.0",
    author="GetReviews.Space",
    author_email="info@getreviews.space",
    description="Review Insights Tool analyzes online customer reviews and turns unstructured feedback into useful business insights.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://getreviews.space",
    project_urls={
        "Homepage": "https://getreviews.space",
        "GitHub": "https://github.com/getreviews-space/review-insights-tool",
        "Documentation": "https://review-insights-tool.readthedocs.io",
        "PyPI": "https://pypi.org/project/review-insights-tool",
    },
    py_modules=["review_insights"],
    python_requires=">=3.8",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Topic :: Internet :: WWW/HTTP",
        "Topic :: Office/Business",
    ],
    keywords=[
        "review-insights-tool",
        "rating-analysis",
        "review-sentiment",
        "authenticity-signals",
        "rating-improvement-calculator",
        "reputation-trend",
        "customer-feedback-intelligence",
        "getreviews-space",
    ],
    entry_points={
        "console_scripts": [
            "review-insights=review_insights:main",
        ],
    },
)
