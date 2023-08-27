let elList = document.querySelectorAll(".contractCopy");

elList.forEach((el) => {
  el.addEventListener("click", () => {
    let copyText = document.querySelector(".contractCopy input").value;

    try {
      navigator.clipboard.writeText(copyText);
    } catch (err) {}

    var input = document.createElement("input");
    input.setAttribute("readonly", "readonly");
    input.setAttribute("value", copyText);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    window.alert("Copy Success!");
  });
});
