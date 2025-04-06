---
layout: default
title: Archive
permalink: /archive/
---

<div class="archive-page">
  <div class="terminal-window">
    <div class="terminal-header">
      <div class="terminal-controls">
        <span class="control close"></span>
        <span class="control minimize"></span>
        <span class="control maximize"></span>
      </div>
      <div class="terminal-title">archive.md</div>
    </div>
    <div class="terminal-content">
      <div class="terminal-prompt">
        <span class="prompt-sign">$</span>
        <span class="prompt-command">find _posts/ -type f | sort -r</span>
      </div>
      
      <h1>Archive</h1>
      
      <div class="archive-list">
        {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
        {% for year in posts_by_year %}
          <div class="archive-year">
            <h2 class="year-heading">{{ year.name }}</h2>
            <div class="year-posts">
              {% for post in year.items %}
                <div class="archive-post">
                  <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
                  <a href="{{ post.url | relative_url }}" class="post-link">{{ post.title }}</a>
                  <div class="post-meta">
                    {% if post.categories.size > 0 %}
                      <span class="post-categories">
                        in 
                        {% for category in post.categories %}
                          <a href="{{ '/categories/#' | append: category | slugify | relative_url }}">{{ category }}</a>
                          {%- unless forloop.last %}, {% endunless -%}
                        {% endfor %}
                      </span>
                    {% endif %}
                  </div>
                </div>
              {% endfor %}
            </div>
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
  .archive-list {
    margin: 2rem 0;
  }
  
  .archive-year {
    margin-bottom: 2rem;
  }
  
  .year-heading {
    color: var(--accent-primary);
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--terminal-border);
  }
  
  .archive-post {
    margin-bottom: 1rem;
    padding-left: 1rem;
    border-left: 2px solid rgba(0, 255, 0, 0.2);
  }
  
  .post-date {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-right: 1rem;
  }
  
  .post-link {
    font-weight: bold;
  }
  
  .post-meta {
    margin-top: 0.3rem;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }
</style>
