// app/javascript/controllers/form_validation_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["field", "error"]
  
  connect() {
    this.validateFields()
  }
  
  validateField(event) {
    const field = event.target
    const errorTarget = this.errorTargets.find(e => e.dataset.field === field.name)
    
    if (field.validity.valid) {
      field.classList.remove("border-red-500")
      field.classList.add("border-green-500")
      if (errorTarget) errorTarget.textContent = ""
    } else {
      field.classList.remove("border-green-500")
      field.classList.add("border-red-500")
      if (errorTarget) {
        if (field.validity.valueMissing) {
          errorTarget.textContent = `${field.name} is required`
        } else if (field.validity.typeMismatch) {
          errorTarget.textContent = `Please enter a valid ${field.type}`
        }
      }
    }
  }
  
  validateFields() {
    this.fieldTargets.forEach(field => {
      field.addEventListener('blur', this.validateField.bind(this))
      field.addEventListener('input', this.validateField.bind(this))
    })
  }
  
  submit(event) {
    event.preventDefault()
    let isValid = true
    
    this.fieldTargets.forEach(field => {
      if (!field.validity.valid) {
        isValid = false
        this.validateField({ target: field })
      }
    })
    
    if (isValid) {
      event.target.submit()
    }
  }
}
