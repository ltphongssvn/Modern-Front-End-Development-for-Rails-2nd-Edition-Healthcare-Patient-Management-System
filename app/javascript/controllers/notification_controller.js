// app/javascript/controllers/notification_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["message"]
  static values = { duration: Number }
  
  connect() {
    this.durationValue = this.durationValue || 3000
    this.show()
  }
  
  show() {
    this.element.classList.remove("hidden")
    this.element.classList.add("animate-slide-in")
    
    setTimeout(() => {
      this.dismiss()
    }, this.durationValue)
  }
  
  dismiss() {
    this.element.classList.add("animate-slide-out")
    
    setTimeout(() => {
      this.element.remove()
    }, 300)
  }
}
