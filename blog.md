---
layout: page
title: Blog
permalink: /blog/
---

<div class="blog-page">
  <div class="terminal-window">
    <div class="terminal-header">
      <div class="terminal-controls">
        <span class="control close"></span>
        <span class="control minimize"></span>
        <span class="control maximize"></span>
      </div>
      <div class="terminal-title">blog.md</div>
    </div>
    <div class="terminal-content">
      <div class="terminal-prompt">
        <span class="prompt-sign">$</span>
        <span class="prompt-command">find ./posts -type f | sort -r</span>
      </div>
      
      <h1>Blog Posts</h1>
      
      <div class="blog-posts">
        {% for post in site.posts %}
        <div class="post-item">
          <div class="post-date">{{ post.date | date: "%Y-%m-%d" }}</div>
          <h2 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>
          <div class="post-excerpt">
            {{ post.excerpt }}
          </div>
          <div class="post-meta">
            {% if post.categories.size > 0 %}
            <span class="post-categories">
              Categories: 
              {% for category in post.categories %}
                <a href="{{ '/categories/' | append: category | relative_url }}">{{ category }}</a>
                {%- unless forloop.last %}, {% endunless -%}
              {% endfor %}
            </span>
            {% endif %}
            
            {% if post.tags.size > 0 %}
            <span class="post-tags">
              Tags: 
              {% for tag in post.tags %}
                <a href="{{ '/tags/' | append: tag | relative_url }}" class="tag">{{ tag }}</a>
                {%- unless forloop.last %}, {% endunless -%}
              {% endfor %}
            </span>
            {% endif %}
          </div>
          <a href="{{ post.url | relative_url }}" class="read-more">Read More &raquo;</a>
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
