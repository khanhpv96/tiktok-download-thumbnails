function isProfilePage() {
    return window.location.href.match(/@[^/]+/);
  }
  
  function removeHashtags(text) {
    const hashtagIndex = text.indexOf("#");
    if (hashtagIndex !== -1) {
      return text.substring(0, hashtagIndex).trim();
    }
    return text.trim();
  }
  
  function downloadImage(url, filename) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Lỗi khi tải ảnh:', error);
      });
  }
  
  function createDownloadButton(videoElement) {
    if (!videoElement || videoElement.querySelector('.tk-thumb-dl-btn')) {
      return;
    }
  
    const img = videoElement.querySelector('img');
    if (!img) return;
  
    const downloadButton = document.createElement('button');
    downloadButton.innerText = 'Tải ảnh';
    downloadButton.className = 'tk-thumb-dl-btn';
    
    downloadButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const imageUrl = img.src;
      let fileName = removeHashtags(img.alt);
      fileName = fileName.replace(/[\\/:*?"<>|]/g, '');
      
      downloadImage(imageUrl, fileName + '.jpg');
    });
    
    videoElement.appendChild(downloadButton);
  }
  
  function processVideos() {
    if (!isProfilePage()) return;
    
    setTimeout(() => {
      const videoItems = document.querySelectorAll('div[data-e2e="user-post-item"]');
      
      videoItems.forEach(item => {
        const videoWrapper = item.querySelector('div[class*="DivContainer"]');
        if (videoWrapper) {
          createDownloadButton(videoWrapper);
        }
      });
    }, 500);
  }
  
  function setupObserver() {
    const observer = new MutationObserver(() => {
      processVideos();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  document.addEventListener('DOMContentLoaded', processVideos);
  window.addEventListener('load', processVideos);
  window.addEventListener('scroll', () => {
    setTimeout(processVideos, 500);
  });
  
  processVideos();
  setupObserver();