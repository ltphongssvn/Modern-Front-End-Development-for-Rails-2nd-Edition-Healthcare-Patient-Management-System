// app/javascript/controllers/calendar_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["date", "slot", "selected"]
  
  selectDate(event) {
    this.dateTargets.forEach(date => {
      date.classList.remove("bg-blue-500", "text-white")
      date.classList.add("bg-white")
    })
    
    event.currentTarget.classList.remove("bg-white")
    event.currentTarget.classList.add("bg-blue-500", "text-white")
    
    this.selectedTarget.value = event.currentTarget.dataset.date
    this.loadTimeSlots(event.currentTarget.dataset.date)
  }
  
  selectSlot(event) {
    this.slotTargets.forEach(slot => {
      slot.classList.remove("ring-2", "ring-blue-500")
    })
    
    event.currentTarget.classList.add("ring-2", "ring-blue-500")
    this.selectedTarget.dataset.time = event.currentTarget.dataset.time
  }
  
  loadTimeSlots(date) {
    const slots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"]
    const slotsContainer = this.element.querySelector('[data-slots]')
    
    slotsContainer.innerHTML = slots.map(time => `
      <button type="button"
              data-calendar-target="slot"
              data-time="${time}"
              data-action="click->calendar#selectSlot"
              class="p-2 border rounded hover:bg-gray-100">
        ${time}
      </button>
    `).join('')
  }
}
