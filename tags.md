---
layout: default
title: Tags
permalink: /tags/
---

<div class="tags-page">
  <div class="terminal-window">
    <div class="terminal-header">
      <div class="terminal-controls">
        <span class="control close"></span>
        <span class="control minimize"></span>
        <span class="control maximize"></span>
      </div>
      <div class="terminal-title">tags.md</div>
    </div>
    <div class="terminal-content">
      <div class="terminal-prompt">
        <span class="prompt-sign">$</span>
        <span class="prompt-command">grep -r "tags:" _posts/ | sort | uniq</span>
      </div>
      
      <h1>Tags</h1>
      
      <div class="tags-cloud">
        {% assign tags = site.tags | sort %}
        {% for tag in tags %}
          {% assign tag_name = tag | first %}
          {% assign posts = tag | last %}
          <a href="#{{ tag_name | slugify }}" class="tag-link" style="font-size: calc(0.8rem + {{ posts.size | times: 0.1 }}rem);">
            {{ tag_name }} <span class="tag-count">({{ posts.size }})</span>
          </a>
        {% endfor %}
      </div>
      
      <div class="tags-list">
        {% for tag in tags %}
          {% assign tag_name = tag | first %}
          {% assign posts = tag | last %}
          <div class="tag-item">
            <h2 class="tag-name" id="{{ tag_name | slugify }}">{{ tag_name }}</h2>
            <div class="tag-count">{{ posts.size }} post{% if posts.size != 1 %}s{% endif %}</div>
            <ul class="tag-posts">
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
  .tags-cloud {
    margin: 2rem 0;
    text-align: center;
  }
  
  .tag-link {
    display: inline-block;
    margin: 0.5rem;
    padding: 0.3rem 0.6rem;
    background-color: rgba(0, 255, 0, 0.1);
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  .tag-link:hover {
    background-color: var(--accent-primary);
    color: var(--bg-primary);
    text-shadow: none;
  }
  
  .tag-link:hover::after {
    width: 0;
  }
  
  .tag-count {
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
  
  .tags-list {
    margin: 2rem 0;
  }
  
  .tag-item {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px dashed var(--terminal-border);
  }
  
  .tag-name {
    color: var(--accent-primary);
    margin-bottom: 0.5rem;
  }
  
  .tag-count {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .tag-posts {
    list-style: none;
  }
  
  .tag-posts li {
    margin-bottom: 0.5rem;
  }
  
  .post-date {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-right: 1rem;
  }
</style>
