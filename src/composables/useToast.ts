import { reactive } from 'vue'

type ToastType = 'success' | 'error' | 'info'

const toast = reactive({
  visible: false,
  message: '',
  type: 'success' as ToastType,
})

let timer: ReturnType<typeof setTimeout> | undefined

export function useToast() {
  const showToast = (
    message: string,
    type: ToastType = 'success',
  ) => {
    if (timer) clearTimeout(timer)

    toast.message = message
    toast.type = type
    toast.visible = true

    timer = setTimeout(() => {
      toast.visible = false
    }, 3000)
  }

  const hideToast = () => {
    toast.visible = false
    if (timer) clearTimeout(timer)
  }

  return { toast, showToast, hideToast }
}