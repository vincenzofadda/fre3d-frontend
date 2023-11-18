export function useStyleHelpers() {
  function isMobile() {
    // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    return window.innerWidth < 768
  }

  function setAppHeight() {
    const height = `${window.innerHeight}px`
    document.documentElement.style.setProperty('--app-height', height)
  }

  return {
    isMobile,
    setAppHeight,
  }
}
