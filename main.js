const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const response = await fetch(
      "https://tjdzugzuzieuawnabdiz.supabase.co/functions/v1/send-inquiry",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message")
        })
      }
    );

    if (response.ok) {
      alert("Poptávka byla odeslána.");
      contactForm.reset();
    } else {
      alert("Odeslání se nepodařilo.");
    }
  });
}