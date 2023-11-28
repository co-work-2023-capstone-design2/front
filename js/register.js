$("#register-form").on("submit", (event) => {
  event.preventDefault();
  const user_name = $("#user-name").val();
  const user_email = $("#user-email").val();
  const user_pw = $("#user-pw").val();
  // to do: send user data to server

  location.href = "login.html";
});
