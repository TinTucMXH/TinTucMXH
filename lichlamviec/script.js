// ======= DỮ LIỆU LỊCH NĂM 2026 (ví dụ) =======
const schedule2026 = {
    "January": {
        A: ["1:N", "2:N", "3:OFF", "4:OFF"],
        B: ["1:OFF", "2:D", "3:D", "4:N"],
        C: ["1:D", "2:OFF", "3:N", "4:D"]
    },
    "February": {
        A: ["1:N", "2:N", "3:OFF", "4:OFF"],
        B: ["1:D", "2:D", "3:OFF", "4:N"],
        C: ["1:OFF", "2:N", "3:D", "4:D"]
    }
    // 👉 Bạn sẽ thay bằng toàn bộ lịch thật theo ảnh
};

// Danh sách tháng
const months = Object.keys(schedule2026);

const calendarDiv = document.getElementById("calendar");
const shiftSelect = document.getElementById("shiftSelect");

function renderCalendar(shift) {
    calendarDiv.innerHTML = "";

    months.forEach(month => {
        let box = document.createElement("div");
        box.className = "month-box";

        let title = document.createElement("div");
        title.className = "month-title";
        title.textContent = month;
        box.appendChild(title);

        let daysGrid = document.createElement("div");
        daysGrid.className = "days";

        schedule2026[month][shift].forEach((entry, index) => {
            let [dayType, type] = entry.split(":");

            let dayBox = document.createElement("div");
            dayBox.className = "day";

            if (type === "D" || type === "N") dayBox.classList.add("work");
            if (type === "OFF") dayBox.classList.add("off");

            dayBox.innerHTML = `<b>${index + 1}</b><br>${type}`;
            daysGrid.appendChild(dayBox);
        });

        box.appendChild(daysGrid);
        calendarDiv.appendChild(box);
    });
}

// Lần đầu load
renderCalendar("A");

// Khi đổi kíp
shiftSelect.addEventListener("change", e => {
    renderCalendar(e.target.value);
});