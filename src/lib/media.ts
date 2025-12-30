const asset = (relativePath: string) => new URL(`../assets/${relativePath}`, import.meta.url).href

export const media = {
  wordmark: asset('stayarta-logo.svg'),
  preloader: asset('stayarta-preloader.svg'),
  hero: asset('7e6ecd5c886ac34f21d38d64853b35c630949441.png'),
  about: asset('e7fa3df5992de2612c6186d000811d815bda1f33.png'),
  nova: asset('bc8211b47852d1e6e8c25c8c088de1d6024990ea.png'),
  services: asset('4adb56e17f8a9cfbb52a7ce7db06856493d6fb5f.png'),
  monogram: asset('af2568eefb0e9316e22518dd4caba3b4584b0652.png'),
  placeholders: {
    avatar: asset('avatar_placeholder.png'),
    headset: asset('mock_headset.png'),
    sleeve: asset('mock_sleeve.png'),
    keyboard: asset('mock_keyboard.png'),
    mat: asset('mock_mat.png'),
    glasses: asset('mock_glasses.png'),
    mouse: asset('mock_mouse.png'),
    consulting: asset('mock_consulting.png'),
    ai: asset('mock_ai.png'),
  },
}
