// content.js-এর তথ্য ওয়েবসাইটে দেখায়। সাধারণত এই ফাইল পরিবর্তন করতে হবে না।
(function () {
  const d = window.MADRASA;
  if (!d) return;
  const put = (id, value) => { const el = document.getElementById(id); if (el && value != null) el.textContent = value; };
  document.title = d.name;
  put("topline", "বিসমিল্লাহির রাহমানির রাহীম • ভর্তি চলছে — " + d.admissionClasses);
  put("brand-name", d.shortName || d.name);
  put("brand-address", d.address);
  put("hero-name", d.name);
  put("parent-name", (d.parent || "") + "—এর অঙ্গ প্রতিষ্ঠান");
  put("tagline", d.tagline);
  put("intro-text", d.intro);
  put("mission-text", d.mission);
  put("established", d.established.replace(" খ্রি.", ""));
  put("admission-classes", d.admissionClasses);
  put("admission-start", d.admissionStart);
  put("admission-address", d.address);
  put("contact-name", d.name);
  put("contact-address", d.address);
  put("contact-parent", d.parent);
  put("contact-established", d.established);
  put("footer-name", d.name);
  put("footer-parent", (d.parent || "") + "—এর অঙ্গ প্রতিষ্ঠান");
  put("footer-address", d.address);
  const firstDigits = (d.phones && d.phones[0] || "").replace(/[^\d]/g, "");
  const call = document.getElementById("admission-call");
  if (call && firstDigits) call.href = "tel:" + firstDigits;
  const phoneList = document.getElementById("phone-list");
  if (phoneList) {
    phoneList.replaceChildren();
    (d.phones || []).forEach(number => {
      const a = document.createElement("a");
      a.className = "phone";
      a.href = "tel:" + number.replace(/[^\d]/g, "");
      a.textContent = number;
      phoneList.appendChild(a);
    });
  }
  const features = document.getElementById("feature-list");
  if (features) {
    features.replaceChildren();
    (d.features || []).forEach(item => {
      const div = document.createElement("div");
      div.className = "feature";
      const mark = document.createElement("span");
      mark.className = "check";
      mark.textContent = "✓";
      const text = document.createElement("span");
      text.textContent = item;
      div.append(mark, text);
      features.appendChild(div);
    });
  }
  const gallery = document.getElementById("gallery-list");
  if (gallery) {
    gallery.replaceChildren();
    (d.gallery || []).forEach(item => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.src = "assets/" + item.file;
      img.alt = item.caption || "মাদরাসার ছবি";
      const caption = document.createElement("figcaption");
      caption.textContent = item.caption || "";
      figure.append(img, caption);
      gallery.appendChild(figure);
    });
  }
// শিক্ষক ও কর্মচারীদের পরিচিতি
  const teacherList = document.getElementById("teacher-list");

  if (teacherList) {
    teacherList.replaceChildren();

    (d.teachers || []).forEach((teacher, index) => {
      const card = document.createElement("div");
      card.className = "teacher-card";

      const name = document.createElement("h3");
      name.textContent = (index + 1) + ". " + teacher.name;

      const role = document.createElement("p");
      role.textContent = "পদবি: " + teacher.role;

      const phone = document.createElement("p");
      phone.textContent = "মোবাইল: " + teacher.phone;

      const call = document.createElement("a");
      call.className = "phone";
      call.href = "tel:" + teacher.phone.replace(/[^\d]/g, "");
      call.textContent = "☎ কল করুন";

      card.append(name, role, phone, call);
      teacherList.appendChild(card);
    });
  }})();
