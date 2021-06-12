const currentTimeSlot = (date) => {
    const hour = date.getHours()
    const day = date.getDay()

    if (isValle(hour, day)) {
        return 'valle'
    }

    if (isLlano(hour, day)) {
        return 'llano'
    }

    return 'punta'
}

const isValle = (hour, day) => {
    if (isWeekend(day)) {
        return true
    }

    return hour >= 0 && hour < 8;
}

const isLlano = (hour, day) => {
    if (isWeekend(day)) {
        return false
    }

    if (hour >= 8 && hour < 10) {
        return true
    }

    if (hour >= 14 && hour < 18) {
        return true
    }

    return hour >= 22 && hour < 24;
}

const isPunta = (hour, day) => {
    if (isWeekend(day)) {
        return false
    }

    if (hour >= 10 && hour < 14) {
        return true
    }

    return hour >= 18 && hour < 22;
}

const isWeekend = (day) => {
    return day === 0 || day === 6
}

const darkMode = (hour) => {
    return (hour >= 19 && hour <= 23) || (hour >= 0 && hour <= 6)
}

const getRandomImagePath = (emojis, slot) => {
    const i = Math.floor(Math.random() * (slot === "valle" ? 6 : 18)) + 1

    return `images/${emojis[slot]}-${i}.png`
}