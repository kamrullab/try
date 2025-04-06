---
layout: default
title: Categories
permalink: /categories/
---

<div class="categories-page">
  <div class="terminal-window">
    <div class="terminal-header">
      <div class="terminal-controls">
        <span class="control close"></span>
        <span class="control minimize"></span>
        <span class="control maximize"></span>
      </div>
      <div class="terminal-title">categories.md</div>
    </div>
    <div class="terminal-content">
      <div class="terminal-prompt">
        <span class="prompt-sign">$</span>
        <span class="prompt-command">ls -la /categories/</span>
      </div>
      
      <h1>Categories</h1>
      
      <div class="categories-list">
        {% assign categories = site.categories | sort %}
        {% for category in categories %}
          {% assign category_name = category | first %}
          {% assign posts = category | last %}
          <div class="category-item">
            <h2 class="category-name" id="{{ category_name | slugify }}">{{ category_name }}</h2>
            <div class="category-count">{{ posts.size }} post{% if posts.size != 1 %}s{% endif %}</div>
            <ul class="category-posts">
              {% for post in posts %}
                <li>
                  <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
                  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                </li>
              {% endfor %}
            </ul>
          </div>
        {% endfor %}
      </div>
      
      <div class="terminal-prompt">
        <span class="prompt-sign">$</span>
        <span class="prompt-command">_</span>
      </div>
    </div>
  </div>
</div>

<style>
  .categories-list {
    margin: 2rem 0;
  }
  
  .category-item {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px dashed var(--terminal-border);
  }
  
  .category-name {
    color: var(--accent-primary);
    margin-bottom: 0.5rem;
  }
  
  .category-count {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .category-posts {
    list-style: none;
  }
  
  .category-posts li {
    margin-bottom: 0.5rem;
  }
  
  .post-date {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-right: 1rem;
  }
</style>
