import { useState } from "react"

export const useForm = (initialValue) => {
  const [formData, setFormData] = useState(initialValue)

  return [
    formData,
    setFormData,
    e => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  ]
}