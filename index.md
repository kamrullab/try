---
layout: default
title: Home
---

<div class="home">
  <div class="terminal-window">
    <div class="terminal-header">
      <div class="terminal-controls">
        <span class="control close"></span>
        <span class="control minimize"></span>
        <span class="control maximize"></span>
      </div>
      <div class="terminal-title">home.md</div>
    </div>
    <div class="terminal-content">
      <div class="terminal-prompt">
        <span class="prompt-sign">$</span>
        <span class="prompt-command">cat welcome.txt</span>
      </div>
      
      <div class="welcome-message">
        <h1>Welcome to the Hacker Blog</h1>
        <p>A Jekyll-based blog with a black hacker theme, admin panel, and GitHub Pages integration.</p>
        <p>Explore the digital underground with us as we delve into cybersecurity, ethical hacking, and technology.</p>
        
        <div class="cta-buttons">
          <a href="{{ '/blog' | relative_url }}" class="cta-button">Read Blog</a>
          <a href="{{ '/about' | relative_url }}" class="cta-button">About Us</a>
        </div>
      </div>
      
      <div class="terminal-prompt">
        <span class="prompt-sign">$</span>
        <span class="prompt-command">ls -la recent_posts/</span>
      </div>
      
      <div class="recent-posts">
        <h2>Recent Posts</h2>
        <ul class="post-list">
          {% for post in site.posts limit:5 %}
          <li>
            <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
            <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
          {% endfor %}
        </ul>
        
        <a href="{{ '/blog' | relative_url }}" class="view-all-link">View All Posts</a>
      </div>
      
      <div class="terminal-prompt">
        <span class="prompt-sign">$</span>
        <span class="prompt-command">_</span>
      </div>
    </div>
  </div>
</div>
