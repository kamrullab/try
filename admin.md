---
layout: default
title: Admin Dashboard
permalink: /admin/
---

<div class="admin-panel">
  <div class="admin-header">
    <h1 class="admin-title">Hacker Blog Admin</h1>
    <div class="admin-controls">
      <button id="logout-btn" class="admin-control">Logout</button>
    </div>
  </div>
  
  <div class="admin-layout">
    <div class="admin-sidebar">
      <ul class="admin-menu">
        <li class="admin-menu-item">
          <a href="#dashboard" class="admin-menu-link active" data-section="dashboard">
            <i class="fas fa-tachometer-alt"></i> Dashboard
          </a>
        </li>
        <li class="admin-menu-item">
          <a href="#posts" class="admin-menu-link" data-section="posts">
            <i class="fas fa-file-alt"></i> Posts
          </a>
        </li>
        <li class="admin-menu-item">
          <a href="#new-post" class="admin-menu-link" data-section="new-post">
            <i class="fas fa-plus-circle"></i> New Post
          </a>
        </li>
        <li class="admin-menu-item">
          <a href="#media" class="admin-menu-link" data-section="media">
            <i class="fas fa-images"></i> Media
          </a>
        </li>
        <li class="admin-menu-item">
          <a href="#settings" class="admin-menu-link" data-section="settings">
            <i class="fas fa-cog"></i> Settings
          </a>
        </li>
      </ul>
    </div>
    
    <div class="admin-main">
      <!-- Dashboard Section -->
      <div id="dashboard" class="admin-content admin-section active">
        <h2>Dashboard</h2>
        
        <div class="admin-stats">
          <div class="stat-card">
            <div class="stat-value">3</div>
            <div class="stat-label">Total Posts</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">2</div>
            <div class="stat-label">Categories</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">5</div>
            <div class="stat-label">Tags</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">0</div>
            <div class="stat-label">Comments</div>
          </div>
        </div>
        
        <div class="admin-card">
          <h3 class="admin-card-title">Recent Posts</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Categories</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Welcome to the Hacker Blog</td>
                <td>2025-04-06</td>
                <td>introduction, announcements</td>
                <td>
                  <a href="#" class="admin-btn">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Introduction to Ethical Hacking</td>
                <td>2025-04-05</td>
                <td>tutorials, cybersecurity</td>
                <td>
                  <a href="#" class="admin-btn">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Basic Linux Commands for Hackers</td>
                <td>2025-04-04</td>
                <td>tutorials, linux</td>
                <td>
                  <a href="#" class="admin-btn">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- Posts Section -->
      <div id="posts" class="admin-content admin-section">
        <h2>All Posts</h2>
        
        <div class="admin-card">
          <div class="admin-form">
            <div class="admin-form-group">
              <input type="text" class="admin-form-control" placeholder="Search posts...">
            </div>
          </div>
          
          <table class="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Categories</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Welcome to the Hacker Blog</td>
                <td>2025-04-06</td>
                <td>introduction, announcements</td>
                <td>welcome, getting-started</td>
                <td>
                  <a href="#" class="admin-btn">Edit</a>
                  <button class="admin-btn admin-btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Introduction to Ethical Hacking</td>
                <td>2025-04-05</td>
                <td>tutorials, cybersecurity</td>
                <td>ethical-hacking, beginners, security</td>
                <td>
                  <a href="#" class="admin-btn">Edit</a>
                  <button class="admin-btn admin-btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Basic Linux Commands for Hackers</td>
                <td>2025-04-04</td>
                <td>tutorials, linux</td>
                <td>command-line, linux, tools, beginners</td>
                <td>
                  <a href="#" class="admin-btn">Edit</a>
                  <button class="admin-btn admin-btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- New Post Section -->
      <div id="new-post" class="admin-content admin-section">
        <h2>Create New Post</h2>
        
        <div class="admin-card">
          <div class="admin-form">
            <div class="admin-form-group">
              <label class="admin-form-label" for="post-title">Title</label>
              <input type="text" id="post-title" class="admin-form-control" placeholder="Enter post title">
            </div>
            
            <div class="admin-form-group">
              <label class="admin-form-label">Content</label>
              <div class="markdown-editor">
                <div class="markdown-toolbar">
                  <button type="button" class="markdown-tool" title="Bold"><i class="fas fa-bold"></i></button>
                  <button type="button" class="markdown-tool" title="Italic"><i class="fas fa-italic"></i></button>
                  <button type="button" class="markdown-tool" title="Heading"><i class="fas fa-heading"></i></button>
                  <button type="button" class="markdown-tool" title="Link"><i class="fas fa-link"></i></button>
                  <button type="button" class="markdown-tool" title="Image"><i class="fas fa-image"></i></button>
                  <button type="button" class="markdown-tool" title="Code"><i class="fas fa-code"></i></button>
                  <button type="button" class="markdown-tool" title="List"><i class="fas fa-list-ul"></i></button>
                  <button type="button" class="markdown-tool" title="Preview"><i class="fas fa-eye"></i></button>
                </div>
                <div class="markdown-editor-content">
                  <textarea class="markdown-input" placeholder="Write your post content here using Markdown..."></textarea>
                  <div class="markdown-preview"></div>
                </div>
              </div>
            </div>
            
            <div class="admin-form-group">
              <label class="admin-form-label" for="post-categories">Categories</label>
              <input type="text" id="post-categories" class="admin-form-control" placeholder="Enter categories (comma separated)">
            </div>
            
            <div class="admin-form-group">
              <label class="admin-form-label" for="post-tags">Tags</label>
              <input type="text" id="post-tags" class="admin-form-control" placeholder="Enter tags (comma separated)">
            </div>
            
            <div class="admin-form-group">
              <label class="admin-form-label" for="post-date">Publication Date</label>
              <input type="date" id="post-date" class="admin-form-control">
            </div>
            
            <div class="admin-form-actions">
              <button type="button" class="admin-btn admin-btn-secondary">Save Draft</button>
              <button type="button" class="admin-btn">Publish</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Media Section -->
      <div id="media" class="admin-content admin-section">
        <h2>Media Library</h2>
        
        <div class="admin-card">
          <div class="media-upload">
            <div class="media-dropzone">
              <div class="media-dropzone-icon">
                <i class="fas fa-cloud-upload-alt"></i>
              </div>
              <div class="media-dropzone-text">
                <p>Drag and drop files here or click to upload</p>
                <p><small>Supported formats: JPG, PNG, GIF, SVG</small></p>
              </div>
            </div>
          </div>
          
          <div class="media-grid">
            <div class="media-item">
              <img src="https://via.placeholder.com/150" alt="Media item">
              <div class="media-item-overlay">
                <div class="media-item-actions">
                  <button class="media-item-action" title="View"><i class="fas fa-eye"></i></button>
                  <button class="media-item-action" title="Copy URL"><i class="fas fa-link"></i></button>
                  <button class="media-item-action" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
              </div>
            </div>
            <div class="media-item">
              <img src="https://via.placeholder.com/150" alt="Media item">
              <div class="media-item-overlay">
                <div class="media-item-actions">
                  <button class="media-item-action" title="View"><i class="fas fa-eye"></i></button>
                  <button class="media-item-action" title="Copy URL"><i class="fas fa-link"></i></button>
                  <button class="media-item-action" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
              </div>
            </div>
            <div class="media-item">
              <img src="https://via.placeholder.com/150" alt="Media item">
              <div class="media-item-overlay">
                <div class="media-item-actions">
                  <button class="media-item-action" title="View"><i class="fas fa-eye"></i></button>
                  <button class="media-item-action" title="Copy URL"><i class="fas fa-link"></i></button>
                  <button class="media-item-action" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Settings Section -->
      <div id="settings" class="admin-content admin-section">
        <h2>Blog Settings</h2>
        
        <div class="admin-card">
          <h3 class="admin-card-title">General Settings</h3>
          <div class="admin-form">
            <div class="admin-form-group">
              <label class="admin-form-label" for="blog-title">Blog Title</label>
              <input type="text" id="blog-title" class="admin-form-control" value="Hacker Blog">
            </div>
            
            <div class="admin-form-group">
              <label class="admin-form-label" for="blog-description">Blog Description</label>
              <textarea id="blog-description" class="admin-form-control" rows="3">A Jekyll-based blog with a black hacker theme, admin panel, and GitHub Pages integration.</textarea>
            </div>
            
            <div class="admin-form-group">
              <label class="admin-form-label" for="blog-author">Default Author</label>
              <input type="text" id="blog-author" class="admin-form-control" value="Admin">
            </div>
            
            <div class="admin-form-actions">
              <button type="button" class="admin-btn">Save Settings</button>
            </div>
          </div>
        </div>
        
        <div class="admin-card">
          <h3 class="admin-card-title">Social Media</h3>
          <div class="admin-form">
            <div class="admin-form-group">
              <label class="admin-form-label" for="github-username">GitHub Username</label>
              <input type="text" id="github-username" class="admin-form-control" value="jekyll">
            </div>
            
            <div class="admin-form-group">
              <label class="admin-form-label" for="twitter-username">Twitter Username</label>
              <input type="text" id="twitter-username" class="admin-form-control" value="jekyllrb">
            </div>
            
            <div class="admin-form-actions">
              <button type="button" class="admin-btn">Save Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<link rel="stylesheet" href="{{ '/assets/css/admin.css' | relative_url }}">
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Authentication check
    const auth = JSON.parse(localStorage.getItem('hackerblog_auth') || '{}');
    if (!auth.isAuthenticated) {
      window.location.href = '{{ "/admin/login/" | relative_url }}';
      return;
    }
    
    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function() {
      localStorage.removeItem('hackerblog_auth');
      window.location.href = '{{ "/admin/login/" | relative_url }}';
    });
    
    // Navigation
    const menuLinks = document.querySelectorAll('.admin-menu-link');
    const sections = document.querySelectorAll('.admin-section');
    
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetSection = this.getAttribute('data-section');
        
        // Update active menu link
        menuLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        
        // Show target section, hide others
        sections.forEach(section => {
          if (section.id === targetSection) {
            section.classList.add('active');
          } else {
            section.classList.remove('active');
          }
        });
      });
    });
    
    // Simple Markdown preview
    const markdownInput = document.querySelector('.markdown-input');
    const markdownPreview = document.querySelector('.markdown-preview');
    
    if (markdownInput && markdownPreview) {
      markdownInput.addEventListener('input', function() {
        // Very simple Markdown to HTML conversion
        let html = this.value
          // Headers
          .replace(/^# (.*$)/gm, '<h1>$1</h1>')
          .replace(/^## (.*$)/gm, '<h2>$1</h2>')
          .replace(/^### (.*$)/gm, '<h3>$1</h3>')
          // Bold
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          // Italic
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          // Code blocks
          .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
          // Inline code
          .replace(/`(.*?)`/g, '<code>$1</code>')
          // Links
          .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
          // Lists
          .replace(/^\* (.*$)/gm, '<ul><li>$1</li></ul>')
          // Paragraphs
          .replace(/^\s*(\n)?(.+)/gm, function(m) {
            return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
          })
          // Fix for multiple </ul>
          .replace(/<\/ul>\s*<ul>/g, '');
        
        markdownPreview.innerHTML = html;
      });
    }
  });
</script>

<style>
  .admin-section {
    display: none;
  }
  
  .admin-section.active {
    display: block;
  }
</style>
