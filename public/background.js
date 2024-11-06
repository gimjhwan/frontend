// 크롬 익스텐션이 설치 되었을 때 실행되는 부분
chrome.runtime.onInstalled.addListener(() => {
  // 크롬 익스텐션 설치 시, 소개 페이지 탭 생성
});

// 팝업 버튼 클릭 시 새로운 창을 열어 landing.html과 ChatGPT 탭을 띄움
// 활성화된 탭의 정보를 바탕으로 사이드 패널을 열고 관리함

// 전역 변수 선언
let homeAndGptWindow = null; // 생성된 "홈페이지 및 ChatGPT" 윈도우를 저장
let currentWindowId = null; // 현재 활성화된 윈도우의 ID
let currentTabId = null; // 현재 활성화된 탭의 ID
let landingTabId = null; // landing.html 탭의 ID
let gptTabId = null; // ChatGPT 탭의 ID
let gptTab = null; // ChatGPT 탭 객체

// 현재 활성화된 탭과 윈도우 정보를 설정하는 함수
function setActiveTabAndWindow(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      const currentTab = tabs[0]; // 활성화된 첫 번째 탭 선택
      currentTabId = currentTab.id; // 활성화된 탭의 ID 저장
      currentWindowId = currentTab.windowId; // 활성화된 윈도우의 ID 저장
      callback();
    } else {
      console.log("활성화된 탭을 찾을 수 없습니다.");
    }
  });
}

// 사이드 패널을 열고 설정하는 함수
function openSidePanel() {
  chrome.sidePanel.setOptions({ enabled: true, tabId: currentTabId });
  chrome.sidePanel.open({ windowId: currentWindowId });
  console.log("현재 활성화된 탭 ID:", currentTabId);
  console.log("현재 활성화된 윈도우 ID:", currentWindowId);
}

// 새로운 ChatGPT 및 landing.html 윈도우를 생성하는 함수
async function createHomeAndGptWindow() {
  homeAndGptWindow = await chrome.windows.create({
    url: ["landing.html", "https://chat.openai.com"],
    type: "normal",
    width: 1200,
    height: 800,
    focused: false, // 포커스가 옮겨지지 않도록 설정
  });

  // 각 탭의 ID 저장
  landingTabId = homeAndGptWindow.tabs[0].id;
  gptTabId = homeAndGptWindow.tabs[1].id;
  gptTab = homeAndGptWindow.tabs[1];

  console.log("Open chatgpt tab and landing.html tab to squeeze!");
}

// ChatGPT 탭을 생성하는 함수
async function createGptTab() {
  gptTab = await chrome.tabs.create({
    url: "https://chat.openai.com",
    windowId: homeAndGptWindow.id,
  });
  gptTabId = gptTab.id;
}

// 팝업의 버튼이 눌렸을 때의 preview.jsx/onSqueeze()의 메시지를 수신하기 위한 이벤트 리스너 등록
chrome.runtime.onMessage.addListener(async (request) => {
  if (request.action === "open_sidepanel") {
    try {
      if (request.type) {
        await chrome.storage.local.set({ type: request.type });
      }
      /*
      if (!homeAndGptWindow) {
        await createHomeAndGptWindow(); // ChatGPT 및 landing.html 창 생성
        // 기존 윈도우로 다시 포커스 이동
        await chrome.windows.update(currentWindowId, { focused: true });
      } else if (!gptTab) {
        await createGptTab(); // ChatGPT 탭이 없으면 생성
      }*/
      openSidePanel(); // 사이드 패널 열기
    } catch (error) {
      console.error("Error in open_sidepanel:", error);
    }
  }
});

// 만약 열어놨던 chat gpt 탭이나 landing.html 탭이 닫히면 사이드 패널도 닫히도록 함

// 윈도우가 닫힐 때 동작을 감지하는 리스너 등록
/*chrome.windows.onRemoved.addListener((windowId) => {
  // 닫힌 윈도우가 homeAndGptWindow 인지 확인
  if (homeAndGptWindow && homeAndGptWindow.id === windowId) {
    homeAndGptWindow = null; // homeAndGptWindow 객체 초기화 (null로 설정)
    gptTab = null; // gptTab 객체 초기화 (null로 설정)

    // 사이드 패널 비활성화
    chrome.sidePanel.setOptions({ enabled: false, tabId: currentTabId });
    console.log("Side panel closed because homepage and GPT window closed."); // 사이드 패널이 닫혔음을 로그에 출력
  }
});*/

// 탭이 닫힐 때 동작을 감지하는 리스너 등록
/*chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  // 닫힌 탭이 landingTab 또는 gptTab 인지 확인
  if (tabId === landingTabId || tabId === gptTabId) {
    // 해당 탭이 닫히면 사이드 패널 비활성화
    chrome.sidePanel.setOptions({ enabled: false, tabId: currentTabId });
    console.log("Side panel closed because one of the tabs was closed."); // 탭이 닫혀서 사이드 패널이 닫혔음을 로그에 출력

    // 닫힌 탭이 gptTab 인지 확인
    if (tabId === gptTabId) {
      console.log("gpt tab closed."); // gpt 탭이 닫혔음을 로그에 출력
      gptTab = null; // gptTab 객체 초기화
      gptTabId = null; // gptTabId 초기화
    }

    // 닫힌 탭이 landingTab 인지 확인
    if (tabId === landingTabId) {
      landingTabId = null; // landingTabId 초기화
    }
  }
});*/

// 현재 탭 상황에서 변화가 생기면 바로 반영해서 TabList 업데이트
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.runtime.sendMessage({ action: "update" });
});

chrome.tabs.onCreated.addListener(() => {
  chrome.runtime.sendMessage({ action: "update" });
});

chrome.tabs.onRemoved.addListener(() => {
  chrome.runtime.sendMessage({ action: "update" });
});

// 웹 페이지에서 필요한 html 태그만 추출하는 함수
function extractHtml() {
  let extractedContent = "";
  const elements = document.querySelectorAll("title, h1, h2, p, li");
  const contentArray = Array.from(elements).map((el) => el.innerText);
  const finalContent = contentArray.join("\n");

  return finalContent;
}

// 익스텐션 실행 중에 들어오는 모든 요청을 처리
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // 웹 페이지 요약 요청 처리
  if (request.action == "scripting") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const current_tab = tabs[0];
      if (current_tab) {
        chrome.scripting.executeScript(
          {
            target: { tabId: current_tab.id },
            function: extractHtml,
          },
          (result) => {
            if (result) {
              sendResponse({ content: result[0].result });
            }
          }
        );
      }
    });
    return true;
    //
  } else if (request.action == "summarizing") {
    const content = request.content; // 추출한 코드가 들어있는 문자열입니다!
  } else if (request.action == "open_sidepanel") {
    currentTab = request.tab;
    chrome.sidePanel.open({ tabId: currentTab.id }); // 사이드바 열기
    return true;
  }
});
