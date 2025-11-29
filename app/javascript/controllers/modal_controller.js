// app/javascript/controllers/modal_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container"]
  
  open() {
    this.element.classList.remove("hidden")
    document.body.classList.add("overflow-hidden")
  }
  
  close(event) {
    if (event.target === this.element || event.target.closest('[data-modal-close]')) {
      this.element.classList.add("hidden")
      document.body.classList.remove("overflow-hidden")
    }
  }
  
  disconnect() {
    document.body.classList.remove("overflow-hidden")
  }
}
