function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  updateAvatar()
}

function updateAvatar() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Renan Duarte utilizando óculos de sol, sem camisa, com uma lata de cheque-mate na mão e uma camisa enrolada e amassada sobre um dos ombros."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Renan Duarte utilizando óculos e vestindo jaqueta de cor azul clara aberta sobre uma camisa branca."
    )
  }
}

updateAvatar()
