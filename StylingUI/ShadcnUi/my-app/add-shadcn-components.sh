# This script will add all shadcn/ui components to the project.
# There is an auto skip function if the component already exists.

# To run this script add this file to your root folder and create a script in the package.json:

# ex:   "scripts": {
#         "dev": "next dev",
#         "build": "next build",
#         "start": "next start",
#         "lint": "next lint",
#         "add-shadcn": "bash ./add-shadcn-components.sh" //!!! add this line to scripts
#       },


#!/bin/bash

components=(
  "accordion"
  "alert"
  "alert-dialog"
  "aspect-ratio"
  "avatar"
  "badge"
  "breadcrumb"
  "button"
  "calendar"
  "card"
  "carousel"
  "checkbox"
  "collapsible"
  "combobox"
  "command"
  "context-menu"
  "data-table"
  "date-picker"
  "dialog"
  "drawer"
  "dropdown-menu"
  "form"
  "hover-card"
  "input"
  "input-otp"
  "label"
  "menubar"
  "navigation-menu"
  "pagination"
  "popover"
  "progress"
  "radio-group"
  "resizable"
  "scroll-area"
  "select"
  "separator"
  "sheet"
  "skeleton"
  "slider"
  "sonner"
  "switch"
  "table"
  "tabs"
  "textarea"
  "toast"
  "toggle"
  "toggle-group"
  "tooltip"
)

for component in "${components[@]}"; do
  echo "Adding $component..."
  echo "n" | npx shadcn-ui@latest add "$component"
done

echo "All components added successfully."
