const timer = new CountdownTimer({
    selector: "#clock1",
    targetDate: new Date("November, 20 2022 19:00:00"),
});

timer.startTimer();