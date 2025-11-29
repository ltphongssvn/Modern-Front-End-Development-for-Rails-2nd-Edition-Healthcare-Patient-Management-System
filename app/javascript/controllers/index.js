// app/javascript/controllers/index.js
import { application } from "./application"

import HelloController from "./hello_controller"
import FormValidationController from "./form_validation_controller"
import CalendarController from "./calendar_controller"
import AutoSaveController from "./auto_save_controller"
import NotificationController from "./notification_controller"
import ModalController from "./modal_controller"

application.register("hello", HelloController)
application.register("form-validation", FormValidationController)
application.register("calendar", CalendarController)
application.register("auto-save", AutoSaveController)
application.register("notification", NotificationController)
application.register("modal", ModalController)
