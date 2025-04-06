// Admin panel functionality for Hacker Blog

document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on an admin page
  const isAdminPage = window.location.pathname.includes('/admin');
  if (!isAdminPage) return;

  // Authentication functions
  const auth = {
    isAuthenticated: function() {
      const authData = JSON.parse(localStorage.getItem('hackerblog_auth') || '{}');
      if (!authData.isAuthenticated) return false;
      
      // Check if auth has expired (24 hours)
      const now = new Date().getTime();
      const authTime = authData.timestamp || 0;
      if (now - authTime > 24 * 60 * 60 * 1000) {
        localStorage.removeItem('hackerblog_auth');
        return false;
      }
      
      return true;
    },
    
    login: function(username, password) {
      // Simple client-side authentication for demo purposes
      if (username === 'admin' && password === 'hackerblog') {
        localStorage.setItem('hackerblog_auth', JSON.stringify({
          username: username,
          isAuthenticated: true,
          timestamp: new Date().getTime()
        }));
        return true;
      }
      return false;
    },
    
    logout: function() {
      localStorage.removeItem('hackerblog_auth');
      window.location.href = '/admin/login/';
    }
  };

  // Login page functionality
  if (window.location.pathname.includes('/admin/login')) {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (auth.login(username, password)) {
          window.location.href = '/admin/';
        } else {
          const loginError = document.getElementById('login-error');
          if (loginError) {
            loginError.style.display = 'block';
          }
        }
      });
    }
    
    // If already authenticated, redirect to admin dashboard
    if (auth.isAuthenticated()) {
      window.location.href = '/admin/';
    }
  }
  
  // Admin dashboard functionality
  if (window.location.pathname === '/admin/' || window.location.pathname === '/admin') {
    // If not authenticated, redirect to login
    if (!auth.isAuthenticated()) {
      window.location.href = '/admin/login/';
      return;
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        auth.logout();
      });
    }
    
    // Navigation between sections
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
        
        // Update URL hash
        window.location.hash = targetSection;
      });
    });
    
    // Handle URL hash on page load
    if (window.location.hash) {
      const targetSection = window.location.hash.substring(1);
      const targetLink = document.querySelector(`.admin-menu-link[data-section="${targetSection}"]`);
      if (targetLink) {
        targetLink.click();
      }
    }
    
    // Markdown editor functionality
    const markdownInput = document.querySelector('.markdown-input');
    const markdownPreview = document.querySelector('.markdown-preview');
    const previewButton = document.querySelector('.markdown-tool[title="Preview"]');
    
    if (markdownInput && markdownPreview && previewButton) {
      // Toggle preview mode
      previewButton.addEventListener('click', function() {
        const editorContent = document.querySelector('.markdown-editor-content');
        editorContent.classList.toggle('preview-mode');
        
        if (editorContent.classList.contains('preview-mode')) {
          markdownInput.style.display = 'none';
          markdownPreview.style.display = 'block';
        } else {
          markdownInput.style.display = 'block';
          markdownPreview.style.display = 'none';
        }
      });
      
      // Live preview
      markdownInput.addEventListener('input', function() {
        markdownPreview.innerHTML = convertMarkdownToHtml(this.value);
      });
      
      // Markdown toolbar buttons
      const boldButton = document.querySelector('.markdown-tool[title="Bold"]');
      const italicButton = document.querySelector('.markdown-tool[title="Italic"]');
      const headingButton = document.querySelector('.markdown-tool[title="Heading"]');
      const linkButton = document.querySelector('.markdown-tool[title="Link"]');
      const imageButton = document.querySelector('.markdown-tool[title="Image"]');
      const codeButton = document.querySelector('.markdown-tool[title="Code"]');
      const listButton = document.querySelector('.markdown-tool[title="List"]');
      
      if (boldButton) {
        boldButton.addEventListener('click', function() {
          insertMarkdown(markdownInput, '**', '**', 'bold text');
        });
      }
      
      if (italicButton) {
        italicButton.addEventListener('click', function() {
          insertMarkdown(markdownInput, '*', '*', 'italic text');
        });
      }
      
      if (headingButton) {
        headingButton.addEventListener('click', function() {
          insertMarkdown(markdownInput, '## ', '', 'Heading');
        });
      }
      
      if (linkButton) {
        linkButton.addEventListener('click', function() {
          insertMarkdown(markdownInput, '[', '](https://example.com)', 'link text');
        });
      }
      
      if (imageButton) {
        imageButton.addEventListener('click', function() {
          insertMarkdown(markdownInput, '![', '](https://example.com/image.jpg)', 'alt text');
        });
      }
      
      if (codeButton) {
        codeButton.addEventListener('click', function() {
          insertMarkdown(markdownInput, '```\n', '\n```', 'code here');
        });
      }
      
      if (listButton) {
        listButton.addEventListener('click', function() {
          insertMarkdown(markdownInput, '* ', '', 'List item');
        });
      }
    }
    
    // Post management functionality
    const deleteButtons = document.querySelectorAll('.admin-btn-danger');
    deleteButtons.forEach(button => {
      button.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this post?')) {
          // In a real implementation, this would send a request to delete the post
          const row = this.closest('tr');
          if (row) {
            row.remove();
            showNotification('Post deleted successfully', 'success');
          }
        }
      });
    });
    
    // Settings save functionality
    const settingsForms = document.querySelectorAll('.admin-form');
    settingsForms.forEach(form => {
      const saveButton = form.querySelector('.admin-btn');
      if (saveButton) {
        saveButton.addEventListener('click', function() {
          // In a real implementation, this would save the settings
          showNotification('Settings saved successfully', 'success');
        });
      }
    });
    
    // Media upload functionality
    const mediaDropzone = document.querySelector('.media-dropzone');
    if (mediaDropzone) {
      mediaDropzone.addEventListener('click', function() {
        // Create a file input and trigger it
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.multiple = true;
        
        fileInput.addEventListener('change', function() {
          // In a real implementation, this would upload the files
          if (this.files.length > 0) {
            showNotification(`${this.files.length} file(s) selected for upload`, 'success');
          }
        });
        
        fileInput.click();
      });
      
      // Drag and drop functionality
      mediaDropzone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
      });
      
      mediaDropzone.addEventListener('dragleave', function() {
        this.classList.remove('dragover');
      });
      
      mediaDropzone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        
        // In a real implementation, this would upload the files
        if (e.dataTransfer.files.length > 0) {
          showNotification(`${e.dataTransfer.files.length} file(s) dropped for upload`, 'success');
        }
      });
    }
    
    // New post functionality
    const publishButton = document.querySelector('#new-post .admin-btn');
    if (publishButton) {
      publishButton.addEventListener('click', function() {
        const title = document.getElementById('post-title').value;
        const content = document.querySelector('.markdown-input').value;
        const categories = document.getElementById('post-categories').value;
        const tags = document.getElementById('post-tags').value;
        const date = document.getElementById('post-date').value;
        
        if (!title || !content) {
          showNotification('Title and content are required', 'danger');
          return;
        }
        
        // In a real implementation, this would create a new post
        showNotification('Post published successfully', 'success');
        
        // Clear form
        document.getElementById('post-title').value = '';
        document.querySelector('.markdown-input').value = '';
        document.getElementById('post-categories').value = '';
        document.getElementById('post-tags').value = '';
        document.getElementById('post-date').value = '';
        
        // Update markdown preview
        if (markdownPreview) {
          markdownPreview.innerHTML = '';
        }
      });
    }
  }
  
  // Helper functions
  function convertMarkdownToHtml(markdown) {
    // Simple Markdown to HTML conversion
    return markdown
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
      // Images
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">')
      // Lists
      .replace(/^\* (.*$)/gm, '<ul><li>$1</li></ul>')
      // Paragraphs
      .replace(/^\s*(\n)?(.+)/gm, function(m) {
        return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
      })
      // Fix for multiple </ul>
      .replace(/<\/ul>\s*<ul>/g, '');
  }
  
  function insertMarkdown(textarea, before, after, placeholder) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const replacement = before + (selectedText || placeholder) + after;
    
    textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
    
    // Update preview
    const event = new Event('input');
    textarea.dispatchEvent(event);
    
    // Set cursor position
    textarea.focus();
    if (selectedText) {
      textarea.selectionStart = start + before.length;
      textarea.selectionEnd = start + before.length + selectedText.length;
    } else {
      textarea.selectionStart = start + before.length;
      textarea.selectionEnd = start + before.length + placeholder.length;
    }
  }
  
  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `admin-alert admin-alert-${type}`;
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.maxWidth = '300px';
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(function() {
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.5s ease';
      
      setTimeout(function() {
        document.body.removeChild(notification);
      }, 500);
    }, 3000);
  }
});
