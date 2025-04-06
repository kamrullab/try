# User Guide: Jekyll Hacker Blog

This guide provides instructions for using the Jekyll Hacker Blog, including how to access the admin panel, create and manage content, and customize the site.

## Accessing Your Blog

### Local Access
If you're running the blog locally:
1. Navigate to the project directory
2. Run `bundle exec jekyll serve`
3. Open your browser and go to `http://localhost:4000`

### GitHub Pages Access
If deployed to GitHub Pages:
1. Your site will be available at `https://username.github.io/repository-name/`
2. Or at your custom domain if you've configured one

## Admin Panel

### Logging In
1. Navigate to `/admin/login/` on your site
2. Enter the following credentials:
   - Username: `admin`
   - Password: `hackerblog`

### Dashboard
The dashboard provides an overview of your blog:
- Total posts count
- Categories and tags statistics
- Recent posts list

### Managing Posts
To manage existing posts:
1. Click on "Posts" in the sidebar
2. View all posts in a table format
3. Use the "Edit" button to modify a post
4. Use the "Delete" button to remove a post

### Creating New Posts
To create a new post:
1. Click on "New Post" in the sidebar
2. Fill in the post title
3. Write your content using the Markdown editor
   - Use the toolbar buttons for formatting
   - Toggle between edit and preview modes
4. Add categories and tags (comma-separated)
5. Set the publication date
6. Click "Publish" to publish immediately or "Save Draft" to save without publishing

### Media Management
To manage media files:
1. Click on "Media" in the sidebar
2. View all uploaded images
3. Upload new images by:
   - Clicking on the dropzone area
   - Dragging and dropping files
4. Use the overlay actions to view, copy URL, or delete images

### Site Settings
To modify site settings:
1. Click on "Settings" in the sidebar
2. Update general settings like blog title and description
3. Configure social media links
4. Click "Save Settings" to apply changes

## Blog Features

### Navigation
The main navigation includes:
- Home: Main landing page
- Blog: List of all posts
- Categories: Posts organized by category
- Tags: Posts organized by tag
- Archive: Chronological list of all posts
- Search: Search functionality for finding content
- About: Information about the blog
- Contact: Contact information

### Search Functionality
To search for content:
1. Click on "Search" in the navigation
2. Enter your search term
3. Press "Search" or Enter
4. View results that match your query in titles, content, categories, or tags

### Categories and Tags
To browse posts by category or tag:
1. Click on "Categories" or "Tags" in the navigation
2. View all categories/tags with post counts
3. Click on a specific category/tag to see all related posts

### Archive
To browse posts chronologically:
1. Click on "Archive" in the navigation
2. Posts are organized by year and month
3. Click on any post title to read the full post

## Customization Tips

### Theme Colors
To change the theme colors:
1. Edit `assets/css/style.css`
2. Modify the root variables at the top of the file:
   ```css
   :root {
     --bg-primary: #0a0e17;
     --accent-primary: #00ff00;
     /* other variables */
   }
   ```

### Adding Custom Pages
To add a new page:
1. Create a new Markdown file in the root directory
2. Add the following front matter:
   ```markdown
   ---
   layout: page
   title: "Your Page Title"
   permalink: /your-page-url/
   ---
   ```
3. Add your content below the front matter
4. To include in navigation, add the page to `header_pages` in `_config.yml`

### Custom Fonts
To change fonts:
1. Edit `assets/css/style.css`
2. Modify the font variables:
   ```css
   :root {
     --font-mono: 'Your Monospace Font', monospace;
     --font-sans: 'Your Sans Font', sans-serif;
   }
   ```
3. Add the font imports at the top of the CSS file or in `head-custom.html`

## Troubleshooting

### Common Issues

#### Site Not Building
- Check your `_config.yml` for syntax errors
- Ensure all required gems are installed
- Look for error messages in the build output

#### Admin Panel Not Working
- Ensure JavaScript is enabled in your browser
- Check browser console for errors
- Verify you're using the correct login credentials

#### Responsive Design Issues
- Test on multiple devices and browsers
- Check `assets/css/responsive.css` for media queries
- Use browser developer tools to debug layout problems

### Getting Help
If you encounter issues:
1. Check the Jekyll documentation: https://jekyllrb.com/docs/
2. Search for solutions on Stack Overflow
3. Open an issue on the GitHub repository

## Maintenance

### Regular Updates
To keep your blog secure and up-to-date:
1. Regularly update Jekyll and its dependencies:
   ```bash
   bundle update
   ```
2. Keep your GitHub Pages gem updated
3. Test locally before deploying updates

### Backup
Regularly backup your content:
1. Keep a local copy of your repository
2. Consider using Git branches for major changes
3. Export your posts periodically

## Additional Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [Liquid Template Language](https://shopify.github.io/liquid/)
