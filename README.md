# Jekyll Hacker Blog

A Jekyll-based blog with a black hacker theme, admin panel, and GitHub Pages integration.

![Hacker Blog Screenshot](assets/images/screenshot.png)

## Features

- **Black Hacker Theme**: Dark background with neon green accents, terminal-style windows, and cybersecurity aesthetics
- **Admin Panel**: Client-side admin interface for managing posts, media, and settings
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Blog Management**: Categories, tags, archive, and search functionality
- **GitHub Pages Ready**: Pre-configured for easy deployment to GitHub Pages

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Admin Panel](#admin-panel)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Local Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/username/jekyll-hacker-blog.git
   cd jekyll-hacker-blog
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the Jekyll site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and navigate to `http://localhost:4000`

## Usage

### Creating Posts

Create new posts by adding Markdown files to the `_posts` directory with the following format:

```markdown
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +0000
categories: [category1, category2]
tags: [tag1, tag2]
---

Your post content here...
```

### Adding Pages

Add new pages by creating Markdown files in the root directory with the following format:

```markdown
---
layout: page
title: "Your Page Title"
permalink: /your-page-url/
---

Your page content here...
```

### Navigation

Edit the `_config.yml` file to update the navigation menu:

```yaml
header_pages:
  - about.md
  - blog.md
  - contact.md
```

## Admin Panel

The blog includes a client-side admin panel for managing content.

### Accessing the Admin Panel

1. Navigate to `/admin/login/` on your site
2. Login with the following credentials:
   - Username: `admin`
   - Password: `hackerblog`

### Admin Features

- **Dashboard**: Overview of blog statistics
- **Posts**: Manage existing posts
- **New Post**: Create new blog posts with a Markdown editor
- **Media**: Upload and manage images
- **Settings**: Configure blog settings

## Customization

### Theme Customization

The theme can be customized by editing the following files:

- `assets/css/style.css`: Main styling
- `assets/css/responsive.css`: Responsive design rules
- `assets/js/main.js`: JavaScript functionality

### Site Configuration

Edit the `_config.yml` file to customize:

- Site title and description
- Social media links
- Default author information
- Other Jekyll settings

### Layout Customization

Modify the layout templates in the `_layouts` directory:

- `default.html`: Main layout template
- `post.html`: Blog post layout
- `page.html`: Static page layout

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Quick GitHub Pages Deployment

1. Create a GitHub repository
2. Push your code to the repository
3. Enable GitHub Pages in the repository settings
4. Your site will be available at `https://username.github.io/repository-name/`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Jekyll](https://jekyllrb.com/)
- [GitHub Pages](https://pages.github.com/)
- [Hacker Theme for Jekyll](https://github.com/pages-themes/hacker)
