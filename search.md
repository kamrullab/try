---
layout: default
title: Search
permalink: /search/
---

<div class="search-page">
  <div class="terminal-window">
    <div class="terminal-header">
      <div class="terminal-controls">
        <span class="control close"></span>
        <span class="control minimize"></span>
        <span class="control maximize"></span>
      </div>
      <div class="terminal-title">search.md</div>
    </div>
    <div class="terminal-content">
      <div class="terminal-prompt">
        <span class="prompt-sign">$</span>
        <span class="prompt-command">grep -r "keyword" _posts/</span>
      </div>
      
      <h1>Search</h1>
      
      <div class="search-container">
        <div class="search-form">
          <input type="text" id="search-input" class="search-input" placeholder="Enter search term...">
          <button id="search-button" class="search-button">Search</button>
        </div>
        
        <div class="search-results" id="search-results">
          <p class="search-instructions">Type a keyword and press Search to find posts.</p>
        </div>
      </div>
      
      <div class="terminal-prompt">
        <span class="prompt-sign">$</span>
        <span class="prompt-command">_</span>
      </div>
    </div>
  </div>
</div>

<style>
  .search-container {
    margin: 2rem 0;
  }
  
  .search-form {
    display: flex;
    margin-bottom: 2rem;
  }
  
  .search-input {
    flex-grow: 1;
    padding: 0.8rem;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--terminal-border);
    border-radius: 4px 0 0 4px;
    color: var(--text-primary);
    font-family: var(--font-mono);
  }
  
  .search-input:focus {
    outline: none;
    border-color: var(--accent-primary);
  }
  
  .search-button {
    padding: 0.8rem 1.5rem;
    background-color: var(--accent-primary);
    border: 1px solid var(--accent-primary);
    border-radius: 0 4px 4px 0;
    color: var(--bg-primary);
    font-family: var(--font-mono);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .search-button:hover {
    background-color: var(--accent-secondary);
    border-color: var(--accent-secondary);
  }
  
  .search-results {
    margin-top: 2rem;
  }
  
  .search-instructions {
    color: var(--text-secondary);
    text-align: center;
    font-style: italic;
  }
  
  .search-result {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px dashed var(--terminal-border);
  }
  
  .result-title {
    margin-bottom: 0.5rem;
  }
  
  .result-date {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .result-snippet {
    margin-bottom: 0.5rem;
  }
  
  .highlight {
    background-color: rgba(0, 255, 0, 0.2);
    padding: 0 0.2rem;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Get all posts data
    const posts = [
      {% for post in site.posts %}
        {
          title: "{{ post.title | escape }}",
          url: "{{ post.url | relative_url }}",
          date: "{{ post.date | date: "%b %-d, %Y" }}",
          content: {{ post.content | strip_html | jsonify }},
          categories: [{% for category in post.categories %}"{{ category }}"{% unless forloop.last %},{% endunless %}{% endfor %}],
          tags: [{% for tag in post.tags %}"{{ tag }}"{% unless forloop.last %},{% endunless %}{% endfor %}]
        }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ];
    
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    
    // Function to perform search
    function performSearch() {
      const query = searchInput.value.trim().toLowerCase();
      
      if (query.length < 2) {
        searchResults.innerHTML = '<p class="search-instructions">Please enter at least 2 characters to search.</p>';
        return;
      }
      
      // Filter posts that match the query
      const results = posts.filter(post => {
        return post.title.toLowerCase().includes(query) || 
               post.content.toLowerCase().includes(query) ||
               post.categories.some(category => category.toLowerCase().includes(query)) ||
               post.tags.some(tag => tag.toLowerCase().includes(query));
      });
      
      // Display results
      if (results.length > 0) {
        let resultsHTML = `<h2>${results.length} result${results.length > 1 ? 's' : ''} found for "${query}"</h2>`;
        
        results.forEach(post => {
          // Create snippet with highlighted query
          let snippet = post.content;
          
          // Truncate snippet to around the first match
          const matchIndex = snippet.toLowerCase().indexOf(query);
          if (matchIndex > 50) {
            snippet = '...' + snippet.substring(matchIndex - 50);
          }
          if (snippet.length > 200) {
            snippet = snippet.substring(0, 200) + '...';
          }
          
          // Highlight query in snippet
          const regex = new RegExp(query, 'gi');
          snippet = snippet.replace(regex, match => `<span class="highlight">${match}</span>`);
          
          resultsHTML += `
            <div class="search-result">
              <h3 class="result-title"><a href="${post.url}">${post.title}</a></h3>
              <div class="result-date">${post.date}</div>
              <div class="result-snippet">${snippet}</div>
              <div class="result-meta">
                ${post.categories.length > 0 ? 'Categories: ' + post.categories.map(cat => `<a href="/categories/#${cat.toLowerCase()}">${cat}</a>`).join(', ') : ''}
                ${post.tags.length > 0 ? ' | Tags: ' + post.tags.map(tag => `<a href="/tags/#${tag.toLowerCase()}">${tag}</a>`).join(', ') : ''}
              </div>
            </div>
          `;
        });
        
        searchResults.innerHTML = resultsHTML;
      } else {
        searchResults.innerHTML = `<p>No results found for "${query}".</p>`;
      }
    }
    
    // Event listeners
    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  });
</script>
