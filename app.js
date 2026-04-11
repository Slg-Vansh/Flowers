window.onload = () => {

  // ✅ UNLOCK ALL ANIMATIONS (FLOWERS START HERE)
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  // 🌸 TEXT LOGIC
  setTimeout(() => {

   const msg = document.getElementById("birthdayMessage");
    const el = document.getElementById("typeText");

    msg.classList.remove("hidden");
    msg.classList.add("show");

    const text1 = "🌸Chuttad🌸\n🌸ho🌸\n🌸aapp🌸";

    let i = 0;

    function typeText1() {
      if (i < text1.length) {
        if (text1[i] === "\n") {
          el.innerHTML += "<br>";
        } else {
          el.innerHTML += text1[i];
        }
        i++;
        setTimeout(typeText1, 80);
      } else {
        setTimeout(fadeOutText, 2000);
      }
    }

    function fadeOutText() {
      msg.style.opacity = "0";

      setTimeout(() => {
        el.innerHTML = "";
        msg.style.opacity = "1";
        typeText2();
      }, 1000);
    }

    const text2 = "🌸Flowers for you🌸🖤";

    let j = 0;

    function typeText2() {
      if (j < text2.length) {
        el.innerHTML += text2[j];
        j++;
        setTimeout(typeText2, 80);
      }
    }

    typeText1();

  }, 5000);

};