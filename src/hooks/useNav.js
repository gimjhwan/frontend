import { useNavigate } from "react-router-dom"

export const useNav = () => {
  const navigate = useNavigate();
  const goTo = (path, replace = false) => {
    //기본값인 false일 때, 뒤로가기가 발생하면 이전 페이지로 이동. 
    //true일 경우, 이전 페이지로 돌아가지 않고 루트 경로('/')로 이동.
    navigate(path, {
      replace: replace
    });
  }
  return { goTo }
};