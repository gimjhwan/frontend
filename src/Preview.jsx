function Preview() {
  function onSqueeze() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      chrome.runtime.sendMessage({ action: "open_sidepanel", tab: currentTab });
    });
  }

  return (
    <div>
      <h2>Do you wanna squeezy?</h2>
      <div>
        <button onClick={onSqueeze}>squeeze</button>
        <button>eezy</button>
      </div>
      <button>Your History</button>
    </div>
  );
}

export default Preview;
