const timebox = document.getElementById("timebox");

function updatetime() {
    const now = new Date();
    const time = new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }).format(now);

    const offset = -now.getTimezoneOffset() / 60;
    let zone = offset === 7 ? "WIB" : offset === 8 ? "WITA" : offset === 9 ? "WIT" : "Local";

    if (timebox) {
        timebox.textContent = `${time} ${zone}`;
    }
}

setInterval(updatetime, 1000);
updatetime();