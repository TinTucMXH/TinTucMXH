// ======= DỮ LIỆU LỊCH THEO KÍP =======
// Format: "ngày": "D" (ngày), "N" (đêm), "OFF" (nghỉ)
const schedule2026 = {
    "Tháng 1": {
        days: 31,
        A: {1:"N",2:"N",3:"OFF",4:"OFF",5:"D"},
        B: {1:"D",2:"OFF",3:"N",4:"D"},
        C: {1:"OFF",2:"D",3:"D",4:"N"}
    },

    "Tháng 2": {
        days: 28,
        A: {1:"D",2:"N",3:"OFF"},
        B: {1:"OFF",2:"D",3:"N"},
        C: {1:"N",2:"OFF",3:"D"}
    }
    // 👉 Bạn chỉ cần điền thêm các tháng còn lại y như mẫu này
};

// ======= ĐỔ DANH SÁCH THÁNG =======
const monthSelect = document.getElementById("monthSelect");
const shiftSelect = document.getElementById("shiftSelect");
const calendarDiv = document.getElementById("calendar");

Object.keys(schedule2026).forEach(m => {
    let opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m;
    monthSelect.appendChild(opt);
});

// ======= HIỂN THỊ LỊCH =======
function renderCalendar() {
    const monthName = monthSelect.value;
    const shift = shiftSelect.value;

    const data = schedule2026[monthName];
    const totalDays = data.days;
    const shiftData = data[shift];

    calendarDiv.innerHTML = `
        <div class="month-title">${monthName} - Kíp ${shift}</div>
        <div class="calendar-grid">
            <div class="day-box header">T2</div>
            <div class="day-box header">T3</div>
            <div class="day-box header">T4</div>
            <div class="day-box header">T5</div>
            <div class="day-box header">T6</div>
            <div class="day-box header">T7</div>
            <div class="day-box header">CN</div>
        </div>
    `;

    let grid = document.createElement("div");
    grid.className = "calendar-grid";

    for (let d = 1; d <= totalDays; d++) {
        let box = document.createElement("div");
        box.className = "day-box";

        let work = shiftData[d];

        if (work === "D") box.classList.add("work-day");
        if (work === "N") box.classList.add("night-day");
        if (work === "OFF") box.classList.add("off-day");

        box.innerHTML = `<b>${d}</b><br>${work ? work : ""}`;

        grid.appendChild(box);
    }

    calendarDiv.appendChild(grid);
}

// ======= SỰ KIỆN =======
monthSelect.addEventListener("change", renderCalendar);
shiftSelect.addEventListener("change", renderCalendar);

// Load lần đầu
renderCalendar();