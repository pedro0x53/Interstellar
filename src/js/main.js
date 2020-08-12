class Controller {

	static slider() {
		const sliders = document.querySelectorAll(".slider")
		sliders.forEach((slider) => {
			const progress = document.createElement("span")
				progress.classList.add("progress")
				progress.style.width = slider.value / 10 + "%"

			slider.parentElement.appendChild(progress)

			slider.oninput = () => {
				const range = slider.parentElement.childNodes[3]
				range.style.width = slider.value / 10 + "%"
			}
		})
	}

	static cursor() {
		const cursor = document.getElementById("cursor")

		window.onmousemove = (event) => {
			let x = event.pageX
			let y = event.pageY

			cursor.style.top = y + "px"
			cursor.style.left = x + "px"
		}
	}

	static click() {
		const cursor = document.getElementById("cursor")
		const touchableElements = document.querySelectorAll(".touchable")

		touchableElements.forEach((element) => {
			element.onmouseover = () => {
				cursor.classList.add("touching")
			}
			element.onmouseout = () => {
				cursor.classList.remove("touching")
			}
		})

		window.onmousedown = () => {
			cursor.classList.toggle("active")

			if(cursor.classList.contains("touching")) {
				const ripple = document.createElement("span")
				ripple.classList.add("ripple")
				cursor.appendChild(ripple)

				setTimeout(() => {
					cursor.removeChild(ripple)
				}, 1100)
			}
		}

		window.onmouseup = (event) => {
			cursor.classList.toggle("active")
		}
	}

	static touchable() {
		const touchableElements = document.querySelectorAll("a, h1, h2, h3, h4, h5, h6, p, span, button, .slider-container, li, .combobox, input")
		touchableElements.forEach((element) => {
			element.classList.add("touchable")
		})
	}


}

window.onload = () => {
	Controller.touchable()
	Controller.slider()	
	Controller.cursor()
	Controller.click()
}