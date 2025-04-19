chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "download") {
      chrome.downloads.download({
        url: request.url,
        filename: request.filename,
        saveAs: false
      });
      sendResponse({status: "downloading"});
      return true;
    }
  });
  
  chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("tiktok.com")) {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
      });
    } else {
      chrome.tabs.create({
        url: "https://www.tiktok.com"
      });
    }
  });