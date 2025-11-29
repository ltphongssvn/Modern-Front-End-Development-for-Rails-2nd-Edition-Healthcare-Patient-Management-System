// app/javascript/controllers/auto_save_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "status"]
  static values = { url: String, delay: Number }
  
  connect() {
    this.delayValue = this.delayValue || 1500
    this.timeout = null
  }
  
  save() {
    clearTimeout(this.timeout)
    this.statusTarget.textContent = "Saving..."
    
    this.timeout = setTimeout(() => {
      const formData = new FormData()
      this.inputTargets.forEach(input => {
        formData.append(input.name, input.value)
      })
      
      fetch(this.urlValue, {
        method: 'PATCH',
        headers: {
          'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content
        },
        body: formData
      })
      .then(response => {
        if (response.ok) {
          this.statusTarget.textContent = "Saved"
          setTimeout(() => {
            this.statusTarget.textContent = ""
          }, 2000)
        }
      })
    }, this.delayValue)
  }
}
