# Jekyll Hacker Blog - GitHub Pages Deployment Guide

This document provides instructions for deploying the Jekyll Hacker Blog to GitHub Pages.

## Prerequisites

Before deploying to GitHub Pages, ensure you have:

1. A GitHub account
2. Git installed on your local machine
3. Basic knowledge of Git commands

## Deployment Steps

### 1. Create a GitHub Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., `hacker-blog` or `username.github.io` for a user site)
4. Make the repository public
5. Do not initialize with README, .gitignore, or license (we'll push our existing code)
6. Click "Create repository"

### 2. Initialize Git and Push to GitHub

Run the following commands in your terminal from the project root directory:

```bash
# Initialize Git repository if not already done
git init

# Add all files to staging
git add .

# Commit the changes
git commit -m "Initial commit of Jekyll Hacker Blog"

# Add the remote GitHub repository
git remote add origin https://github.com/username/repository-name.git

# Push to GitHub
git push -u origin main
```

Replace `username` and `repository-name` with your GitHub username and repository name.

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the branch you want to deploy (usually `main` or `gh-pages`)
5. Click "Save"

GitHub will automatically build and deploy your site. You'll see a message with the URL where your site is published.

### 4. Using GitHub Actions for Deployment

This repository includes a GitHub Actions workflow file (`.github/workflows/github-pages.yml`) that automates the deployment process. The workflow:

1. Runs when you push to the main branch
2. Sets up the Jekyll environment
3. Builds the site using the GitHub Pages configuration
4. Deploys the built site to the gh-pages branch

No additional configuration is needed as the workflow file is already set up.

## Customizing Your Site

### Updating Site Information

Edit the `_config_github_pages.yml` file to update:

- Site title and description
- Social media usernames
- Repository information

### Custom Domain (Optional)

To use a custom domain with your GitHub Pages site:

1. Go to your repository settings
2. Scroll to the GitHub Pages section
3. Under "Custom domain", enter your domain name
4. Click "Save"
5. Create a CNAME file in your repository with your domain name

## Troubleshooting

If your site doesn't build correctly:

1. Check the GitHub Actions tab in your repository to see build logs
2. Ensure your Gemfile includes the github-pages gem
3. Verify your _config_github_pages.yml file has the correct settings

## Accessing the Admin Panel

The admin panel is accessible at `/admin/login/` on your deployed site. Use the following credentials:

- Username: admin
- Password: hackerblog

Note: This is a client-side authentication for demonstration purposes only. In a production environment, you would implement proper server-side authentication.

## Maintenance

To update your site after deployment:

1. Make changes to your local repository
2. Commit the changes
3. Push to GitHub
4. GitHub Actions will automatically rebuild and deploy your site
