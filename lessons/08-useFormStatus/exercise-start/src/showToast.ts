export const showToast = (message: string, duration: number = 3000) => {
  // Create toast container if it doesn't exist
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.style.position = "fixed";
    toastContainer.style.top = "10px";
    toastContainer.style.right = "10px";
    toastContainer.style.zIndex = "1000";
    toastContainer.style.display = "flex";
    toastContainer.style.flexDirection = "column";
    toastContainer.style.gap = "10px";
    document.body.appendChild(toastContainer);
  }

  // Create toast element
  const toast = document.createElement("div");
  toast.style.background = "rgba(0, 0, 0, 0.8)";
  toast.style.color = "white";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "5px";
  toast.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
  toast.style.opacity = "1";
  toast.style.transition = "opacity 0.5s ease-in-out";
  toast.innerText = message;

  // Append toast to container
  toastContainer.appendChild(toast);

  // Remove toast after specified duration
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, duration);
};
