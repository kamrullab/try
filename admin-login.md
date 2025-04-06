---
layout: default
title: Admin Login
permalink: /admin/login/
---

<div class="login-container">
  <div class="login-form">
    <div class="login-header">
      <h1 class="login-title">Admin Access</h1>
      <p class="login-subtitle">Enter your credentials to access the admin panel</p>
    </div>
    
    <div class="login-content">
      <form id="login-form" action="#" method="POST">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" class="form-control" required>
        </div>
        
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" class="form-control" required>
        </div>
        
        <div class="form-group">
          <div id="login-error" class="admin-alert admin-alert-danger" style="display: none;">
            Invalid username or password. Please try again.
          </div>
        </div>
        
        <button type="submit" class="admin-btn" style="width: 100%;">Login</button>
      </form>
    </div>
    
    <div class="login-footer">
      <p class="login-footer-text">Hacker Blog Admin Panel</p>
    </div>
  </div>
</div>

<link rel="stylesheet" href="{{ '/assets/css/admin.css' | relative_url }}">
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Simple client-side authentication for demo purposes
      // In a real implementation, this would be handled server-side
      if (username === 'admin' && password === 'hackerblog') {
        // Store authentication in localStorage
        localStorage.setItem('hackerblog_auth', JSON.stringify({
          username: username,
          isAuthenticated: true,
          timestamp: new Date().getTime()
        }));
        
        // Redirect to admin dashboard
        window.location.href = '{{ "/admin/" | relative_url }}';
      } else {
        loginError.style.display = 'block';
      }
    });
  });
</script>
